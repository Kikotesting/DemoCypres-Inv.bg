/// <reference types="cypress" />
import {DefaultPage} from '../pages/defaultPage.js'
import {DashboardPage} from '../pages/dashboardPage.js'
import {ClientsPage} from '../pages/clientsPage'

    describe('Positive Items tests', () => {
    
        beforeEach(() => {
            cy.visit('http://www.inv.bg')
        })
    
        it("1.[P] Add NEW Item", () => {
            const defaultPage = new (DefaultPage);
            const dashboardPage = new (DashboardPage);
            const clientsPage = new (ClientsPage);

            defaultPage.defaultLogIn()
            dashboardPage.click_topMenuClients()
            clientsPage.click_addNewClientBtn()
            clientsPage.select_PersonalClient()
            clientsPage.type_personName()
            clientsPage.type_personAddress()
            clientsPage.type_personCity()
            clientsPage.select_phoneTypeMobile()
            clientsPage.type_MobileNumber()
            clientsPage.click_submitNewClientBtn()
            clientsPage.assertAddedClientMessage()
        })
 
    
    })