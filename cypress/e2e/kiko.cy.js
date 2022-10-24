
/// <reference types="cypress" />

import {DefaultPage} from '../pages/defaultPage.js'
import {DashboardPage} from '../pages/dashboardPage.js'

describe('Positive Login Tests', () => {
    const defaultPage = new (DefaultPage);
    const dashboardPage = new DashboardPage();

    beforeEach(() => {
        cy.visit('https://inv.bg')
    })

    it("1.[P] Login with valid username and valid password", () => {
        defaultPage.defaultLogIn()
    });
    it("2.[P] Login and Logout functionality", () => {
        defaultPage.defaultLogOut()
    });
})
describe("Negative Login Tests", () => {
    const defaultPage = new (DefaultPage);
    beforeEach(() => {
        cy.visit('https://inv.bg')
    })

    it("1.[N] Try: Wrong username and Wrong password", () => {
        defaultPage.wrongUsernameAndPassword()
    });
    it("2.[N] Try: Wrong username and Correct password", () => {
        defaultPage.wrongUsernameAndCorrectPassword()
    });
    it("3.[N] Try: Wrong password and Correct username", () => {
        defaultPage.wrongPasswordAndCorrectUsername()
    });
    it("4.[N] Try: Empty password field and Correct username   ", () => {
        defaultPage.EmptyPasswordAndCorrectUsername()
    });
    it("5.[N] Try: Empty username field and Correct password", () => {
        defaultPage.EmptyUsernameAndCorrectPassword()
    });
    it("6.[N] Try: Empty username field and Empty password field", () => {
        defaultPage.EmptyUsernameAndPassword()
    });
})




