/// <reference types="cypress" />

describe('Items tests', () => {
    beforeEach(() => {
        // Default login
        cy.visit('https://inv.bg')
        cy.xpath('//*[@id="inheader"]/a[2]').click()
        cy.get('#login-subdomain').type('Kikotest')
        cy.xpath('//*[@id="gologin"]').click()
        cy.get("#loginusername").type('kikotestsecure@gmail.com')
        cy.get('#loginpassword').type('Kiko123@')
        cy.get('[data-callback="submitLoginForm"]').click()
        cy.get('.newFeatureOKbutton').click()
        cy.xpath('//*[@id="logo"]/a/h1').should('have.text', "kikotest")
        cy.xpath("//*[@id='userpanel']/div").should("have.text", 'kikotestsecure@gmail.com')
    })
    it("1.[P] Add new ITEM -> dashboard", () => {
        // Click add new item menu
        cy.get('[href="https://kikotest.inv.bg/objects/add"]').click()
        // Populate the article information
        cy.get(':nth-child(1) > [width="170"] > .input--height24px').type('Art3')
        cy.get(':nth-child(3) > [width="170"] > .input--height24px').type('10')
        cy.get('div > .input--height24px').clear().type('2')
        cy.get('.selenium-items-add-form-btn').click()
        //Assertion
        cy.get('#okmsg').should($el => expect($el.text().trim()).to.equal('Артикулът е добавен успешно.'))
        cy.get(':nth-child(1) > .objects-view-left-col > b').should($el => expect($el.text().trim()).to.equal('Име на артикул:'))
        cy.get(':nth-child(1) > .objects-view-right-col').should($el => expect($el.text().trim()).to.equal('Art3'))

    });

})