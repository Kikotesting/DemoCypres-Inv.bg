import { 
     randomUserString,
     QUANTITY_ITEM, 
     PRICE_ITEM, 
     MESSAGE_ITEM_ADDED, 
     MESSAGE_ITEM_EXIST,
     MESSAGE_DELETE_ALL_ITEMS,
     MESSAGE_SAVE_CHANGING_ITEM,
     PRICE_EDIT_ITEM } 
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
        editItemBtn : () => cy.xpath('//*[@id="faktura_controls"]/a[2]'),
        saveItemBtn : () => cy.get('.button--height24px'),
        checkBoxAllItems : () => cy.get('#handle_all'),
        deleteItemsBtn : () => cy.get('#delbtn'),
        messageForDelete : () => cy.get('#emptylist'),
        searchBtn : () => cy.get('#searchbtn'),
        searchField : () => cy.get('input[name="nm"]'),
        searchingBtn : () => cy.get('input[name="s"]'),
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

    // Edit new Item
    click_addedNewItem(){
        this.elements.tableWithNewItem().contains(randomUserString).click()
    }
    click_EditItemBtn(){
        this.elements.editItemBtn().click()
    }
    edit_NameOfChoosenItem(){
        this.elements.nameItem().clear().type(randomUserString)
    }
    click_SaveItemBtn(){
        this.elements.saveItemBtn().click()
    }
    type_NewPrice(){
        this.elements.price().clear().type(PRICE_EDIT_ITEM)
    }
    assertChangedItemMessage(){
        this.elements.successMessageForAddItem().contains(MESSAGE_SAVE_CHANGING_ITEM)
     }

    //Search items
    click_SearchBtn(){
        this.elements.searchBtn().click()
    }
    click_SearchingBtn(){
        this.elements.searchingBtn().click()
    }
    type_SearchItem(){
        this.elements.searchField().clear().type(randomUserString)
    }
    assertNoMoreItemsDespiteFoundOne(){
        this.elements.tableWithNewItem().should('have.length', 1)
    }

    //Assertions in Adding ItemPage
    assertAddedItemSuccessMessage(){
       this.elements.successMessageForAddItem().should($el => 
        expect($el.text().trim()).to.equal(MESSAGE_ITEM_ADDED));
        
    }
    assertExistingProductErrorMessage(){
        this.elements.errorMessageExistingProduct().should($el => 
            expect($el.text().trim()).to.equal(MESSAGE_ITEM_EXIST))
     }
    assertHeaderItemName(){
        this.elements.headerItemName().should('have.text',randomUserString)
     }
     assertNewItem(){
        this.elements.tableWithNewItem().contains(randomUserString)
     }
     assertNoRecords(){
        this.elements.messageForDelete().should($el =>
             expect($el.text().trim()).to.equal(MESSAGE_DELETE_ALL_ITEMS))
    }



}