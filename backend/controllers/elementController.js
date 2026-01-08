const Element = require('../models/Element');

// Get all elements
exports.getAllElements = async (req, res) => {
  try {
    const elements = await Element.find();
    res.json(elements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get element by ID
exports.getElementById = async (req, res) => {
  try {
    const element = await Element.findById(req.params.id);
    if (!element) {
      return res.status(404).json({ message: 'Element not found' });
    }
    res.json(element);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new element
exports.createElement = async (req, res) => {
  const element = new Element({
    name: req.body.name,
    state: req.body.state,
    temperature: req.body.temperature  // Add this line
  });

  try {
    const newElement = await element.save();
    res.status(201).json(newElement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update element
exports.updateElement = async (req, res) => {
  try {
    const element = await Element.findById(req.params.id);
    if (!element) {
      return res.status(404).json({ message: 'Element not found' });
    }

    if (req.body.name) element.name = req.body.name;
    if (req.body.state) element.state = req.body.state;
    if (req.body.temperature) element.temperature = req.body.temperature;  // Add this line

    const updatedElement = await element.save();
    res.json(updatedElement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete element
exports.deleteElement = async (req, res) => {
  try {
    const element = await Element.findById(req.params.id);
    if (!element) {
      return res.status(404).json({ message: 'Element not found' });
    }
    await element.deleteOne();
    res.json({ message: 'Element deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};