
/// <reference types="cypress" />

import {HomePage} from '../pages/homePage.js'
import {AuthenticatePage} from '../pages/authenticatePage.js'
import {DashboardPage} from '../pages/dashboardPage.js'

describe('Tests', () => {
    const homePage = new (HomePage);
    const authenticatePage = new (AuthenticatePage);
    const dashboardPage = new(DashboardPage);

    beforeEach(() => {
        cy.visit('https://inv.bg')
    })
    it("1.[P] Login with valid username and password", () => {
        homePage.click_customersEntryBtn()
        homePage.type_customerSubdomainInput()
        homePage.click_loginBtn()
        authenticatePage.type_email()
        authenticatePage.type_password()
        authenticatePage.click_submitBtn()
        dashboardPage.click_welcomePopupBtn()
        dashboardPage.verify_MainHeader()
        dashboardPage.verify_panelHeader()
    });


})
