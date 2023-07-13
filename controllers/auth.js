// AYUDA PARA EL AUTOCOMPLETADO (NO ES OBLIGATORIO)

// const { response } = require('express');
// const crearUsuario = (req, res = response) => {
//     res.json({
//         ok: true,
//         msg: 'register',
//     });
// }

const crearUsuario = (req, res) => {
    res.json({
        ok: true,
        msg: 'register',
    });
}

const loginUsuario = (req, res) => {
    res.json({
        ok: true,
        msg: 'login',
    });
}

const revalidarToken = (req, res) => {
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