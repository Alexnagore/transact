import { Amplify } from 'aws-amplify';

// Configuración de Amplify - Reemplaza con tus valores reales de AWS Cognito
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID || 'us-east-1_xxxxx',
      userPoolClientId: process.env.REACT_APP_COGNITO_CLIENT_ID || 'xxxxx',
      region: process.env.REACT_APP_COGNITO_REGION || 'us-east-1',
    }
  }
});

export default Amplify;
