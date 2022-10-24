/// <reference types="cypress" />
import {DefaultPage} from '../pages/defaultPage.js'
import {ItemsPage} from '../pages/itemsPage.js'
import {DashboardPage} from '../pages/dashboardPage.js'

describe('Positive Items tests', () => {
    beforeEach(() => {
        cy.visit('https://inv.bg')
    })
    it("1.[P] Add new ITEM -> dashboard", () => {
        const defaultPage = new (DefaultPage);
        const itemsPage = new (ItemsPage);
        const dashboardPage = new (DashboardPage);

        defaultPage.defaultLogIn()
        dashboardPage.click_addItem()

        itemsPage.type_nameItem()
        itemsPage.type_price()
        //itemsPage.type_quantity()
        itemsPage.click_addItemBtn()
        itemsPage.assertAddedItemSuccessMessage()
        itemsPage.assertHeaderItemName()
    })

})