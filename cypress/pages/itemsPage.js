export class ItemsPage {

    elements = {
        nameItem : () => cy.get(':nth-child(1) > [width="170"] > .input--height24px'),
        price : () => cy.get(':nth-child(3) > [width="170"] > .input--height24px'),
        quantity : () => cy.get('div > .input--height24px'),
        addItemBtn : () => cy.get('.selenium-items-add-form-btn'),
        successefullyMessage : () => cy.get('#okmsg'),
        headerItemName : () => cy.get('#headline2 > h2')
    }

    // Adding product
    type_nameItem(){
        this.elements.nameItem().type('Oficer')
    }
    type_price(){
        this.elements.price().type('10')
    }
    type_quantity(){
        this.elements.customerSubdomainInput().type('1')
    }
    click_addItemBtn(){
        this.elements.addItemBtn().click()
    }
    //Assertions
    assertAddedItemSuccessMessage(){
       this.elements.successefullyMessage().should($el => expect($el.text().trim()).to.equal('Артикулът е добавен успешно.'))
    }
    assertHeaderItemName(){
        this.elements.headerItemName().should('have.text','Oficer')
     }


}