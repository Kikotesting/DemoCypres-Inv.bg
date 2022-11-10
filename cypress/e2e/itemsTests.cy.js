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
            itemsPage.assertNewItem()
        })
        it("3.Search existing item", () => {
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
        it("4.Edit existing item", () => {
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
        it("5.Delete all existing items", () => {
            const defaultPage = new (DefaultPage);
            defaultPage.defaultLogIn()
            const dashboardPage = new (DashboardPage);
            dashboardPage.click_topMenuItems()
            const itemsPage = new (ItemsPage);
            itemsPage.click_checkboxAllItems()
            itemsPage.click_deleteItemsBtn()
            itemsPage.click_modalForSure()
            itemsPage.assertNoRecords()
        })
    
    })


