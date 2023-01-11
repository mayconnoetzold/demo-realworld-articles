Cypress.Commands.add('login', () => {
  cy.token().then(response => {
    window.localStorage.setItem('jwtToken', response.body.user.token)
  })
})

Cypress.Commands.add('token', () => {
  cy.request({
    url: 'https://api.realworld.io/api/users/login',
    method: 'POST',
    body: {
      "user": {
        "email": "user-noetzold@mail.com",
        "password": "123456"
      }
    }
  })
})