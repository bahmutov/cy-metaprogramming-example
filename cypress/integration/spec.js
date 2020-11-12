// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

//
// enable if you want to pass tests that fail with expected error
//
// const failedTests = {}
// const isFailingTest = (test) =>
//   test.title.startsWith('fails with')

// afterEach(function () {
//   console.log(this.currentTest)
//   console.log(failedTests)
//   if (!isFailingTest(this.currentTest)) {
//     return // all good
//   }
//   if (!failedTests[this.currentTest.title]) {
//     throw new Error(`Test "${this.currentTest.title}" somehow passed`)
//   }
// })

// Cypress.on('fail', (e, test) => {
//   if (isFailingTest(test) &&
//     test.title.endsWith(e.message)) {
//     console.log('test "%s" is allowed to fail with error "%s"',
//       test.title, e.message)
//     failedTests[test.title] = test
//   } else {
//     throw e
//   }
// })

it('works', () => {
  expect(true).to.be.true
})

it('fails with expected 5 to equal 42', () => {
  expect(5).to.equal(42)
})

it.skip('fails with some error', () => {
  // notice that this test should have failed,
  // judging by the title, but does not
  expect(5).to.equal(5)
})
