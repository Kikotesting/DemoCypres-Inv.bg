/// <reference types="cypress" />
import {DefaultPage} from '../pages/defaultPage.js'
import {ItemsPage} from '../pages/itemsPage.js'
import {DashboardPage} from '../pages/dashboardPage.js'

    describe('Positive Items tests', () => {
    
        beforeEach(() => {
            cy.visit('http://www.inv.bg')
        })
    
        it("1.[P] Add NEW Items (4 times) -> dashboard", () => {
            const defaultPage = new (DefaultPage);
            const itemsPage = new (ItemsPage);
            const dashboardPage = new (DashboardPage);
    
            defaultPage.defaultLogIn()
            dashboardPage.click_addItem()
    
            itemsPage.type_nameItem()
            itemsPage.type_price()
    
            itemsPage.clear_quantity()
            itemsPage.type_quantity()
    
            itemsPage.click_addItemBtn()
    
            // itemsPage.click_popupModalCheckbox()
            // itemsPage.click_popupAddBtn()
    
            itemsPage.assertAddedItemSuccessMessage()
            itemsPage.assertHeaderItemName()
        })
        it.skip("2.[P] Check added new item", () => {
            const defaultPage = new (DefaultPage);
            const itemsPage = new (ItemsPage);
            const dashboardPage = new (DashboardPage);
    
            defaultPage.defaultLogIn()
            dashboardPage.click_topMenuItems()
            itemsPage.assertNewItem()
        })
        it.skip("3.[P] Edit existing item", () => {
            const defaultPage = new (DefaultPage);
            const itemsPage = new (ItemsPage);
            const dashboardPage = new (DashboardPage);
    
            defaultPage.defaultLogIn()
            dashboardPage.click_topMenuItems()
            itemsPage.assertNewItem()
            itemsPage.click_addedNewItem()
            itemsPage.click_EditItemBtn()
            itemsPage.edit_NameOfChoosenItem()
            itemsPage.type_NewPrice()
            itemsPage.click_SaveItemBtn()
            itemsPage.assertChangedItemMessage()
        })
        it("4.[P] Search existing item", () => {
            const defaultPage = new (DefaultPage);
            const itemsPage = new (ItemsPage);
            const dashboardPage = new (DashboardPage);
    
            defaultPage.defaultLogIn()
            dashboardPage.click_topMenuItems()
            itemsPage.click_SearchBtn()
            itemsPage.type_SearchItem()
            itemsPage.click_SearchingBtn()
            itemsPage.assertNoMoreItemsDespiteFoundOne()
            
        })

        it.skip("?.[P] Delete all existing items", () => {
            const defaultPage = new (DefaultPage);
            const itemsPage = new (ItemsPage);
            const dashboardPage = new (DashboardPage);
    
            defaultPage.defaultLogIn()
            dashboardPage.click_topMenuItems()
            //itemsPage.click_checkboxAllItems()
            //itemsPage.click_deleteItemsBtn()
            itemsPage.assertNoRecords()
            
           
    
        })
    
    })


