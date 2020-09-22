const { Router } = require('express');
const router = Router();
const authControllers = require('../controllers/authControllers')

router.post('/login', authControllers.login_post);
router.post('/signup', authControllers.signup_post);


module.exports = router;