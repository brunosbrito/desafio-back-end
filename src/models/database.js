const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.DB_HOST || 'qao3ibsa7hhgecbv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'flaa13oibyxwub0k',
  password: process.env.DB_PASSWORD || 'j5mq67pqtwfjqwr1',
  database: process.env.DB_DATABASE || 'v7o8zmq9di0rbvzc'
});

module.exports = connection;
