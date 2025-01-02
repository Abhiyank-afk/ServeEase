const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname)));

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Your database password
    database: 'serveease_db', // Your database name
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'web.html'));
});

app.get('/HomeCleaning', (req, res) => {
    res.sendFile(path.join(__dirname, 'HomeCleaning', 'index.html'));
});

app.get('/CarpetCleaning', (req, res) => {
    res.sendFile(path.join(__dirname, 'CarpetCleaning', 'cleaning.html'));
});

// Hiring route
app.post('/hire-worker', (req, res) => {
    const { workerName, customerEmail, serviceType } = req.body;

    if (!workerName || !customerEmail || !serviceType) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const query = 'INSERT INTO hiring_requests (worker_name, customer_email, service_type) VALUES (?, ?, ?)';
    db.query(query, [workerName, customerEmail, serviceType], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Hiring request submitted successfully.' });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
