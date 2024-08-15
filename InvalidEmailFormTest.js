import EmailLoginPage from "./pageObjects.js/EmailLoginPage"
import HomePage from "./pageObjects.js/HomePage"
import Login from "./pageObjects.js/LoginPage"

describe('InvalidEmailLogin', function() {

    before(function()  {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        cy.visit("https://hub.xyz/")
    })

    

    it('Opens Webpage', function() {
        
      
        const loginPage = new Login()
        const emailLogin = new EmailLoginPage()
        const homePage = new HomePage()

        
        
    
        
         homePage.getLoginButton()
         loginPage.getEmailAndSocialMediaButton()
         emailLogin.getEmailTextField().type(this.data.invalidEmail)
         emailLogin.getSignInButton()

         cy.on('window:confirm', (str) =>
         {
            expect(str).to.equal('Please provide a valid email')
         })
         
        
    




    })
})