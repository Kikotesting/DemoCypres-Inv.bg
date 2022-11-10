import { 
     MESSAGE_ITEM_ADDED, 
     MESSAGE_ITEM_EXIST,
     MESSAGE_DELETE_ALL_ITEMS,
     MESSAGE_SAVE_CHANGING_ITEM,
     MESSAGE_DELETE_ITEMS_SUCCESS,
     randomProductName, randomIntPrice, randomEditName
      } 
     from "../support/constant.js"
     

export class ItemsPage {
    
    elements = {
        
        nameOfItem : () => cy.get('[name="name"'),
        priceOfItem : () => cy.get('[name="price"]'),
        quantityOfItem : () => cy.get('[name="price_quantity"]'),
        addItemBtn : () => cy.get('.selenium-items-add-form-btn'),
        successMessageForAddItem : () => cy.get('#okmsg'),
        errorMessageExistingProduct : () => cy.get('#whiterow2 > :nth-child(3)'),
        headerItemName : () => cy.get('#headline2 > h2'),
        popupModalCheckbox : () => cy.get('#disable-popup-modal'),
        popupAddBtn : () => cy.get('#popup-modal'),
        tableWithNewItem : () => cy.get('#fakturi_table'),
        editItemBtn : () => cy.contains('Редактирай'),
        saveItemBtn : () => cy.contains('Запази'),
        checkBoxAllItems : () => cy.get('#handle_all'),
        deleteItemsBtn : () => cy.get('#delbtn'),
        messageForDelete : () => cy.get('#emptylist'),
        searchBtn : () => cy.get('#searchbtn'),
        searchField : () => cy.get('input[name="nm"]'),
        searchingBtn : () => cy.get('input[name="s"]'),
        modalForSure : () => cy.get('.modal-confirm__ok-button'),
        successMessageForDeleteItem : () => cy.get('#okmsg'),
    }
    // Adding item in AddingItemPage
    type_NameOfItem(){
        this.elements.nameOfItem().type(randomProductName)
    }
    type_PriceOfItemInt(){
        this.elements.priceOfItem().type(randomIntPrice)
    }
    type_quantityOfItem(){
        this.elements.quantityOfItem().clear().type(randomIntPrice)
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
    click_modalForSure(){
        this.elements.modalForSure().click()
    }

    // Delete item/s
    click_checkboxAllItems(){
        this.elements.checkBoxAllItems().click()
    }
    click_deleteItemsBtn(){
        this.elements.deleteItemsBtn().click()
    }
    assertDeletedItemsMessage(){
        this.elements.successMessageForDeleteItem().should($el => 
         expect($el.text().trim()).to.equal(MESSAGE_DELETE_ITEMS_SUCCESS));
         
     }

    // Edit new Item
    click_addedItem(){
        this.elements.tableWithNewItem().contains(randomProductName).click()
    }
    click_EditItemBtn(){
        this.elements.editItemBtn().click()
    }
    edit_NameOfItem(){
        this.elements.nameOfItem()
        .clear()
        .type(randomEditName)
    }
    edit_PriceOfItem(){
        this.elements.priceOfItem()
        .clear()
        .type(randomIntPrice)
    }
    click_SaveEditItemBtn(){
        this.elements.saveItemBtn().click()
    }
    assertMessageForEditItem(){
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
        this.elements.searchField().clear().type(randomProductName)
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
        this.elements.headerItemName().should('have.text',randomProductName)
     }
    assertAddedItem(){
        this.elements.tableWithNewItem().contains(randomProductName)
     }
    assertNoRecordsMessage(){
        this.elements.messageForDelete().should($el =>
             expect($el.text().trim()).to.equal(MESSAGE_DELETE_ALL_ITEMS))
    }



}