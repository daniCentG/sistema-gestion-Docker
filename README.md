# Sistema de Gestión con Docker

## Descripción
Este proyecto es parte del Sistema-de-Gestión-de-Productos que está subido en mi repositorio. En este caso utilicé Docker para la contenerización de la aplicación, proporcionando una solución escalable y fácil de desplegar para gestionar diferentes servicios.

Aquí tienes una muestra del front-end del sistema: https://danicentg.github.io/OnlyFrontEnd-Sistema-de-gestion-de-productos/

El sistema está diseñado para ser altamente modular y escalable, permitiendo la integración de múltiples servicios que pueden ser gestionados de manera independiente. Cada servicio se ejecuta en su propio contenedor Docker, lo que facilita el mantenimiento y la actualización de cada componente del sistema sin afectar a los demás.

Asegúrate de configurar correctamente las variables de entorno en el archivo `.env` antes de levantar los contenedores. Lo explico más abajo.

## Características
- Contenerización con Docker.
- Fácil despliegue y escalabilidad.
- Gestión de múltiples servicios.

## Stack de Tecnologías
- **Docker**
- **Docker Compose**
- **Node.js**
- **JavaScript**
- **HTML, CSS**
- **PostgreSQL**

## Instalación
1. Clona el repositorio:
    ```bash
    git clone https://github.com/daniCentG/sistema-gestion-Docker.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd sistema-gestion-Docker
    ```
3. Cambia el archivo .env-Ejemplo a ".env" (sin las comillas).

4. Configura las variables de entorno en el archivo `.env` según tus necesidades o déjala como está.

## Levantar el Proyecto
1. Construye y levanta los contenedores:
    ```bash
    docker-compose up --build
    ```
2. Tienes que crear la base de datos con el nombre que está en el .env. 
SI QUIERES USAR LA CONFIGURACIÓN DE LAS TABLAS QUE CREÉ LO TIENES AQUÍ MISMO PARA NO CREARLA, COPIA EL CONTENIDO DEL ARCHIVO "TABLAS-Y-SENTENCIAS-SQL.md"(sin las comillas) en una query tool en PostreSQL y listo.

3. Conéctate al contenedor de la aplicación usando el siguiente comando:

Conexión a la aplicación:
    ```bash
    docker exec -it sistema-gestion-docker-app-1 bash
    ```

4. Agrega al usuario con su contraseña a la base de datos. Luego con esos datos inicia sesión en el login de la aplicación:

    ```bash
    node addUserEjemplo.js
    ```
> [!IMPORTANT]
> Puedes modificar el usuario y contraseña en el archivo que acabas de ejecutar, está incluida en el repo. Que sería este: addUserEjemplo.js:

```javascript
//addUser.js
const bcrypt = require('bcryptjs');
const pool = require('./config/database'); // Importar conexión a la base de datos

async function agregarUsuario(usuario, contraseña) {
    try {
        const hashedPassword = await bcrypt.hash(contraseña, 10); // Hashear la contraseña
        const query = 'INSERT INTO usuarios (usuario, contraseña) VALUES ($1, $2)';
        await pool.query(query, [usuario, hashedPassword]);
        console.log('Usuario agregado correctamente');
    } catch (error) {
        console.error('Error al agregar usuario:', error);
    }
}

// Llama a esta función para agregar usuarios
agregarUsuario('pruebaadmin', 'pruebaadmin'); // Reemplaza con el nombre de usuario y contraseña deseada
```
>

5. Accede a la aplicación en `http://localhost:puerto` (reemplaza `puerto` con el puerto configurado en tu `docker-compose.yml`) ó directamente si no cambiaste nada: `http://localhost:3000/login.html`(En este caso está en el puerto 3000).

6. Listo!!. Empieza a usar la aplicación agregando compras, ventas, reportes, etc. 🚀⭐

7. Para parar el contenedor. Ejemplo:
Reemplaza con los 3 primeros dígitos del ID de tu contenedor.

    ```bash
    docker stop "container id" "container id"
    ```

> [!NOTE]
>Puedes hacer:

    ```bash
    docker ps
    ```
Para ver los contenedores activos y ver sus ID`s.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
