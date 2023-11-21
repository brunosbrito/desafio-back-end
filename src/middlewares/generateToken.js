const jwt = require('jsonwebtoken');

const generateAuthToken = (userId, email) => {

    const token = jwt.sign({ userId, email }, 'tokendesafio', { expiresIn: '30m' });
    return token;
}

module.exports = { generateAuthToken };
