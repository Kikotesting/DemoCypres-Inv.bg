export class HomePage {

    elements = {
        customersEntryBtn : () => cy.get('.inheaderlogin'),
        customerSubdomainInput : () => cy.get('#login-subdomain'),
        loginBtn : () => cy.get('#gologin'),
        emailInput : () => cy.get("#loginusername")
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


}