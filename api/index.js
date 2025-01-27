const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For password hashing and comparison
const User = require('./models/User');
const cors = require('cors');
const PORT = 4000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection with Debugging
mongoose
    .connect('mongodb+srv://blog:68LwtQATuoX6CVqV@cluster0.agiws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});




// Registration Route with Email and Password Hashing
app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validation
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Username, email, and password are required' });
        }

        // Basic email format validation
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        // Hash the password before saving to the database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create User
        const UserDoc = await User.create({ username, email, password: hashedPassword });
        res.status(201).json(UserDoc);
    } catch (err) {
        console.error('Error during user registration:', err.message);

        // Handle Duplicate Key Error (e.g., Unique Username or Email)
        if (err.code === 11000) {
            const duplicateField = err.keyPattern.username ? 'Username' : 'Email';
            return res.status(409).json({ error: `${duplicateField} already exists` });
        }

        res.status(500).json({ error: 'Internal server error' });
    }
});




// Login Route
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Authentication successful
        res.status(200).json({ message: 'Login successful', user: { id: user._id, username: user.username, email: user.email } });
    } catch (err) {
        console.error('Error during login:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});




// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
