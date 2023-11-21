const connection = require('../models/database');
const bcrypt = require('bcrypt');
const {generateAuthToken} = require('../middlewares/generateToken')

const createUser = async (userData) => {
  try {
    const telefone = userData.telefones[0];
    const hashedPassword = await bcrypt.hash(userData.senha, 10);

    const query = 'INSERT INTO user (nome, email, senha, telefone, ddd, data_criacao, data_atualizacao, ultimo_login) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)';
    const values = [userData.nome, userData.email, hashedPassword, telefone.numero, telefone.ddd];
    const [{insertId}] = await connection.execute(query, values);
    const token = generateAuthToken(insertId, userData.email);

    return { insertId, token };
  } catch (error) {
    throw error;
  }
}

const login = async (userData) => {
  const query = 'SELECT * FROM user WHERE email = ?';
  const updateQuery = 'UPDATE user SET ultimo_login = CURRENT_TIMESTAMP WHERE id = ?';

  try {
    const [results] = await connection.execute(query, [userData.email]);
    if (results.length === 0) {
      return {mensagem: 'Usuário e/ou senha inválidos'};
    }

    const user = results[0];
    const senhaCorreta = await bcrypt.compare(userData.senha, user.senha);

    if (!senhaCorreta) {
      return {mensagem: 'Usuário e/ou senha inválidos'};
    }
    const token = generateAuthToken(user.id, user.email);
    await connection.execute(updateQuery, [user.id]);

    return { ...user, token,  };
  } catch (error) {
    throw error;
  }
}

const getUserById = async (userId) => {
  const query = 'SELECT id, nome, email, telefone, ddd, data_criacao, data_atualizacao, ultimo_login FROM user WHERE id = ?';

  try {
    const [results] = await connection.execute(query, [userId]);

    if (results.length === 0) {
      throw new Error('Usuário não encontrado');
    }

    return results[0];
  } catch (error) {
    throw error;
  }
}


module.exports = { createUser, login, getUserById };
