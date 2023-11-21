const supertest = require('supertest');
const app = require('../src/app');
const chai = require('chai');
const expect = chai.expect;

describe('POST /login', () => {
  it('Deve fazer login com sucesso', async () => {
    const response = await supertest(app)
      .post('/login')
      .send({
        email: 'bruno@teste.com',
        senha: '123456'
      });

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('id');
    expect(response.body).to.have.property('data_criacao');
    expect(response.body).to.have.property('data_atualizacao');
    expect(response.body).to.have.property('ultimo_login');
    expect(response.body).to.have.property('token');
  });

  it('Deve falhar ao fazer login com Usuário e/ou senha inválidos', async () => {
    const response = await supertest(app)
      .post('/login')
      .send({
        email: 'novo_usuario@example.com',
        senha: 'senha_incorreta'
      });

      expect(response.status).to.equal(401);
    expect(response.body).to.have.property('mensagem', 'Usuário e/ou senha inválidos');
  });
});