describe('Clients tests', () => {

    it("1. Add new client -> dashboard", () => {
        require('cypress-xpath');

        // Default login
        cy.visit('https://inv.bg')
        cy.xpath('//*[@id="inheader"]/a[2]').click()
        cy.get('#login-subdomain').type('Kikotest');
        cy.xpath('//*[@id="gologin"]').click();
        cy.get("#loginusername").type('kikotestsecure@gmail.com');
        cy.get('#loginpassword').type('Kiko123@');
        cy.get('[data-callback="submitLoginForm"]').click()
        cy.get('.newFeatureOKbutton').click();
        cy.xpath('//*[@id="logo"]/a/h1').should('have.text',"kikotest");
        cy.xpath("//*[@id='userpanel']/div").should("have.text",'kikotestsecure@gmail.com');

        // Click add new client from the dashboard
        cy.get('[href="https://kikotest.inv.bg/clients/add"]').click();
        //Select individual
        cy.get('#type_person').click();
        //Populate the client information form
        cy.get('[name="person_name"]').type('OneClient4');
        cy.get('[name="person_address"]').type('ul. Lozenets 23');
        cy.get('[name="person_city"]').type('Sofia');
        //Click submit button
        cy.get('[name="do_submit"]').click();
        //Assertion for added message
        cy.get('#okmsg').should($el => expect($el.text().trim()).to.equal('Клиентът е добавен успешно.'));
        cy.get(':nth-child(1) > td > .client-section-title').should('have.text','Информация за клиента');
        cy.get(':nth-child(2) > .vertical-align-top > b').should('have.text','Име:')
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text','OneClient4');

    })


})