const mysql = require('mysql2/promise');

// USING MYSQL

const connection = mysql.createPool({
  user: 'root',
  password: 'root',
  host: '172.17.0.2',
  database: 'model_example',
});

module.exports = connection;
