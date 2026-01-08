const express = require('express');
const router = express.Router();
const levelController = require('../controllers/levelController');

// GET all levels
router.get('/', levelController.getAllLevels);

// GET level by ID
router.get('/:id', levelController.getLevelById);

// GET level by level number
router.get('/number/:levelNumber', levelController.getLevelByNumber);

// POST create new level
router.post('/', levelController.createLevel);

// PUT update level
router.put('/:id', levelController.updateLevel);

// DELETE level
router.delete('/:id', levelController.deleteLevel);

module.exports = router;