    export class AuthenticatePage{

        elements = {
        emailInput : () => cy.get('#loginusername'),
        passwordInput : () => cy.get('#loginpassword'),
        submitBtn : () => cy.get('#loginsubmit')
        }

        // Valid data
        type_validEmail(){
            this.elements.emailInput().type('kikotestsecure@gmail.com')
        }
        type_validPassword(){
            this.elements.passwordInput().type('Kiko123@')
        }
        click_submitBtn(){
            this.elements.submitBtn().click()
        }

        // Invalid data
        type_InvalidEmail(){
            this.elements.emailInput().type('sifdsdbb@m.com')
        }
        type_InvalidPassword(){
            this.elements.passwordInput().type('Kdsssdssd4')
        }

        //Empty data
        type_EmptyEmail(){
            this.elements.emailInput().clear()
        }
        type_EmptyPassword(){
            this.elements.passwordInput().clear()
        }

        //Assertion error messages
        assertErrorMessageInvalidEmailAndPassword(){
            cy.get('#error').should($el => expect($el.text().trim()).to.equal('Грешно потребителско име или парола. Моля, опитайте отново.'));
        }
        assertErrorMessageMissingPassword(){
            cy.get('#error').should($el => expect($el.text().trim()).to.equal('Моля, попълнете вашата парола'));
        }
        assertErrorMessageMissingUsername(){
            cy.get('#error').should($el => expect($el.text().trim()).to.equal('Моля, попълнете вашия email'));
        }
          
          
    

    }
    
    
    
    
    
    
    
    
    
    
