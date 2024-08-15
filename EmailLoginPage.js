class EmailLoginPage
{


getEmailTextField()
{
   return cy.get('.MuiInputBase-input.MuiFilledInput-input.css-19wbqv5')
}

getPageDescription()
{
    return cy.get('.MuiTypography-root').should('contain.text', 'Login with your email')
}

getSignInButton()
{
   return cy.get('.magicEmailForm > .MuiButtonBase-root').click()
}

getErrorMessage()
{
   return cy.get('.body:nth-child(2) div.mg_bw mg_by > div.fontCentered').should('contain.text', 'Try Again!')
}



getGoBackButton()
{
   return cy.get('.css-70qvj9 > .MuiButtonBase-root').click()
}

}

export default EmailLoginPage;