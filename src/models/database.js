const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'qao3ibsa7hhgecbv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'flaa13oibyxwub0k',
  password: 'j5mq67pqtwfjqwr1',
  database: 'v7o8zmq9di0rbvzc',
  
});

module.exports = connection;
