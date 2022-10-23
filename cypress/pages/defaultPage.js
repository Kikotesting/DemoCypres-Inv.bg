
import {HomePage} from './homePage.js'
import {AuthenticatePage} from './authenticatePage.js'
import {DashboardPage} from './dashboardPage.js'

export class DefaultPage {

    defaultLogin(){
        const homePage = new (HomePage);
        const authenticatePage = new (AuthenticatePage);
        const dashboardPage = new(DashboardPage);
        
        homePage.click_customersEntryBtn()
        homePage.type_customerSubdomainInput()
        homePage.click_loginBtn()
        authenticatePage.type_email()
        authenticatePage.type_password()
        authenticatePage.click_submitBtn()
        dashboardPage.click_welcomePopupBtn()
        dashboardPage.verify_MainHeader()
        dashboardPage.verify_panelHeader()
    }

} 