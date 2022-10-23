export class DashboardPage{
    elements = {
        welcomePopupBtn : () => cy.get('.newFeatureOKbutton'),
        mainHeader : () => cy.get('h1'),
        panelHeader : () => cy.get('.userpanel-header'),
    }

    click_welcomePopupBtn(){
        this.elements.welcomePopupBtn().click()
    }
    verify_MainHeader(){
        this.elements.mainHeader().should('have.text', "kikotest")
    }
    verify_panelHeader(){
        this.elements.panelHeader().should("have.text", 'kikotestsecure@gmail.com')
    }
}