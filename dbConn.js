const mongoose = require('mongoose');
const mysql = require('mysql');

const connection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/testDb");
        console.log("Connected to MongoDb sucessfully")
    } catch (error) {
        console.log(error)
    }
}
 
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'affiliateDb',
  connectionLimit: 10, 
  queueLimit: 0 
});

pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to database:', err);
    } else {
      console.log('Connected to MySQL database!');
      // Release the connection back to the pool when done
      connection.release();
    }
  });
connection();
module.exports = mongoose;