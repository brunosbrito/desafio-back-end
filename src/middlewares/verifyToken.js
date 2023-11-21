const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

  const secretKey = 'tokendesafio';

  try {
    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.userId;

    const expirationTime = decoded.exp * 1000;
    const currentTime = Date.now();
    const timeUntilExpiration = expirationTime - currentTime;

    const expirationThreshold = 1 * 60 * 1000;

    if (timeUntilExpiration < expirationThreshold) {
      return res.status(401).json({ mensagem: 'Sessão inválida' });
    }

    next();
  } catch (error) {
    return res.status(401).json({ mensagem: 'Não autorizado' });
  }
};

module.exports = { verifyToken };
