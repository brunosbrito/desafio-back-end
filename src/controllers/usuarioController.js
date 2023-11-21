const express = require('express');
const UserService = require('../services/usuarioService');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/usuario', async (req, res) => {
  try {
    const userData = req.body;
    const user = await UserService.createUser(userData);

    if(user.mensagem) {
        res.status(400).json(user)
    }else {
        res.status(201).json({
            id: user.id,
            data_criacao: user.data_criacao,
            data_atualizacao: user.data_atualizacao,
            ultimo_login: user.ultimo_login,
            token: user.token,
          });
    }

    

  } catch (error) {
    res.status(500).json({ mensagem: 'Erro interno ao criar usuario' });
  }
});

router.post('/login',async (req, res) => {
    try {
        
        const userData = req.body;
        const user = await UserService.login(userData);
        
        if(user.mensagem) {
            res.status(401).json(user)
        }else {
            res.status(201).json({
                id: user.id,
                data_criacao: user.data_criacao,
                data_atualizacao: user.data_atualizacao,
                ultimo_login: user.ultimo_login,
                token: user.token,
              });
        }

      } catch (error) {
        console.log(error)     
            res.status(500).json({ mensagem: 'Erro interno do servidor' });
      }
});

router.get('/usuario/:id',verifyToken, async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
  
      return res.status(200).json({...user});
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
  });

module.exports = router;
