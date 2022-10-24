/// <reference types="cypress" />
import {DefaultPage} from '../pages/defaultPage.js'

describe('Items tests', () => {
    it("1.[P] Add new ITEM -> dashboard", () => {
        const defaultPage = new (DefaultPage)
        cy.visit('http://inv.bg')
        //defaultPage.defaultLogIn()

    })

})