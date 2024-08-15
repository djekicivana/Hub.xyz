import HomePage from "./pageObjects.js/HomePage"

describe('EasyApplyForm', function() {

    before(function()  {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        cy.visit("https://hub.xyz/")
    })

    

    it('EasyApply', function() {
        
      
        const homePage = new HomePage()

        
        homePage.getTwitterHandleTextBox()
        


    })
})