import api from '../support/api';

describe('API - Produtos', () => {

  beforeEach(() => {
    cy.criarUsuarioAdmin();
    cy.loginAdmin();
  });

  it('Deve criar um produto com sucesso quando autenticado', () => {
    cy.fixture('produtos').then((produtos) => {
      cy.get('@token').then((token) => {
        api.criarProduto(produtos.produtoValido, token).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body.message).to.eq('Cadastro realizado com sucesso');
        });
      });
    });
  });

  it('Não deve permitir criar produto sem token', () => {
    cy.fixture('produtos').then((produtos) => {
      api.criarProduto(produtos.produtoValido, '').then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.message).to.contain('Token de acesso ausente');
      });
    });
  });

});
