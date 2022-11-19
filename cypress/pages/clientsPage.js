import { randomFullName,randomAddress,randomGsmNumber, randomCity,randomEditName,
        MESSAGE_ADDED_CLIENT,
        MESSAGE_DELETED_CLIENT,
        MESSAGE_EDIT_CLIENT,
      } 
     from "../support/constant.js"
     
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
        successDeletedClient : () => cy.get('#okmsg'),

        tableWithClients : () => cy.get('#fakturi_table'),
        editClientBtn : () => cy.get('.slenium-client-button-edit'),

        deleteBtn : () => cy.get('#delete--btn'),

    }
    // Add client
    click_addNewClientBtn(){
        this.elements.addNewClientBtn().click()
    }
    select_PersonalClient(){
        this.elements.checkboxPersonal().click()
    }
    type_personName(){
        this.elements.personName_field().clear().type(randomFullName)
    }
    type_personAddress(){
        this.elements.personAddress_field().type(randomAddress)
    }
    type_personCity(){
        this.elements.personCity_field().type(randomCity)
    }
    select_phoneTypeMobile(){
        this.elements.phoneTypeSelector().select('Мобилен').should('have.value','mobile')
    }
    type_MobileNumber(){
        this.elements.personPhone_field().type(randomGsmNumber)
    }
    click_submitNewClientBtn(){
        this.elements.submitNewClientBtn().click()
    }
    assertAddedClientMessage(){
        this.elements.successAddedClient().should($el => expect($el.text().trim()).to.equal(MESSAGE_ADDED_CLIENT))
    }

    // Edit client data
    edit_FoundClient(){
        this.elements.tableWithClients().contains(randomFullName).click()
    }
    click_EditClientBtn(){
        this.elements.editClientBtn().click()
    }
    type_EditPersonName(){
        this.elements.personName_field().clear().type("Edit-" + randomEditName)
    }
    save_EditClientChanges(){
        this.elements.submitNewClientBtn().click()
    }
    assertMessageForEditChanges(){
        this.elements.successAddedClient().should($el =>
             expect($el.text().trim()).to.equal(MESSAGE_EDIT_CLIENT))
    }
    
    // Delete client data
    click_Client(){
        this.elements.tableWithClients().contains(randomFullName).click()
    }
    click_DeleteBtn(){
        this.elements.deleteBtn().click()
    }
    assertMessageForDeleteClient(){
        this.elements.successDeletedClient().should($el =>
             expect($el.text().trim()).to.equal(MESSAGE_DELETED_CLIENT))
    }
    

}