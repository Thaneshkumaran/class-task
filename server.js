const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',   // Change this to your MySQL server host
  user: 'thanesh',        // Your MySQL username
  password: '123456',        // Your MySQL password
  database: 'job_search_db' // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Middleware to parse incoming request data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve HTML form (frontend)
app.use(express.static(path.join(__dirname, 'public'))); // Serving static files from 'public' folder

// Serve the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Update 'index.html' as necessary
});

// Handle form submission (post data to database)
app.post('/submit', (req, res) => {
  const { email, password, first_name, last_name, phone, address, city, province, country, school, program, education_level, graduation_date } = req.body;

  // Insert data into MySQL database
  const query = `INSERT INTO users (email, password, first_name, last_name, phone, address, city, province, country, school, program, education_level, graduation_date) 
                 VALUES ('${email}', '${password}', '${first_name}', '${last_name}', '${phone}', '${address}', '${city}', '${province}', '${country}', '${school}', '${program}', '${education_level}', '${graduation_date}')`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.send('Account created successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
