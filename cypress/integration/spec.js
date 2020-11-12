// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('works', () => {
  expect(true).to.be.true
})

afterEach(function () {
  console.log(this.currentTest)
})

const emergency = () => {
  throw new Error('Should never happen')
}


it('fails with expected 5 to equal 42', () => {
  cy.on('fail', (e, test) => {
    if (test.title.startsWith('fails with') &&
      test.title.endsWith(e.message)) {
      console.log('test "%s" is allowed to fail with error "%s"',
        test.title, e.message)
    } else {
      throw e
    }
  })

  // expect(5).to.equal(42)
  emergency()
})
