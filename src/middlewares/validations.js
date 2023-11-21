const emailExists = async (email) => {
  const connection = require('../models/database');

  const query = 'SELECT id FROM user WHERE email = ?';
  const [results] = await connection.execute(query, [email]);

  return results.length > 0;
};

const requiredFields = async (userData) => {
  if (!userData.nome || !userData.senha || !userData.email || !userData.telefones) {
    const errors = {};

    if (!userData.nome) {
      errors.nome = 'Nome de usuário é obrigatório';
    }

    if (!userData.senha) {
      errors.senha = 'Senha é obrigatória';
    }

    if (!userData.email) {
      errors.email = 'Email é obrigatório';
    }

    if (!userData.telefones) {
      errors.telefones = 'Telefones é obrigatório';
    }

    return { errors };
  }
};

module.exports = { emailExists, requiredFields };
