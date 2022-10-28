/// <reference types="cypress" />
import {DefaultPage} from '../pages/defaultPage.js'
import {ItemsPage} from '../pages/itemsPage.js'
import {DashboardPage} from '../pages/dashboardPage.js'

describe('Positive Items tests', () => {
    
    beforeEach(() => {
        cy.visit('http://www.inv.bg')
    })

    it("1.[P] Add NEW Item -> dashboard", () => {
        
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

    it("2.[P] Check added new item -> dashboard", () => {
        const defaultPage = new (DefaultPage);
        const itemsPage = new (ItemsPage);
        const dashboardPage = new (DashboardPage);

        defaultPage.defaultLogIn()
        dashboardPage.click_topMenuItems()
        itemsPage.assertNewItem()
    })

})

