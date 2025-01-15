import userData from '../fixtures/userData.json'
import dashboardPage from '../pages/dashboardPage.js'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()
const DashboardPage = new dashboardPage()

describe('Login Orange HRM teste automatizado', () => {
  
  it('login - fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithtUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccesInvalid()

})
it('login Success',() =>
{ loginPage.accessLoginPage()
  loginPage.loginWithtUser(userData.userSuccess.username, userData.userSuccess.password)
  DashboardPage.checkDashboardPage()
})
})
