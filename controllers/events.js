const { response } = require('express');
const Evento = require('../models/Evento');

const obtenerEventos = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'obtenerEventos'
    });
}

const crearEvento = async (req, res = response) => {

    const evento = new Evento(req.body);

    try {

        evento.user = req.uid;
        
        const eventoCreado = await evento.save();
        res.status(201).json({
            ok: true,
            msg: 'Evento creado.',
            evento: eventoCreado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor.'
        });
    }
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