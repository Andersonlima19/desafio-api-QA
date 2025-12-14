import api from './api';

Cypress.Commands.add('criarUsuarioAdmin', () => {
  cy.fixture('usuarios').then((usuarios) => {
    const timestamp = Date.now();

    const usuario = {
      ...usuarios.usuarioValido,
      email: usuarios.usuarioValido.email.replace('{{timestamp}}', timestamp)
    };

    cy.wrap(usuario).as('usuarioCriado');

    api.criarUsuario(usuario).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});

Cypress.Commands.add('loginAdmin', () => {
  cy.get('@usuarioCriado').then((usuario) => {
    api.login(usuario.email, usuario.password).then((response) => {
      expect(response.status).to.eq(200);
      cy.wrap(response.body.authorization).as('token');
    });
  });
});

Cypress.Commands.add('criarProduto', () => {
  cy.fixture('produtos').then((produtos) => {
    cy.get('@token').then((token) => {
      const timestamp = Date.now();

      const produto = {
        ...produtos.produtoValido,
        nome: `${produtos.produtoValido.nome} ${timestamp}`
      };

      api.criarProduto(produto, token).then((response) => {
        expect(response.status).to.eq(201);
        cy.wrap(response.body._id).as('produtoId');
      });
    });
  });
});
