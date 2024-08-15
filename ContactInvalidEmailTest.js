import ContactPage from "./pageObjects.js/ContactPage"
import HomePage from "./pageObjects.js/HomePage"

describe('InvalidEmailContactForm', function() {

    before(function()  {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        cy.visit("https://hub.xyz/")
    })

    

    it('InvalidEmail', function() {
        
      
        const contactPage = new ContactPage()
        const homePage = new HomePage()


        
        homePage.getContactButton()
        contactPage.getHeaderText()
        contactPage.getEmailTextField().type(this.data.invalidEmail)
        contactPage.getSubmitButton()
        contactPage.getEmptySubjectError()
        contactPage.getEmptyMessageError()
        contactPage.getInvalidEmailFormError()
        



    })
    })
