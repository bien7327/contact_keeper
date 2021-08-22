const express = require('express');
const router = express.Router();


// @route   GET api/contacts
// @desc    Get all user contacts
// @access  Privite
router.get('/', (req, res) => {
    res.send('Get all contact');
});

// @route   Post api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
    res.send('Add contact');
});


// @route   Put api/contacts/:id
// @desc    update contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

// @route   DELEAT api/contacts/:id
// @desc    DELEAT contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Deleat contact');
});


module.exports= router;