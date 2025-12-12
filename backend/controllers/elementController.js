const Element = require('../models/Element');

// GET all elements
exports.getAllElements = async (req, res) => {
    try {
        const elements = await Element.find();
        res.json(elements);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET element by ID
exports.getElementById = async (req, res) => {
    try {
        const element = await Element.findById(req.params.id);
        if (!element) return res.status(404).json({ message: 'Element not found' });
        res.json(element);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// CREATE new element
exports.createElement = async (req, res) => {
    try {
        const element = new Element(req.body);
        await element.save();
        res.status(201).json(element);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE element
exports.updateElement = async (req, res) => {
    try {
        const updated = await Element.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'Element not found' });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE element
exports.deleteElement = async (req, res) => {
    try {
        const deleted = await Element.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Element not found' });
        res.json({ message: 'Element deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
