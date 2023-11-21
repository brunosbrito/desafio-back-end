const jwt = require('jsonwebtoken');

const generateAuthToken = (userId, email) => {

    const token = jwt.sign({ userId, email }, 'tokendesafio', { expiresIn: '30min' });
    return token;
}

module.exports = { generateAuthToken };