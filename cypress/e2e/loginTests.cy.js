describe('Login Tests', () => {

      it('1.2.[P] Perform LogIn and LogOut', () => {
        require('cypress-xpath');

        // Visit the website
        cy.visit('https://inv.bg');

        // Button - Find SignIn button and click
        cy.xpath('//*[@id="inheader"]/a[2]').click();

        // Topbar - Type username -> enter
        cy.get('#login-subdomain').type('Kikotest');
        cy.xpath('//*[@id="gologin"]').click();

        // Populate the Email and Passoword -> enter 
        cy.get("#loginusername").type('kikotestsecure@gmail.com');
        cy.get('#loginpassword').type('Kiko123@');
        cy.get('[data-callback="submitLoginForm"]').click();

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
      });
      
  })