const express = require('express');
const router = express.Router();
const elementController = require('../controllers/elementController');

// GET all elements
router.get('/', elementController.getAllElements);

// GET element by ID
router.get('/:id', elementController.getElementById);

// POST create new element
router.post('/', elementController.createElement);

// PUT update element
router.put('/:id', elementController.updateElement);

// DELETE element
router.delete('/:id', elementController.deleteElement);

module.exports = router;