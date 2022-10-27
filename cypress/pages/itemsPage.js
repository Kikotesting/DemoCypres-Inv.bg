export class ItemsPage {

    elements = {
        nameItem : () => cy.get(':nth-child(1) > [width="170"] > .input--height24px'),
        price : () => cy.get(':nth-child(3) > [width="170"] > .input--height24px'),
        quantity : () => cy.get('div > .input--height24px'),
        addItemBtn : () => cy.get('.selenium-items-add-form-btn'),
        successefullyMessage : () => cy.get('#okmsg'),
        errorMessageExistingProduct : () => cy.get('#whiterow2 > :nth-child(3)'),
        headerItemName : () => cy.get('#headline2 > h2'),
        popupModalCheckbox : () => cy.get('#disable-popup-modal'),
        popupAddBtn : () => cy.get('#popup-modal'),
    }

    // Adding product
    type_nameItem(){
        this.elements.nameItem().type('Oficer5')
    }
    type_price(){
        this.elements.price().type('102')
    }
    type_quantity(){
        this.elements.quantity().type('123')
    }
    clear_quantity(){
        this.elements.quantity().clear()
    }
    click_addItemBtn(){
        this.elements.addItemBtn().click()
    }
    click_popupModalCheckbox(){
        this.elements.popupModalCheckbox().click()
    }
    click_popupAddBtn(){
        this.elements.popupAddBtn().click()
    }
    //Assertions
    assertAddedItemSuccessMessage(){
       this.elements.successefullyMessage().should($el => expect($el.text().trim()).to.equal('Артикулът е добавен успешно.'))
    }
    assertExistingProductErrorMessage(){
        this.elements.errorMessageExistingProduct().should($el => expect($el.text().trim()).to.equal('Вече сте добавили артикул с това име.'))
     }
    assertHeaderItemName(){
        this.elements.headerItemName().should('have.text','Oficer5')
     }


}