const mysql = require('mysql2/promise');
require('dotenv').config();

<<<<<<< HEAD
// Acepta tanto la convención propia del proyecto (DB_HOST, DB_USER...) usada
// en desarrollo local, como la convención nativa que Railway inyecta para su
// plugin de MySQL (MYSQLHOST, MYSQLUSER...) — así no hace falta duplicar
// variables al desplegar.
const host     = process.env.DB_HOST     || process.env.MYSQLHOST;
const port     = process.env.DB_PORT     || process.env.MYSQLPORT     || 3306;
const user     = process.env.DB_USER     || process.env.MYSQLUSER;
const password = process.env.DB_PASSWORD || process.env.MYSQLPASSWORD;
const database = process.env.DB_NAME     || process.env.MYSQLDATABASE;

const pool = mysql.createPool({
  host,
  port,
  user,
  password,
  database,
=======
const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT || 3306,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
>>>>>>> 95bd126b1a9168cb1882c823374b03133151202d
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true
});

module.exports = pool;
