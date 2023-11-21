const supertest = require('supertest');
const app = require('../src/app'); 
const chai = require('chai');
const expect = chai.expect;
const { v4: uuidv4 } = require('uuid');

  describe('POST /usuarios', () => {
    it('Deve criar um novo usuário', async () => {
      const email = `novo_usuario_${uuidv4()}@example.com`;
      const response = await supertest(app)
        .post('/usuario')
        .send({
          nome: 'Novo Usuário',
          email: email,
          senha: 'senha123',
          telefones: [{ numero: '123456789', ddd: '11' }]
        });

      expect(response.status).to.equal(201);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('data_criacao');
      expect(response.body).to.have.property('data_atualizacao');
      expect(response.body).to.have.property('ultimo_login');
      expect(response.body).to.have.property('token');
    });
  });

  describe('POST /usuarios', () => {
    it('Não deve ser possível criar uma conta com o mesmo email', async () => {
        // const response1 = await supertest(app)
        //   .post('/usuario')
        //   .send({
        //     nome: 'Usuário 1',
        //     email: 'usuario1@example.com',
        //     senha: 'senha123',
        //     telefones: [{ numero: '123456789', ddd: '11' }]
        //   });
    
        // expect(response1.status).to.equal(201);
    
        const response2 = await supertest(app)
          .post('/usuario')
          .send({
            nome: 'Usuário 2',
            email: 'usuario1@example.com',  // Mesmo email
            senha: 'outrasenha456',
            telefones: [{ numero: '987654321', ddd: '22' }]
          });
    
        expect(response2.status).to.equal(400);
        expect(response2.body).to.have.property('mensagem', 'E-mail já existente');
      });
  });

