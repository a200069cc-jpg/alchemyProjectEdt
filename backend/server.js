const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const elementRoutes = require('./routes/elementRoutes');
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const levelRoutes = require('./routes/levelRoutes');
const chatMessageRoutes = require('./routes/chatMessageRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongodb:27017/alquimistadb';

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
});

// Routes
app.use('/api/elements', elementRoutes);
app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/levels', levelRoutes);
app.use('/api/chat-messages', chatMessageRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Backend is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));