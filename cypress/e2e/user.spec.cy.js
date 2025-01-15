import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage  from '../pages/dashboardPage.js'
import menuPage from '../pages/menuPage.js'   
import myInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const MenuPage = new menuPage()
const MyInfoPage = new myInfoPage()


describe('Orange HRM teste automatizado', () => {
 

     const selectorsList = {
    
    
  }

  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithtUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

    MenuPage.accessMyInfo()

    MyInfoPage.fillPersonalDetails(chance.first(), chance.string(), chance.last())
    MyInfoPage.fillEmployeeDetails(chance.integer({ min: 6, max: 6 }), chance.natural({ min: 6, max: 6 }), chance.natural({ min: 0, max: 6 }), chance.date({string: true}),'123656', '147852')
    MyInfoPage.fillStatussDetails()
    MyInfoPage.saveForm()
  })

})
