/* RUTAS DE EVENTOS
 * Ruta: host + /api/events
 */
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { obtenerEventos, crearEvento, editarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

// Todas las peticiones por debajo de esta instrucción deben pasar por la validación del JWT
router.use(validarJWT);

// Obtener eventos
router.get('/', obtenerEventos);

// Crear un nuevo evento
router.post('/', crearEvento);

// Editar evento
router.put('/:id', editarEvento);

// Eliminar evento
router.delete('/:id', eliminarEvento);

module.exports = router;