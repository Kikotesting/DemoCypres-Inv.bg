
/// <reference types="cypress" />

import { DashboardPage } from '../pages/dashboardPage.js';
import {DefaultPage} from '../pages/defaultPage.js'

describe('Tests', () => {
    const defaultPage = new (DefaultPage);

    beforeEach(() => {
        cy.visit('https://inv.bg')
    })

    it("1.[P] Login with valid username and password", () => {
        defaultPage.defaultLogin()
    });
    it("2.[N] Try: Wrong username and Wrong password", () => {
        defaultPage.wrongUsernameAndPassword()
    });
    it("3.[N] Try: Wrong username and Correct password", () => {
        defaultPage.wrongUsernameAndCorrectPassword()
    });
    it("4.[N] Try: Wrong password and Correct username", () => {
        defaultPage.wrongPasswordAndCorrectUsername()
    });
    it("5.[N] Try: Empty password field and Correct username   ", () => {
        defaultPage.EmptyPasswordAndCorrectUsername()
    });
    it("6.[N] Try: Empty username field and Correct password", () => {
        defaultPage.EmptyUsernameAndCorrectPassword()
    });
    it("7.[N] Try: Empty username field and Empty password field", () => {
        defaultPage.EmptyUsernameAndPassword()
    });


})
