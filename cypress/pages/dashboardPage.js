import { LOGOUT_MESSAGE} from "../support/constant"

export class DashboardPage{
    elements = {
        welcomePopupBtn : () => cy.get('.newFeatureOKbutton'),
        mainHeader : () => cy.get('h1'),
        panelHeader : () => cy.get('.userpanel-header'),
        dropdownPanel : () => cy.get('#userpanel'),
        logoutBtn : () => cy.get('.selenium-button-logout'),
        logOutMessage : () => cy.get('#okmsg'),
        addItem : () => cy.get('[href="https://kikotest.inv.bg/objects/add"]'),

        topMenuClients : () => cy.get('#tabs_clients > .topmenu'),
        topMenuItems : () => cy.get('#tabs_objects > .topmenu'),
        topMenuDocs : () => cy.get('#tabs_documents > .topmenu'),


    }

    //Top menus
    click_topMenuClients(){
        this.elements.topMenuClients().click()
    }
    click_topMenuItems(){
        this.elements.topMenuItems().click()
    }
    click_topMenuDocs(){
        this.elements.topMenuDocs().click()
    }

    // Welcome alert
    click_welcomePopupBtn(){
        this.elements.welcomePopupBtn().click()
    }
    // Headers
    verify_MainHeader(){
        this.elements.mainHeader().should('have.text', "kikotest")
    }
    verify_panelHeader(){
        this.elements.panelHeader().should("have.text", 'kikotestsecure@gmail.com')
    }
    // Panel->dropdown menu
    click_dropdownPanel(){
        this.elements.dropdownPanel().click()
    }
    // Panel->dropdown menu->Logout button
    click_logOutBtn(){
        this.elements.logoutBtn().click()
    }
    click_addItem(){
        this.elements.addItem().click()
    }
    // Assert for messages
    verify_logOutMessage(){
        this.elements.logOutMessage().should($el => expect($el.text().trim()).to.equal(LOGOUT_MESSAGE));
    }
}