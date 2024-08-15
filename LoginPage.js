class Login {

getEmailAndSocialMediaButton() {

    return cy.get('.css-1cknukc').click()
}

getMetaMaskButton()
{
    return cy.get('.css-mjbegz > :nth-child(2)').click()
}

getCoinBaseButton()
{
    return cy.get('.css-mjbegz > :nth-child(3)').click()
}

getWalletConnectButton()
{
    return cy.get('.css-mjbegz > :nth-child(4)').click()
}

getSolanaButton()
{
    return cy.get('.css-mjbegz > :nth-child(3)').click()
}

getTextDescription()
{
    return cy.get('.MuiTypography-root').should ('contain.text' , 'Connect')
}

}
export default Login;