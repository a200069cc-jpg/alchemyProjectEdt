const express = require('express');
const router = express.Router();
const elementController = require('../controllers/elementController');

router.get('/', elementController.getAllElements);
router.get('/:id', elementController.getElementById);
router.post('/', elementController.createElement);
router.put('/:id', elementController.updateElement);
router.delete('/:id', elementController.deleteElement);

module.exports = router;
