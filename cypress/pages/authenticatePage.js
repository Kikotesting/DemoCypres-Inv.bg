    export class AuthenticatePage{
        elements = {
        emailInput : () => cy.get('#loginusername'),
        passwordInput : () => cy.get('#loginpassword'),
        submitBtn : () => cy.get('#loginsubmit')
        }


        type_email(){
            this.elements.emailInput().type('kikotestsecure@gmail.com')
        }
        type_password(){
            this.elements.passwordInput().type('Kiko123@')
        }
        click_submitBtn(){
            this.elements.submitBtn().click()
        }

    }
    
    
    
    
    
    
    
    
    
    
