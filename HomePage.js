class HomePage
{

getFeaturesButton()
{
    return cy.get('.nav-menu > [href="/#digitalExperience"]').click()
}

getContactButton()
{
    return cy.get('.nav-menu > [href="/about/contact"]').click()
}

getLoginButton()
{
return cy.get('.text-dark > .landing-btn').click()
}

getHeaderText()
{
return cy.get('.header > :nth-child(2) > .subtitle1').should('contain.text' , 'Trusted by 1400+ projects and creators totaling 35M+ followers')
}

getTwitterHandleTextBox()
{
    return cy.get('.css-xtx530 > .apply-container > .form > .input-container > :nth-child(1) > .MuiInputBase-root').type('twitter')
}

getEmailTextBox()
{
    return cy.get('.css-xtx530 > .apply-container > .form > .input-container > :nth-child(2) > .MuiInputBase-root').type('mail')
}


getWalletTextBox()
{
    return cy.get('.css-xtx530 > .apply-container > .form > .input-container > :nth-child(3) > .MuiInputBase-root').type('123456789')
}

getApplyButton()
{
    return cy.get('.css-xtx530 > .apply-container > .form > .submit-btn-wrapper > .landing-btn').click()
}

getAppButton()
{
    return cy.get(':nth-child(1) > ul > :nth-child(1) > .text-decoration-none').click()
}

getContactButton()
{
    return cy.get(':nth-child(1) > ul > :nth-child(2) > .text-decoration-none').click()
}

getTwitterButton()
{
    return cy.get('.links-grid > :nth-child(1) > ul > :nth-child(3) > a').click()
}

getSecurityButton()
{
    return cy.get(':nth-child(2) > ul > :nth-child(1) > .text-decoration-none').click()
}

getPrivacyPolicyButton()

{
    return cy.get(':nth-child(2) > ul > :nth-child(2) > .text-decoration-none').click()
}

getCookiePolicyButton()

{
    return cy.get(':nth-child(3) > .text-decoration-none').click()
}

getTermsOfUseButton()
{
    return cy.get(':nth-child(4) > .text-decoration-none').click()
}

getEmailErrorMessage()
{
    return cy.get('#\:r9\:-helper-text').should( 'contain.text', 'This field is required')
}

}
export default HomePage