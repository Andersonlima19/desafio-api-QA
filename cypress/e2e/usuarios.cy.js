import api from '../support/api';

describe('API - Usuários', () => {

  it('Deve criar um usuário com sucesso', () => {
    cy.fixture('usuarios').then((usuarios) => {
      const timestamp = Date.now();

      const usuario = {
        ...usuarios.usuarioValido,
        email: usuarios.usuarioValido.email.replace('{{timestamp}}', timestamp)
      };

      api.criarUsuario(usuario).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      });
    });
  });

  it('Não deve permitir criar usuário com e-mail já existente', () => {
    cy.fixture('usuarios').then((usuarios) => {
      const timestamp = Date.now();

      const usuario = {
        ...usuarios.usuarioValido,
        email: usuarios.usuarioValido.email.replace('{{timestamp}}', timestamp)
      };

      api.criarUsuario(usuario).then((response) => {
        expect(response.status).to.eq(201);

        api.criarUsuario(usuario).then((responseDuplicado) => {
          expect(responseDuplicado.status).to.eq(400);
          expect(responseDuplicado.body.message).to.contain('Este email já está sendo usado');
        });
      });
    });
  });

});
