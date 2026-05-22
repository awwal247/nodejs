
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json()); // For JSON parsing

const port = process.env.PORT || 3000;

// Custom middleware to log requests
const loggingMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
};
app.use(loggingMiddleware);

// GET /
app.get('/', (req, res) => {
    res.send("My Week 2 API!");
});

// POST /user
app.post('/user', (req, res) => {
    if (!req.body.name || !req.body.email) {
        return res.status(400).send("Name and email are required.");
    }
    res.send(`Hello, ${req.body.name}!`);
});

// GET /user/:id
app.get('/user/:id', (req, res) => {
    res.send(`User ${req.params.id} profile`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});