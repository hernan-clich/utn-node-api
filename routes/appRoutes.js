const { Router } = require('express');
const router = Router();
const appControllers = require('../controllers/appControllers')

router.get('/', appControllers.index_get);
router.get('/productos', appControllers.productos_get);
router.post('/productos', appControllers.productos_post);
router.get('/productos/:id', appControllers.productos_id_get);

module.exports = router;