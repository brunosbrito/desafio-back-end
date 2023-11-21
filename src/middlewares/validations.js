const emailExists = async (email) => {
  const connection = require('../models/database');

  const query = 'SELECT id FROM user WHERE email = ?';
  const [results] = await connection.execute(query, [email]);

  return results.length > 0;
};

module.exports = { emailExists };
