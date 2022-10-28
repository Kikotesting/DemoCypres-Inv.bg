import { 
    ERROR_MESSAGE_MissingEmailUsername,
    ERROR_MESSAGE_MissingPassword,
    ERROR_MESSAGE_InvalidEmailAndPassword,
    EMAIL_USERNAME_AUTH, 
    PASSWORD_USERNAME_AUTH,
    Invalid_EMAIL_AUTH, 
    Invalid_PASSWORD_AUTH 
     } 
    from "../support/constant"

    export class AuthenticatePage{

        elements = {
        emailInput : () => cy.get('#loginusername'),
        passwordInput : () => cy.get('#loginpassword'),
        submitBtn : () => cy.get('#loginsubmit'),
        errorMessage : () => cy.get('#error'),
        }

        // Valid data
        type_validEmail(){
            this.elements.emailInput().type(EMAIL_USERNAME_AUTH)
        }
        type_validPassword(){
            this.elements.passwordInput().type(PASSWORD_USERNAME_AUTH)
        }
        click_submitBtn(){
            this.elements.submitBtn().click()
        }

        // Invalid data
        type_InvalidEmail(){
            this.elements.emailInput().type(Invalid_EMAIL_AUTH)
        }
        type_InvalidPassword(){
            this.elements.passwordInput().type(Invalid_PASSWORD_AUTH)
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
           this.elements.errorMessage().should($el => expect($el.text().trim()).to.equal(ERROR_MESSAGE_InvalidEmailAndPassword));
        }
        assertErrorMessageMissingPassword(){
            this.elements.errorMessage().should($el => expect($el.text().trim()).to.equal(ERROR_MESSAGE_MissingPassword));
        }
        assertErrorMessageMissingUsername(){
            this.elements.errorMessage().should($el => expect($el.text().trim()).to.equal(ERROR_MESSAGE_MissingEmailUsername));
        }
    }
    
    
    
    
    
    
    
    
    
    
