const express = require('express');
const router = express.Router();
const chatMessageController = require('../controllers/chatMessageController');

// GET all chat messages
router.get('/', chatMessageController.getAllChatMessages);

// GET chat message by ID
router.get('/:id', chatMessageController.getChatMessageById);

// GET chat messages by user ID
router.get('/user/:userId', chatMessageController.getChatMessagesByUserId);

// POST create new chat message
router.post('/', chatMessageController.createChatMessage);

// PUT update chat message
router.put('/:id', chatMessageController.updateChatMessage);

// DELETE chat message
router.delete('/:id', chatMessageController.deleteChatMessage);

module.exports = router;