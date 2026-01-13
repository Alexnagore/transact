# transAct  
#### Un panel de gestión de flotas de robots de código abierto  
por <a href="https://transitiverobotics.com">
 <img src="https://transitiverobotics.com/img/logo.svg" style="height: 20px; vertical-align: text-top;"> Transitive Robotics
 </a>

 ![Screenshot from 2025-01-22 16-56-03](https://github.com/user-attachments/assets/ddd0c751-d940-4b73-b6ed-0703b01e1ffb)

![Screenshot from 2025-01-22 16-55-38](https://github.com/user-attachments/assets/8b2c4068-8aa7-468b-b68a-991b46951f67)


TransAct es un ejemplo del tipo de paneles de gestión de flotas de robots / portales en la nube / centros de control de misiones / centros de operaciones robóticas que puedes construir usando Transitive. Cumple tres objetivos:

1. demostrar cómo [Transitive](https://github.com/transitiverobotics/transitive) puede usarse para construir sistemas web de gestión de robots,
2. demostrar cómo integrar [Capacidades de Transitive](https://transitiverobotics.com/caps/) en tus propios paneles web, y
3. servir como implementación de referencia que te invitamos a bifurcar (fork) y ampliar si estás empezando a construir tu propio sistema.

Creemos que las empresas de robótica se enfrentan a un [dilema entre construir o comprar](https://transitiverobotics.com/blog/make-vs-buy/) y nuestra misión es resolverlo ofreciendo un punto intermedio: facilitar la creación de un sistema de gestión de flotas propio que se adapte perfectamente a sus necesidades.

En la configuración estándar, se integran varias capacidades:
- [Teleoperación remota](https://transitiverobotics.com/caps/transitive-robotics/remote-teleop/), para controlar tu robot con vídeo de baja latencia desde cualquier lugar del mundo,
- [Terminal](https://transitiverobotics.com/caps/transitive-robotics/terminal/), para acceso a una consola web,
- [Herramienta ROS](https://transitiverobotics.com/caps/transitive-robotics/ros-tool/), para suscribirse a tópicos ROS desde la web, utilizada para mostrar posición, batería y estado de carga,
- [Gestión de configuración](https://transitiverobotics.com/caps/transitive-robotics/configuration-management/), para editar archivos de configuración de forma jerárquica,
- [Monitorización de estado](https://transitiverobotics.com/caps/transitive-robotics/health-monitoring/), para diagnósticos individuales y de flota.

## Configuración

### Fork
Te animamos a [hacer un fork de este repositorio](https://github.com/transitiverobotics/transact/fork) y usarlo como punto de partida.

### Clonar
Después de hacer el fork, clona transAct localmente (reemplaza `SUPERBOTS` por tu organización):

```bash
git clone git@github.com:SUPERBOTS/transact.git
```

O clona directamente este repositorio:

```bash
git clone git@github.com:transitiverobotics/transact.git
```

### Configurar

1. Ve a https://portal.transitiverobotics.com y crea una cuenta.
2. Copia `sample.env` a `.env` y edítalo:
   - **VITE_TRANSITIVE_USER**: tu usuario de Transitive.
   - **JWT_SECRET**: tu secreto JWT desde https://portal.transitiverobotics.com/security.
3. Ejecuta `npm install`.

### Ejecutar

1. Ejecuta `npm run dev`.
2. Abre http://localhost:3000/.
3. ¡Disfruta!

Al principio no verás robots hasta que los añadas a tu cuenta.

## Obtener robots

Sigue las [instrucciones](https://transitiverobotics.com/docs/guides/getting-started/) para añadir robots.  
Puedes usar la imagen Docker de ejemplo desde la [página de flota](https://portal.transitiverobotics.com/).

Una vez aparezcan en el Portal de Transitive, también lo harán en transAct.

## Configurar capacidades

Edita `src/client/config/config.ts` para definir las capacidades instaladas y sus propiedades.

## ¡Hazlo tuyo!

El código es tuyo. Reemplaza “SuperBots” por el nombre de tu empresa, cambia el logo y ajusta las secciones en `src/client/sections`.

La forma más sencilla es configurar las capacidades en el Portal de Transitive y copiar el código React desde “Embed”.

### Componentes de UI

Este proyecto usa [ShadCn](https://ui.shadcn.com/) y [Tailwind CSS](https://tailwindcss.com/).  
Ejemplo para añadir un *Slider*:

```bash
npx shadcn@latest add slider
```

Uso:

```jsx
import { Slider } from "@/components/ui/slider"

<div>
  <Label htmlFor="password" className="text-xl">Felicidad del robot</Label>
  <Slider id="robot-happiness" defaultValue={[100]} max={100} step={1} />
</div>
```

## Obtener ayuda

¿Preguntas? [Únete a nuestro Slack](https://transitiverobotics.com/slack).  
Para sugerencias, abre *issues* o *pull requests*.

---

#### Atribución

Logotipo de SuperBots:  
<a href="https://www.flaticon.com/free-icons/robot">Iconos de robot creados por Freepik - Flaticon</a>
