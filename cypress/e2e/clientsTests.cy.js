/// <reference types="cypress" />
import {DefaultPage} from '../pages/defaultPage.js'

describe('Clients tests', () => {

    beforeEach(() => {

        
    })

    it("1.[P] Add new CLIENT -> dashboard", () => {

        // Click add new client from the dashboard
        cy.get('[href="https://kikotest.inv.bg/clients/add"]').click();
        //Select individual
        cy.get('#type_person').click();
        //Populate the client information form
        cy.get('[name="person_name"]').type('OneClient450');
        cy.get('[name="person_address"]').type('ul. Lozenets 23');
        cy.get('[name="person_city"]').type('Sofia');
        //Click submit button
        cy.get('[name="do_submit"]').click();
        //Assertion for added message
        cy.get('#okmsg').should($el => expect($el.text().trim()).to.equal('Клиентът е добавен успешно.'));
        cy.get(':nth-child(1) > td > .client-section-title').should('have.text', 'Информация за клиента');
        cy.get(':nth-child(2) > .vertical-align-top > b').should('have.text', 'Име:');
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'OneClient450');

    });
    // it("1.[P] Try to add existing CLIENT -> dashboard", () => {

    //     // Click add new client from the dashboard
    //     cy.get('[href="https://kikotest.inv.bg/clients/add"]').click();
    //     //Select individual
    //     cy.get('#type_person').click();
    //     //Populate the client information form
    //     cy.get('[name="person_name"]').type('OneClient40');
    //     cy.get('[name="person_address"]').type('ul. Lozenets 23');
    //     cy.get('[name="person_city"]').type('Sofia');
    //     //Click submit button
    //     cy.get('[name="do_submit"]').click();
    //     //Assertion for added message
    //     cy.get('#error').should($el => expect($el.text().trim()).to.equal('Вече съществува клиент с въведеното име и идентификатор'));

    // });
})