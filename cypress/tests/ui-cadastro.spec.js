/// <reference types="cypress" />
context('Cadastro', () => {
  it('Deve ser possível cadastrar um usuário', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 200,
      fixture: 'cadastro-com-sucesso'
    }).as('postUsers')
    cy.visit('register')
    cy.get('[placeholder="Username"]').type('user-noetzold')
    cy.get('[placeholder="Email"]').type('user-noetzold@mail.com')
    cy.get('[placeholder="Password"]').type('123456')
    cy.get('button.btn-primary').click()
    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Cadastro com usuário já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'cadastro-usuario-existente'
    }).as('postUsersExists')
    cy.visit('register')
    cy.get('[placeholder="Username"]').type('user-noetzold')
    cy.get('[placeholder="Email"]').type('user-noetzold@mail.com')
    cy.get('[placeholder="Password"]').type('123456')
    cy.get('button.btn-primary').click()
    cy.contains('username has already been taken').should('be.visible')
  })

  it('Cadastro com email já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'cadastro-email-existente'
    }).as('postUsersExists')
    cy.visit('register')
    cy.get('[placeholder="Username"]').type('user-noetzold')
    cy.get('[placeholder="Email"]').type('user-noetzold@mail.com')
    cy.get('[placeholder="Password"]').type('123456')
    cy.get('button.btn-primary').click()
    cy.contains('email has already been taken').should('be.visible')
  })

})