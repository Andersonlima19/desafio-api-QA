import api from '../support/api';

describe('API - Carrinhos', () => {

  beforeEach(() => {
    cy.criarUsuarioAdmin();
    cy.loginAdmin();
    cy.criarProduto();
  });

  it('Deve criar um carrinho com sucesso', () => {
    cy.get('@produtoId').then((produtoId) => {
      cy.get('@token').then((token) => {
        const produtosCarrinho = [
          {
            idProduto: produtoId,
            quantidade: 1
          }
        ];

        api.criarCarrinho(produtosCarrinho, token).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body.message).to.eq('Cadastro realizado com sucesso');
        });
      });
    });
  });

  it('Deve finalizar a compra com sucesso', () => {
    cy.get('@produtoId').then((produtoId) => {
      cy.get('@token').then((token) => {
        const produtosCarrinho = [
          {
            idProduto: produtoId,
            quantidade: 1
          }
        ];

        api.criarCarrinho(produtosCarrinho, token).then((response) => {
          expect(response.status).to.eq(201);

          api.finalizarCompra(token).then((finalizarResponse) => {
            expect(finalizarResponse.status).to.eq(200);
            expect(finalizarResponse.body.message).to.contain('Registro excluído com sucesso');
          });
        });
      });
    });
  });

});
