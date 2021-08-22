const express = require('express');
const router = express.Router();


// @route   GET api/auth
// @desc    Get logged user
// @access  Privite
router.get('/', (req, res) => {
    res.send('Get logged user');
});

// @route   Post api/auth
// @desc    Auth user & get token
// @access  Public
router.post('/', (req, res) => {
    res.send('loggin user');
});

module.exports= router;