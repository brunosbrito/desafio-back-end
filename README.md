# Desafio Back end (API)

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
