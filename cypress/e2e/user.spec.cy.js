import userData from '../fixtures/userData.json'
describe('Orange HRM teste automatizado', () => {
 
  const selectorsList = {
    usernameField: "[name='username']", 
    passwordField: "[name='password']", 
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid:'.orangehrm-dashboard-grid',
    wrongcredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firtsNameField: "[name=firstName]",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    genericDateinput: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: '.--close',
    submitButton:"[type='submit']",
  }

  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firtsNameField).clear().type("teste")
    cy.get(selectorsList.lastNameField).clear().type('lastNametest')
    cy.get(selectorsList.genericField).eq(3).clear().type('idTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('otIDtest')
    cy.get(selectorsList.genericField).eq(5).clear().type('58779')
    //cy.get(selectorsList.genericField).eq(6).clear().type('drivertest')
    //cy.get(selectorsList.genericField).eq(8).clear().type('ssnumber')
    cy.get(selectorsList.genericField).eq(7).clear().type('sinnumber')
   
    cy.get(selectorsList.genericDateinput).eq(0).clear().type('2024-20-12')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericDateinput).eq(1).clear().type('1995-12-06')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated') //contem na pagina

  })
  it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongcredentialAlert)
})
})

// importante abstrair o codigo para tornar o codigo blindado e reutilizável 