import { 
     randomUserString,
     QUANTITY_ITEM, 
     PRICE_ITEM, 
     MESSAGE_ITEM_ADDED, 
     MESSAGE_ITEM_EXIST,
     MESSAGE_DELETE_ALL_ITEMS } 
     from "../support/constant"

export class ItemsPage {
    
    elements = {
        nameItem : () => cy.get(':nth-child(1) > [width="170"] > .input--height24px'),
        price : () => cy.get(':nth-child(3) > [width="170"] > .input--height24px'),
        quantity : () => cy.get('div > .input--height24px'),
        addItemBtn : () => cy.get('.selenium-items-add-form-btn'),
        successMessageForAddItem : () => cy.get('#okmsg'),
        errorMessageExistingProduct : () => cy.get('#whiterow2 > :nth-child(3)'),
        headerItemName : () => cy.get('#headline2 > h2'),
        popupModalCheckbox : () => cy.get('#disable-popup-modal'),
        popupAddBtn : () => cy.get('#popup-modal'),
        tableWithNewItem : () => cy.get('#fakturi_table'),

        checkBoxAllItems : () => cy.get('#handle_all'),
        deleteItemsBtn : () => cy.get('#delbtn'),
        messageForDelete : () => cy.get('#emptylist'),
    }
    // Adding item in AddingItemPage
    type_nameItem(){
        this.elements.nameItem().type(randomUserString)
    }
    type_price(){
        this.elements.price().type(PRICE_ITEM)
    }
    type_quantity(){
        this.elements.quantity().type(QUANTITY_ITEM)
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

    // Delete item/s
    click_checkboxAllItems(){
        this.elements.checkBoxAllItems().click()
    }
    click_deleteItemsBtn(){
        this.elements.deleteItemsBtn().click()
    }


    //Assertions in Adding ItemPage
    assertAddedItemSuccessMessage(){
       this.elements.successMessageForAddItem().should($el => expect($el.text().trim()).to.equal(MESSAGE_ITEM_ADDED))
    }
    assertExistingProductErrorMessage(){
        this.elements.errorMessageExistingProduct().should($el => expect($el.text().trim()).to.equal(MESSAGE_ITEM_EXIST))
     }
    assertHeaderItemName(){
        this.elements.headerItemName().should('have.text',randomUserString)
     }
     assertNewItem(){
        this.elements.tableWithNewItem().contains(randomUserString)
     }
     assertNoRecords(){
        this.elements.messageForDelete().should($el => expect($el.text().trim()).to.equal(MESSAGE_DELETE_ALL_ITEMS))
    }



}