const UserModel = require('../models/usuarioModel');
const { emailExists } = require('../middlewares/validations');

const createUser = async (userData) => {
  try {
    const isEmail = await emailExists(userData.email);

    if (isEmail) {
       return { mensagem: 'E-mail já existente' };
    } else {
      const result = await UserModel.createUser(userData);
      const user = await UserModel.getUserById(result.insertId);

      const { id, data_criacao, data_atualizacao, ultimo_login } = user;

      return {
        id,
        data_criacao,
        data_atualizacao,
        ultimo_login,
        token: result.token,
      };
    }

  } catch (error) {
    throw { mensagem: error };
  }
}

const login = async (userData)  => {
    try {
      const result = await UserModel.login(userData);

      if(result.mensagem) {
        return result;
      } 
      const { id, data_criacao, data_atualizacao, ultimo_login, token } = result;

      return {
        id,
        data_criacao,
        data_atualizacao,
        ultimo_login,
        token,
      };
        
    } catch (error) {
        throw error;
    }
}

const getUserById = async (id) => {
    try {
      const user = UserModel.getUserById(id);
      return user  
    } catch (error) {
        throw error;
    }
}

module.exports = { createUser, login, getUserById };
