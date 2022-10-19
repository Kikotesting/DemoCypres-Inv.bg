describe('Login Tests', () => {
  
      it('1.[P] Login with valid user and pass', () => {
        require('cypress-xpath');

        // Visit the website
        cy.visit('https://inv.bg')

        // Button - Find SignIn button and click
        cy.xpath('//*[@id="inheader"]/a[2]').click()

        // Topbar - Type username -> enter
        cy.get('#login-subdomain').type('Kikotest');
        cy.xpath('//*[@id="gologin"]').click();

        // Populate the Email and Passoword -> enter 
        cy.get("#loginusername").type('kikotestsecure@gmail.com');
        cy.get('#loginpassword').type('Kiko123@');
        cy.get('[data-callback="submitLoginForm"]').click()
        
        // Dismiss the Welcome message
        cy.get('.newFeatureOKbutton').click();

        //Assertions profile text (your username)
        cy.xpath('//*[@id="logo"]/a/h1').should('have.text',"kikotest");
        cy.xpath("//*[@id='userpanel']/div").should("have.text",'kikotestsecure@gmail.com');
      })

      it('1.2.[P] Perform LogIn and LogOut', () => {
        require('cypress-xpath');

        // Visit the website
        cy.visit('https://inv.bg')

        // Button - Find SignIn button and click
        cy.xpath('//*[@id="inheader"]/a[2]').click()

        // Topbar - Type username -> enter
        cy.get('#login-subdomain').type('Kikotest');
        cy.xpath('//*[@id="gologin"]').click();

        // Populate the Email and Passoword -> enter 
        cy.get("#loginusername").type('kikotestsecure@gmail.com');
        cy.get('#loginpassword').type('Kiko123@');
        cy.get('[data-callback="submitLoginForm"]').click()

        // Dismiss the Welcome message
        cy.get('.newFeatureOKbutton').click();

        //Assertions profile text (your username)
        cy.xpath('//*[@id="logo"]/a/h1').should('have.text',"kikotest");
        cy.xpath("//*[@id='userpanel']/div").should("have.text",'kikotestsecure@gmail.com');

        // Logout 
        cy.xpath("//*[@id='userpanel']/div").click ();
        cy.xpath("//*[@id='hdr2']/div[2]/div/div[3]/a").click();

        //Assumtion you are exit from the system
        cy.xpath('//*[@id="wellcome"]/h2').should('have.text','kikotest');
        cy.get('#okmsg').should($el => expect($el.text().trim()).to.equal('Вие излязохте от акаунта си.'));
      })

      it('1.3. [N] Try: Wrong username and Wrong password', () => {
        require('cypress-xpath');
        
        // Visit the website
        cy.visit('https://inv.bg')

        // Button - Find SignIn button and click
        cy.xpath('//*[@id="inheader"]/a[2]').click()

        // Topbar - Type username -> enter
        cy.get('#login-subdomain').type('Kikotest');
        cy.xpath('//*[@id="gologin"]').click();

        // Wrong username and wrong password
        cy.get("#loginusername").type('23829389@gmail.com');
        cy.get('#loginpassword').type('21212@');
        cy.get('[data-callback="submitLoginForm"]').click()
        //Assertion for error message
        cy.get('#error').should($el => expect($el.text().trim()).to.equal('Грешно потребителско име или парола. Моля, опитайте отново.'));
      })

      it("1.4. [N] Try: Wrong username and Correct password", () => {
        // Visit the website
        cy.visit('https://inv.bg')

        // Button - Find SignIn button and click
        cy.xpath('//*[@id="inheader"]/a[2]').click()

        // Topbar - Type username -> enter
        cy.get('#login-subdomain').type('Kikotest');
        cy.xpath('//*[@id="gologin"]').click();

        // Wrong username and Correct password 
        cy.get("#loginusername").clear().type('k1111111e@gmail.com');
        cy.get('#loginpassword').clear().type('Kiko123@');
        cy.get('[data-callback="submitLoginForm"]').click();
        //Assertion for error message
        cy.get('#error').should($el => expect($el.text().trim()).to.equal('Грешно потребителско име или парола. Моля, опитайте отново.'));
      })

      it("1.5. [N] Try: Correct username and Wrong password", () => {
        // Visit the website
        cy.visit('https://inv.bg')

        // Button - Find SignIn button and click
        cy.xpath('//*[@id="inheader"]/a[2]').click()

        // Topbar - Type username -> enter
        cy.get('#login-subdomain').type('Kikotest');
        cy.xpath('//*[@id="gologin"]').click();

        // Correct username and Wrong password 
        cy.get("#loginusername").clear().type('kikotestsecure@gmail.com');
        cy.get('#loginpassword').clear().type('14241241@');
        cy.get('[data-callback="submitLoginForm"]').click()
        //Assertion for error message
        cy.get('#error').should($el => expect($el.text().trim()).to.equal('Грешно потребителско име или парола. Моля, опитайте отново.'));
      })

      it("1.6. [N] Try: Empty fields username and password", () => {
        // Visit the website
        cy.visit('https://inv.bg')

        // Button - Find SignIn button and click
        cy.xpath('//*[@id="inheader"]/a[2]').click()

        // Topbar - Type username -> enter
        cy.get('#login-subdomain').type('Kikotest');
        cy.xpath('//*[@id="gologin"]').click();

        // Click enter on Empty fields 
        cy.get("#loginusername").clear();
        cy.get('#loginpassword').clear();
        cy.get('[data-callback="submitLoginForm"]').click()
        //Assertion for error message
        cy.get('#error').should($el => expect($el.text().trim()).to.equal('Моля, попълнете вашия email'));
      })
      
      it("1.7. [N] Try: Empty field username and correct password", () => {
        // Visit the website
        cy.visit('https://inv.bg')

        // Button - Find SignIn button and click
        cy.xpath('//*[@id="inheader"]/a[2]').click()

        // Topbar - Type username -> enter
        cy.get('#login-subdomain').type('Kikotest');
        cy.xpath('//*[@id="gologin"]').click();

        // Empty username field and correct password
        cy.get("#loginusername").clear();
        cy.get('#loginpassword').type('Kiko123@');
        cy.get('[data-callback="submitLoginForm"]').click()
        //Assertion for error message
        cy.get('#error').should($el => expect($el.text().trim()).to.equal('Моля, попълнете вашия email'));
      })

      it("1.8. [N] Try: Correct username and  Empty field password", () => {
        // Visit the website
        cy.visit('https://inv.bg')

        // Button - Find SignIn button and click
        cy.xpath('//*[@id="inheader"]/a[2]').click()

        // Topbar - Type username -> enter
        cy.get('#login-subdomain').type('Kikotest');
        cy.xpath('//*[@id="gologin"]').click();

        // Correct username and Empty field password
        cy.get("#loginusername").type('Kikotestsecure@gmail.com');
        cy.get('#loginpassword').clear();
        cy.get('[data-callback="submitLoginForm"]').click()
        //Assertion for error message
        cy.get('#error').should($el => expect($el.text().trim()).to.equal('Моля, попълнете вашата парола'));
      })
  })