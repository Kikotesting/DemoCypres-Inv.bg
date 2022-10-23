
/// <reference types="cypress" />

// import {HomePage} from '../pages/homePage.js'
// import {AuthenticatePage} from '../pages/authenticatePage.js'
// import {DashboardPage} from '../pages/dashboardPage.js'
import {DefaultPage, defaultPage} from '../pages/defaultPage.js'

describe('Tests', () => {
    // const homePage = new (HomePage);
    // const authenticatePage = new (AuthenticatePage);
    // const dashboardPage = new(DashboardPage);
    const defaultPage = new (DefaultPage);

    beforeEach(() => {
        cy.visit('https://inv.bg')
    })
    it("1.[P] Login with valid username and password", () => {
        defaultPage.defaultLogin()
    });


})
