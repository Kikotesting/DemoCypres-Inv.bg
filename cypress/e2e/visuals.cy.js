/// <reference types="cypress" />

describe("visual validation", () => {

    before(() => {
        cy.visit("http://todomvc-app-for-testing.surge.sh");
    })
    beforeEach(() => {
        cy.eyesOpen({appName:'TAU TodoMVC',batchName:'TAU TodoMVC Hey!'})
    })
    afterEach(() => {
        cy.eyesClose()
    })

    it("should look good", () => {
        cy.eyesCheckWindow('empty todo list')

        cy.get('.new-todo').type('Kiko{enter}')
        cy.get('.new-todo').type('Kikonez{enter}')
        
        cy.eyesCheckWindow('two todos')

        cy.get(`.todo-list li:nth-child(1) .toggle`).click()

        cy.eyesCheckWindow('mark as completed')
         
    })
})