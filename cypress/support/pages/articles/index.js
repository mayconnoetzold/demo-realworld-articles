const el = require('./elements').ELEMENTS
var chance = require('chance').Chance()
const title = chance.sentence({ words: 5 })

class articles {
  acessarFormulario() {
    cy.get(el.btnNovoArtigo).click();
  }

  preencherFormulario() {
    cy.get(el.inputTitle).type(title)
    cy.get(el.inputDescription).type('Lets talk about real music')
    for (let i = 0; i < 10; i++) {
      cy.get(el.inputBody).type(chance.sentence())
    }
    cy.get(el.inputTags).type('#goodMusic')
  }

  submeterFormulario() {
    cy.get(el.btnSubmit).click()
  }

  verificarArtigoCriado() {
    cy.get('h1').should('have.text', title)
  }
}
export default new articles()