import ContactPage from "./pageObjects.js/ContactPage"
import HomePage from "./pageObjects.js/HomePage"

describe('EmptyContactForm', function() {

    before(function()  {
        cy.visit("https://hub.xyz/")
    })
    

    it('EmptyContactPage', function() {
        
      
        const contactPage = new ContactPage()
        const homePage = new HomePage()



        cy.visit("https://hub.xyz/")
        homePage.getContactButton()
        contactPage.getHeaderText()
        contactPage.getSubmitButton()
        contactPage.getEmptyEmailFieldError()
        contactPage.getEmptySubjectError()
        contactPage.getEmptyMessageError()



    })
    })
