const { response } = require('express');

const obtenerEventos = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'obtenerEventos'
    });
}

const crearEvento = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'crearEvento'
    });
}

const editarEvento = (req, res = response) => {
    const { id } = req.body;
    res.status(200).json({
        ok: true,
        msg: 'editarEvento',
        id
    });
}

const eliminarEvento = (req, res = response) => {
    const { id } = req.body;
    res.status(200).json({
        ok: true,
        msg: 'eliminarEvento',
        id
    });
}

module.exports = {
    obtenerEventos, 
    crearEvento,
    editarEvento,
    eliminarEvento
}