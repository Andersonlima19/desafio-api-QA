class ApiService {

  login(email, password) {
    return cy.request({
      method: 'POST',
      url: '/login',
      body: {
        email,
        password
      },
      failOnStatusCode: false
    });
  }

  criarUsuario(usuario) {
    return cy.request({
      method: 'POST',
      url: '/usuarios',
      body: usuario,
      failOnStatusCode: false
    });
  }

  listarUsuarios() {
    return cy.request({
      method: 'GET',
      url: '/usuarios',
      failOnStatusCode: false
    });
  }

  criarProduto(produto, token) {
    return cy.request({
      method: 'POST',
      url: '/produtos',
      headers: {
        Authorization: token
      },
      body: produto,
      failOnStatusCode: false
    });
  }

  criarCarrinho(produtos, token) {
    return cy.request({
      method: 'POST',
      url: '/carrinhos',
      headers: {
        Authorization: token
      },
      body: {
        produtos
      },
      failOnStatusCode: false
    });
  }

  finalizarCompra(token) {
    return cy.request({
      method: 'DELETE',
      url: '/carrinhos/concluir-compra',
      headers: {
        Authorization: token
      },
      failOnStatusCode: false
    });
  }
}

export default new ApiService();
