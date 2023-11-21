const express = require('express');
const usuarioController = require('./controllers/usuarioController');

const app = express();

app.use(express.json());

app.use('/', usuarioController);


module.exports = app;
