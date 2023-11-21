# Desafio Técnico - Scribo

Este é um projeto que realiza o desafio proposto pela Scribo. O desafio consiste em criar uma api para cadastrar usuaio, fazer login e buscar o usuario.

## Como Rodar o Desafio

Siga as instruções abaixo para rodar o desafio em seu ambiente local:

1. **Instale o Node.js:**
   Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).

2. **Clone o Repositório:**
   ```bash
   git clone https://github.com/brunosbrito/desafio-back-end.git
   cd desafio-back-end

3. **Instale as dependências:**
   ```bash
    npm install
    
4. **Rode o desafio:**
   ```bash
    npm start
    
4. **para rodar os teste:**
   ```bash
    npm test

 *URL BASE: https://desafio-back-end-80f68e3e50f3.herokuapp.com/*

## 1 - Criar Usuario - endpoint POST `/usuario`

- Endpoint `/usuario`;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
    {
      "nome": "exemplo",
      "senha": "senha123",
      "email": "email@teste.com",
      "telefones": [{"numero": "123456789", "ddd": "31"}]
    }
  ```

  - Resposta da requisição:
  ```json
   {
      "id": 6,
      "data_criacao": "2023-11-22T01:28:50.000Z",
      "data_atualizacao": "2023-11-22T01:28:50.000Z",
      "ultimo_login": "2023-11-22T01:28:50.000Z",
      "token": "TOKEN"
    }
  ```
  
  ## 2 - Fazer login - endpoint POST `/login`

- Endpoint `/login`;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
    {
      "senha": "senha123",
      "email": "email@teste.com",
    }
  ```

  - Resposta da requisição:
  ```json
     {
      "id": 6,
      "data_criacao": "2023-11-22T01:28:50.000Z",
      "data_atualizacao": "2023-11-22T01:28:50.000Z",
      "ultimo_login": "2023-11-22T01:28:50.000Z",
      "token": "TOKEN"
    }
  ```
  
   ## 3 - Buscar usuario por id - endpoint POST `/usuari/id`

- Endpoint `/login`;
- O endpoint para buscar o usuario deve ser no formato:
  ```json
    https://desafio-back-end-80f68e3e50f3.herokuapp.com/usuario/1
  ```

  - Resposta da requisição:
  ```json
    {
      "id": 1,
      "nome": "Nome1",
      "email": "email1@example.com",
      "telefone": "123456",
      "ddd": "21",
      "data_criacao": "2023-11-21T21:02:36.000Z",
      "data_atualizacao": "2023-11-21T21:02:36.000Z",
      "ultimo_login": "2023-11-21T21:02:36.000Z"
    }
  ```
