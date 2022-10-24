
import {HomePage} from './homePage.js'
import {AuthenticatePage} from './authenticatePage.js'
import {DashboardPage} from './dashboardPage.js'

export class DefaultPage {

    defaultLogIn(){
        const homePage = new (HomePage);
        const authenticatePage = new (AuthenticatePage);
        const dashboardPage = new(DashboardPage);
        
        homePage.click_customersEntryBtn()
        homePage.type_customerSubdomainInput()
        homePage.click_loginBtn()
        authenticatePage.type_validEmail()
        authenticatePage.type_validPassword()
        authenticatePage.click_submitBtn()
        dashboardPage.click_welcomePopupBtn()
        dashboardPage.verify_MainHeader()
        dashboardPage.verify_panelHeader()
    }
    wrongUsernameAndPassword(){
        const homePage = new (HomePage);
        const authenticatePage = new (AuthenticatePage);

        homePage.click_customersEntryBtn()
        homePage.type_customerSubdomainInput()
        homePage.click_loginBtn()
        authenticatePage.type_InvalidEmail()
        authenticatePage.type_InvalidPassword()
        authenticatePage.click_submitBtn()
        authenticatePage.assertErrorMessageInvalidEmailAndPassword()
     }
    wrongUsernameAndCorrectPassword(){
        const homePage = new (HomePage);
        const authenticatePage = new (AuthenticatePage);

        homePage.click_customersEntryBtn()
        homePage.type_customerSubdomainInput()
        homePage.click_loginBtn()
        authenticatePage.type_InvalidEmail()
        authenticatePage.type_validPassword()
        authenticatePage.click_submitBtn()
        authenticatePage.assertErrorMessageInvalidEmailAndPassword()
    
    }
    wrongPasswordAndCorrectUsername(){
        const homePage = new (HomePage);
        const authenticatePage = new (AuthenticatePage);

        homePage.click_customersEntryBtn()
        homePage.type_customerSubdomainInput()
        homePage.click_loginBtn()
        authenticatePage.type_validEmail()
        authenticatePage.type_InvalidPassword()
        authenticatePage.click_submitBtn()
        authenticatePage.assertErrorMessageInvalidEmailAndPassword()

    }
    EmptyUsernameAndPassword(){
        const homePage = new (HomePage);
        const authenticatePage = new (AuthenticatePage);

        homePage.click_customersEntryBtn()
        homePage.type_customerSubdomainInput()
        homePage.click_loginBtn()
        authenticatePage.type_EmptyEmail()
        authenticatePage.type_EmptyPassword()
        authenticatePage.click_submitBtn()
        authenticatePage.assertErrorMessageMissingUsername()
    }
    EmptyPasswordAndCorrectUsername(){
        const homePage = new (HomePage);
        const authenticatePage = new (AuthenticatePage);
    
        homePage.click_customersEntryBtn()
        homePage.type_customerSubdomainInput()
        homePage.click_loginBtn()
        authenticatePage.type_validEmail()
        authenticatePage.type_EmptyPassword
        authenticatePage.click_submitBtn()
        authenticatePage.assertErrorMessageMissingPassword()
    }
    EmptyUsernameAndCorrectPassword(){
        const homePage = new (HomePage);
        const authenticatePage = new (AuthenticatePage);
    
        homePage.click_customersEntryBtn()
        homePage.type_customerSubdomainInput()
        homePage.click_loginBtn()
        authenticatePage.type_EmptyEmail()
        authenticatePage.type_validPassword
        authenticatePage.click_submitBtn()
        authenticatePage.assertErrorMessageMissingUsername()
    }

} 