import ContactPage from "./pageObjects.js/ContactPage"
import HomePage from "./pageObjects.js/HomePage"

describe('ValidContactForm', function() {

    before(function()  {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        cy.visit("https://hub.xyz/")
    })

    

    it('ValidInput', function() {
        
      
        const contactPage = new ContactPage()
        const homePage = new HomePage()


        
        homePage.getContactButton()
        contactPage.getHeaderText()
        contactPage.getEmailTextField().type(this.data.validEmail)
        contactPage.getSubjectTextField().type(this.data.randomStringShort)
        contactPage.getMessageTextField().type(this.data.randomStringLong)
        contactPage.getSubmitButton()





    })
})
