// addUser.js
const bcryptjs = require('bcryptjs');
const pool = require('./config/database'); // Importar conexión a la base de datos

async function agregarUsuario(usuario, contraseña) {
    try {
        const hashedPassword = await bcryptjs.hash(contraseña, 10); // Hashear la contraseña
        const query = 'INSERT INTO usuarios (usuario, contraseña) VALUES ($1, $2)';
        await pool.query(query, [usuario, hashedPassword]);
        console.log('Usuario agregado correctamente');
    } catch (error) {
        console.error('Error al agregar usuario:', error);
    }
}

// Llama a esta función para agregar usuarios
agregarUsuario('pruebaadmin', 'pruebaadmin'); // Reemplaza con el nombre de usuario y contraseña deseada
