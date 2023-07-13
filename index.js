// CONFIGURACIÓN BÁSICA DE EXPRESS
const express = require('express');


// Crear el servidor de express
const app = express();

// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});

// Escuchar peticiones
app.listen(4000, () => {
    console.log('Servidor corriendo en puerto: 4000');
});