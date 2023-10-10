const { Router } = require('express');
const router = Router();

const authController = require('../controllers/authController');

router.post('/login', authController.login_post);

router.post('/signup', authController.signup_post);

router.get('/', (req, res) => {
    res.send('main');
})

module.exports = router;