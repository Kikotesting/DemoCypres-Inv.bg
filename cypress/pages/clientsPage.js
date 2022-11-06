import { randomUserString,
        MESSAGE_ADDED_CLIENT,
        MESSAGE_EDIT_CLIENT,
      } 
     from "../support/constant"
     
export class ClientsPage {
    
    elements = {
        
        addNewClientBtn : () => cy.get('.newbtn'),
        checkboxPersonal : () => cy.get('#type_person'),

        personName_field : () => cy.get('input[name="person_name"]'),
        personAddress_field : () => cy.get('textarea[name="person_address"]'),
        personCity_field : () => cy.get('input[name="person_city"]'),

        personPhone_field : () => cy.get('input[name="phone_numbers[0][number]"]'),
        phoneTypeSelector : () => cy.get('select'),

        submitNewClientBtn : () => cy.get('[name="do_submit"]'),
        successAddedClient : () => cy.get('#okmsg'),

        tableWithClients : () => cy.get('#fakturi_table'),
        editClientBtn : () => cy.get('.slenium-client-button-edit'),

    }
    // Add client
    click_addNewClientBtn(){
        this.elements.addNewClientBtn().click()
    }
    select_PersonalClient(){
        this.elements.checkboxPersonal().click()
    }
    type_personName(){
        this.elements.personName_field().clear().type(randomUserString)
    }
    type_personAddress(){
        this.elements.personAddress_field().type(randomUserString)
    }
    type_personCity(){
        this.elements.personCity_field().type('Sofia')
    }
    select_phoneTypeMobile(){
        this.elements.phoneTypeSelector().select('Мобилен').should('have.value','mobile')
    }
    type_MobileNumber(){
        this.elements.personPhone_field().type('0878111222')
    }
    click_submitNewClientBtn(){
        this.elements.submitNewClientBtn().click()
    }
    assertAddedClientMessage(){
        this.elements.successAddedClient().should($el => expect($el.text().trim()).to.equal(MESSAGE_ADDED_CLIENT))
    }

    // Edit client data
    edit_FoundClient(){
        this.elements.tableWithClients().contains(randomUserString.slice(1,7)).click()
    }
    click_EditClientBtn(){
        this.elements.editClientBtn().click()
    }
    type_EditPersonName(){
        // stayed only numbers and delete the words
        //this.elements.personName_field().clear().type(randomUserString.replace(/\D/g, ""))
        this.elements.personName_field().clear().type(randomUserString.replace(/[0-9]/g, ''))
    }
    save_EditClientChanges(){
        this.elements.submitNewClientBtn().click()
    }
    assertMessageForEditChanges(){
        this.elements.successAddedClient().should($el =>
             expect($el.text().trim()).to.equal(MESSAGE_EDIT_CLIENT))
    }

}