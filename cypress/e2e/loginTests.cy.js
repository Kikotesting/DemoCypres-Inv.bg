describe('Login Tests', () => {
  
    // it('1.[P] Login with valid user and pass', () => {
    //   require('cypress-xpath');

    //   // Visit the website
    //   cy.visit('https://inv.bg')

    //   // Button - Find SignIn button and click
    //   cy.xpath('//*[@id="inheader"]/a[2]').click()

    //   // Topbar - Type username -> enter
    //   cy.get('#login-subdomain').type('Kikotest');
    //   cy.xpath('//*[@id="gologin"]').click();

    //   // Populate the Email and Passoword -> enter 
    //   cy.get("#loginusername").type('kikotestsecure@gmail.com');
    //   cy.get('#loginpassword').type('Kiko123@');
    //   cy.get('[data-callback="submitLoginForm"]').click()
      
    //   // Dismiss the Welcome message
    //   cy.get('.newFeatureOKbutton').click();

    //   //Assertions profile text (your username)
    //   cy.xpath('//*[@id="logo"]/a/h1').should('have.text',"kikotest");
    //   cy.xpath("//*[@id='userpanel']/div").should("have.text",'kikotestsecure@gmail.com');
    // })

      it('1.1.[N] Try to login: negative scenarious', () => {
        require('cypress-xpath');
        
        // Visit the website
        cy.visit('https://inv.bg')

        // Button - Find SignIn button and click
        cy.xpath('//*[@id="inheader"]/a[2]').click()

        // Topbar - Type username -> enter
        cy.get('#login-subdomain').type('Kikotest');
        cy.xpath('//*[@id="gologin"]').click();

        /* 1.1.1 Wrong username and Wrong password 
               Check error message
        */
        cy.get("#loginusername").type('23829389@gmail.com');
        cy.get('#loginpassword').type('21212@');
        cy.get('[data-callback="submitLoginForm"]').click()
        cy.get('#error').should($el => expect($el.text().trim()).to.equal('Грешно потребителско име или парола. Моля, опитайте отново.'));
        
        /* 1.1.2 Wrong username and Correct password 
               Check error message
        */
        cy.get("#loginusername").clear().type('k1111111e@gmail.com');
        cy.get('#loginpassword').clear().type('Kiko123@');
        cy.get('[data-callback="submitLoginForm"]').click()
        cy.get('#error').should($el => expect($el.text().trim()).to.equal('Грешно потребителско име или парола. Моля, опитайте отново.'));

        /* 1.1.3 Correct username and Wrong password 
               Check error message
        */
        cy.get("#loginusername").clear().type('kikotestsecure@gmail.com');
        cy.get('#loginpassword').clear().type('14241241@');
        cy.get('[data-callback="submitLoginForm"]').click()
        cy.get('#error').should($el => expect($el.text().trim()).to.equal('Грешно потребителско име или парола. Моля, опитайте отново.'));
        

      })

    // it('2.[P] LogIn and LogOut', () => {
    //   require('cypress-xpath');

    //   // Visit the website
    //   cy.visit('https://inv.bg')

    //   // Button - Find SignIn button and click
    //   cy.xpath('//*[@id="inheader"]/a[2]').click()

    //   // Topbar - Type username -> enter
    //   cy.get('#login-subdomain').type('Kikotest');
    //   cy.xpath('//*[@id="gologin"]').click();

    //   // Populate the Email and Passoword -> enter 
    //   cy.get("#loginusername").type('kikotestsecure@gmail.com');
    //   cy.get('#loginpassword').type('Kiko123@');
    //   cy.get('[data-callback="submitLoginForm"]').click()

    //   // Dismiss the Welcome message
    //   cy.get('.newFeatureOKbutton').click();

    //   //Assertions profile text (your username)
    //   cy.xpath('//*[@id="logo"]/a/h1').should('have.text',"kikotest");
    //   cy.xpath("//*[@id='userpanel']/div").should("have.text",'kikotestsecure@gmail.com');

    //   // Logout 
    //   cy.xpath("//*[@id='userpanel']/div").click ();
    //   cy.xpath("//*[@id='hdr2']/div[2]/div/div[3]/a").click();

    //   //Assumtion you are exit from the system
    //   cy.xpath('//*[@id="wellcome"]/h2').should('have.text','kikotest');
    //   cy.get('#okmsg').should($el => expect($el.text().trim()).to.equal('Вие излязохте от акаунта си.'));
    //   })
    // it('3.[N] Try to login with empty fields', () => {
    //   require('cypress-xpath');

    //   // Visit the website
    //   cy.visit('https://inv.bg')

    //   // Button - Find SignIn button and click
    //   cy.xpath('//*[@id="inheader"]/a[2]').click()

    //   // Topbar - Type username -> enter
    //   cy.get('#login-subdomain').type('Kikotest');
    //   cy.xpath('//*[@id="gologin"]').click();

    //   //  -> enter without credentials
    //   cy.get('[data-callback="submitLoginForm"]').click()
      
    //   // Check error message
    //   cy.get('#error').should($el => expect($el.text().trim()).to.equal('Моля, попълнете вашия email'));
    //   })

  })