const ChatMessage = require('../models/ChatMessage');

// Get all chat messages
exports.getAllChatMessages = async (req, res) => {
  try {
    const messages = await ChatMessage.find().populate('userId');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get chat message by ID
exports.getChatMessageById = async (req, res) => {
  try {
    const message = await ChatMessage.findById(req.params.id).populate('userId');
    if (!message) {
      return res.status(404).json({ message: 'Chat message not found' });
    }
    res.json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get chat messages by user ID
exports.getChatMessagesByUserId = async (req, res) => {
  try {
    const messages = await ChatMessage.find({ userId: req.params.userId }).populate('userId');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new chat message
exports.createChatMessage = async (req, res) => {
  const message = new ChatMessage({
    userId: req.body.userId
  });

  try {
    const newMessage = await message.save();
    const populatedMessage = await ChatMessage.findById(newMessage._id).populate('userId');
    res.status(201).json(populatedMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update chat message
exports.updateChatMessage = async (req, res) => {
  try {
    const message = await ChatMessage.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Chat message not found' });
    }

    if (req.body.userId) message.userId = req.body.userId;

    const updatedMessage = await message.save();
    const populatedMessage = await ChatMessage.findById(updatedMessage._id).populate('userId');
    res.json(populatedMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete chat message
exports.deleteChatMessage = async (req, res) => {
  try {
    const message = await ChatMessage.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Chat message not found' });
    }
    await message.deleteOne();
    res.json({ message: 'Chat message deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};