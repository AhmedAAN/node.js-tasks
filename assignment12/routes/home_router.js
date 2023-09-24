const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    res.render('index', { title: 'home' })
})

router.get('/about', (req, res) => {
    res.render('about', { title: 'about' })
})

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'contact' })
})