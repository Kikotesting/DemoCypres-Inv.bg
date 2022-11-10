import { randomUserString } from "../support/constant.js"

export class HomePage {

    elements = {
        customersEntryBtn : () => cy.get('.inheaderlogin'),
        customerSubdomainInput : () => cy.get('#login-subdomain'),
        loginBtn : () => cy.get('#gologin'),
        emailInput : () => cy.get("#loginusername"),
        forgotPasswordLink : () => cy.get('.selenium-forgotten-page'),
        submitForgotPasswordBtn : () => cy.get('#submit'),
        fortgottenEmail : () => cy.get('input[class="form-control selenium-recover-email"]')
    }

    click_customersEntryBtn(){
        this.elements.customersEntryBtn().click()
    }
    type_customerSubdomainInput(){
        this.elements.customerSubdomainInput().type('Kikotest')
    }
    click_loginBtn(){
        this.elements.loginBtn().click()
    }
    click_forgotPasswordLink(){
        this.elements.forgotPasswordLink().click()
    }
    type_forgottenEmail(){
        this.elements.fortgottenEmail().clear().type('proba@proktonmail.com')
    }
    click_submitBtn(){
        this.elements.submitForgotPasswordBtn().click()
    }


}