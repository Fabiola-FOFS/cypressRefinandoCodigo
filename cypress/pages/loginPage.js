class loginPage {
selectorsList () {
    const selectors = {
        usernameField: "[name='username']", 
        passwordField: "[name='password']",
        loginButton: "[type='submit']",
        wrongcredentialAlert: '.oxd-alert-content',
    }

    return selectors
}
 accessLoginPage() {
    cy.visit('/auth/login')
 }

 loginWithtUser(username, password) {
    cy.get(this.selectorsList().usernameField).type(username)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().loginButton).click()
 }
 checkAccesInvalid() {
    cy.get(this.selectorsList().wrongcredentialAlert)
 }
}
export default loginPage