import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getLogger} from '@transitive-sdk/utils-web';
import { Label } from '@components/ui/label';
import { Input } from '@components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from '@components/ui/dialog';
import { Button } from '@components/ui/button';
import { UserContext } from '@components/user-context';
import { signIn } from 'aws-amplify/auth';

const log = getLogger('App');
log.setLevel('debug');

export const Login = ({}) => {
  const {error: contextError, session} = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (session && session.user) {
    return <Navigate to="/dashboard/devices" />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { isSignedIn } = await signIn({
        username,
        password
      });

      if (isSignedIn) {
        log.debug('Successfully signed in with Amplify');
      }
    } catch (err) {
      log.error('Login error:', err);
      const errorMessage = err.message || 'Failed to log in, please check your credentials.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Login
          </DialogTitle>
          <DialogDescription>
              Please enter your username and password.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleLogin}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Username
              </Label>
              <Input
                id="name"
                value={username}
                className="col-span-3"
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                value={password}
                className="col-span-3"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
            {(error || contextError) && <div className="text-red-500">{error || contextError}</div>}
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );  
}