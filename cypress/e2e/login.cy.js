import api from '../support/api';

describe('API - Login', () => {

beforeEach(() => {
  cy.criarUsuarioAdmin();
});


  it('Deve realizar login com credenciais válidas', () => {
    cy.get('@usuarioCriado').then((usuario) => {
      api.login(usuario.email, usuario.password).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('authorization');
      });
    });
  });

  it('Não deve realizar login com senha inválida', () => {
    cy.get('@usuarioCriado').then((usuario) => {
      api.login(usuario.email, 'senha_incorreta').then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.message).to.contain('Email e/ou senha inválidos');
      });
    });
  });

});
