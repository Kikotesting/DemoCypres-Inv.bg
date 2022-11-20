/// <reference types="cypress" />
import {DefaultPage} from '../pages/defaultPage.js'
import {ItemsPage} from '../pages/itemsPage.js'
import {DashboardPage} from '../pages/dashboardPage.js'

    describe('Positive Items tests', () => {
    
        beforeEach(() => {
            cy.visit('http://www.inv.bg')
        })
    
        it("1.Add NEW Item", () => {
            const defaultPage = new (DefaultPage);
            const itemsPage = new (ItemsPage);
            const dashboardPage = new (DashboardPage);
    
            defaultPage.defaultLogIn()
            dashboardPage.click_addItem()

            itemsPage.type_NameOfItem()
            itemsPage.type_PriceOfItemInt()
            itemsPage.type_quantityOfItem()

            itemsPage.click_addItemBtn()
    
            // itemsPage.click_popupModalCheckbox()
            // itemsPage.click_popupAddBtn()
    
            itemsPage.assertAddedItemSuccessMessage()
            itemsPage.assertHeaderItemName()
        })
        it("2.Check added new item", () => {
            const defaultPage = new (DefaultPage);
            const itemsPage = new (ItemsPage);
            const dashboardPage = new (DashboardPage);
    
            defaultPage.defaultLogIn()
            dashboardPage.click_topMenuItems()
            itemsPage.assertAddedItem()
        })
        it("3.Edit existing item", () => {
            const defaultPage = new (DefaultPage);
            defaultPage.defaultLogIn()
            
            const dashboardPage = new (DashboardPage);
            dashboardPage.click_topMenuItems()
            
            const itemsPage = new (ItemsPage);
            itemsPage.assertAddedItem()
            itemsPage.click_addedItem()
            itemsPage.click_EditItemBtn()
            itemsPage.edit_NameOfItem()
            itemsPage.edit_PriceOfItem()
            itemsPage.click_SaveEditItemBtn()
            itemsPage.assertMessageForEditItem()
        })
        it("4.Add Second Item", () => {
            const defaultPage = new (DefaultPage);
            const itemsPage = new (ItemsPage);
            const dashboardPage = new (DashboardPage);
    
            defaultPage.defaultLogIn()
            dashboardPage.click_addItem()

            itemsPage.type_NameOfItem()
            itemsPage.type_PriceOfItemInt()
            itemsPage.type_quantityOfItem()

            itemsPage.click_addItemBtn()
    
            // itemsPage.click_popupModalCheckbox()
            // itemsPage.click_popupAddBtn()
    
            itemsPage.assertAddedItemSuccessMessage()
            itemsPage.assertHeaderItemName()
        })
        it("5.Search existing item", () => {
            const defaultPage = new (DefaultPage);
            defaultPage.defaultLogIn()
            const dashboardPage = new (DashboardPage);
            dashboardPage.click_topMenuItems()

            const itemsPage = new (ItemsPage);
            itemsPage.click_SearchBtn()
            itemsPage.type_SearchItem()
            itemsPage.click_SearchingBtn()
            itemsPage.assertNoMoreItemsDespiteFoundOne() 
        })
        it("6.Add Third Item", () => {
            const defaultPage = new (DefaultPage);
            const itemsPage = new (ItemsPage);
            const dashboardPage = new (DashboardPage);
    
            defaultPage.defaultLogIn()
            dashboardPage.click_addItem()

            itemsPage.type_NameOfItem()
            itemsPage.type_PriceOfItemInt()
            itemsPage.type_quantityOfItem()

            itemsPage.click_addItemBtn()
    
            // itemsPage.click_popupModalCheckbox()
            // itemsPage.click_popupAddBtn()
    
            itemsPage.assertAddedItemSuccessMessage()
            itemsPage.assertHeaderItemName()
        })
        it("7.Search third item", () => {
            const defaultPage = new (DefaultPage);
            defaultPage.defaultLogIn()
            const dashboardPage = new (DashboardPage);
            dashboardPage.click_topMenuItems()

            const itemsPage = new (ItemsPage);
            itemsPage.click_SearchBtn()
            itemsPage.type_SearchItem()
            itemsPage.click_SearchingBtn()
            itemsPage.assertItemsFoundThird() 
        })
        it("8.Delete existing items", () => {
            const defaultPage = new (DefaultPage);
            defaultPage.defaultLogIn()
            const dashboardPage = new (DashboardPage);
            dashboardPage.click_topMenuItems()
            const itemsPage = new (ItemsPage);
            itemsPage.click_checkboxAllItems()
            itemsPage.click_deleteItemsBtn()
            itemsPage.click_modalForSure()
            itemsPage.assertNotFoundItemsMessage()
            itemsPage.assertDeletedItemsMessage()
        })
        it("9.Add and Delete one Item", () => {
            const defaultPage = new (DefaultPage);
            const dashboardPage = new (DashboardPage);
            const itemsPage = new (ItemsPage);

            // Add one item
            defaultPage.defaultLogIn()
            dashboardPage.click_addItem()
            itemsPage.type_NameOfItem()
            itemsPage.type_PriceOfItemInt()
            itemsPage.type_quantityOfItem()
            itemsPage.click_addItemBtn()
            itemsPage.assertAddedItemSuccessMessage()
            itemsPage.assertHeaderItemName()
            
            // Go to ItemsPage and delete the created item
            dashboardPage.click_topMenuItems()
            itemsPage.click_checkboxAllItems()
            itemsPage.click_deleteItemsBtn()
            itemsPage.click_modalForSure()
            itemsPage.assertNotFoundItemsMessage()
            itemsPage.assertDeletedItemMessage()
            dashboardPage.click_topMenuItems()
        })
    
    })


