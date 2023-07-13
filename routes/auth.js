/* RUTAS DE USUARIOS / AUTH
 * Ruta: host + /api/auth
 */

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

router.post(
    '/register',
    [   
        // Middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
    ],
    crearUsuario
);

router.post(
    '/login', 
    [
        // Middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
    ],
    loginUsuario
);

router.get('/renew', revalidarToken);

module.exports = router;