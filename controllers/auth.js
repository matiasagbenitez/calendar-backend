const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

const crearUsuario = async (req, res = response) => {
    
    const { email, password } = req.body;

    try {

        // Verificar que el email no exista
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email.'
            });
        }

        // Crear usuario con el modelo
        usuario = new Usuario(req.body);

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        // Guardar usuario en la base de datos
        await usuario.save();

        // Devolver respuesta exitosa
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor.'
        });
    }
}

const loginUsuario = (req, res = response) => {
    const { email, password } = req.body;
    res.json({
        ok: true,
        msg: 'login',
        email,
        password,
    });
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew',
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
}