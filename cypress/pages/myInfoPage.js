class myInfoPage { 
    selectorsList() {
    const selectors = {
    firtsNameField: "[name=firstName]",
    middleNameField: ".orangehrm-middlename",
    lastNameField: "[name='lastName']",
    //nickName: "",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    genericCombobox: ".oxd-select-text--arrow",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)", 
    dateCloseButton: '.--close',
    submitButton: ".orangehrm-left-space",
    //gender: "cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label')",

    } 
    return selectors    
 }  
      fillPersonalDetails(firstName, middleName, lastName) {
    cy.get(this.selectorsList().firtsNameField).clear().type(firstName)
    cy.get(this.selectorsList().middleNameField).clear().type(middleName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    //cy.get(this.selectorsList().)
 }
     fillEmployeeDetails(employeeid, otherId, driversLicencense, licenseExpiryDate, /*ssnNumber, sinNumber*/) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeid)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicencense)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click({force: true})
        //cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber)
        //cy.get(this.selectorsList().genericField).eq(9).clear().type(sinNumber)    
     } 
       fillStatussDetails() {
        
    cy.get(this.selectorsList().genericCombobox).eq(0).click()
    cy.get(this.selectorsList().secondItemCombobox).click()
    cy.get(this.selectorsList().genericCombobox).eq(1).click()
    cy.get(this.selectorsList().thirdItemCombobox).click()
    //cy.get(this.selectorsList().gender).click()

      }
     saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
     }
    }


export default myInfoPage