import api from '../support/api';

describe('API - Produtos', () => {

  beforeEach(() => {
    cy.criarUsuarioAdmin();
    cy.loginAdmin();
  });

  it('Deve criar um produto com sucesso quando autenticado', () => {
    cy.fixture('produtos').then((produtos) => {

      const produtoDinamico = {
        ...produtos.produtoValido,
        nome: `Produto QA ${Date.now()}`
      };

      cy.get('@token').then((token) => {
        api.criarProduto(produtoDinamico, token).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body.message).to.eq('Cadastro realizado com sucesso');
          expect(response.body).to.have.property('_id');
        });
      });
    });
  });

  it('Não deve permitir criar produto sem token', () => {
    cy.fixture('produtos').then((produtos) => {

      const produtoDinamico = {
        ...produtos.produtoValido,
        nome: `Produto QA ${Date.now()}`
      };

      api.criarProduto(produtoDinamico, '').then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.message).to.contain('Token de acesso ausente');
      });
    });
  });

});