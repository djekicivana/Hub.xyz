class ContactPage {


getSubmitButton()

{
   return cy.get('.MuiButtonBase-root').click()
}

getEmptyEmailFieldError()

{
    return cy.get(':nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root').should('contain.text', 'This field is required')
}

getInvalidEmailFormError() 

{
    return cy.get(':nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root').should('contain.text', 'Please provide a valid email')
 
}

getEmptySubjectError()
{
    return cy.get(':nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root').should('contain.text', 'This field is required')

}

getEmptyMessageError()
{
    return cy.get(':nth-child(3) > .MuiFormControl-root > .MuiFormHelperText-root').should('contain.text', 'This field is required')

}

getEmailTextField()
{
    return cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root')
}

getSubjectTextField()
{
    return cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root')
}

getMessageTextField()
{
    return cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root')
}

getHeaderText()
{
    return cy.get('.MuiTypography-root').should('contain.text','Get in touch with us')
}





}
export default ContactPage;








