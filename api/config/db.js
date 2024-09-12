const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // your MySQL username
  password: '',        // your MySQL password
  database: 'myDatabase'  // your database name
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL connected successfully');
});

module.exports = db;
