import userData from '../fixtures/userData.json'
describe('Orange HRM teste automatizado', () => {
 
  const selectorsList = {
    usernameField: "[name='username']", 
    passwordField: "[name='password']", 
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid:'.orangehrm-dashboard-grid',
    wrongcredentialAlert: "[role='alert']",
  }

  it('login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
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