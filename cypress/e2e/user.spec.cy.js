import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage  from '../pages/dashboardPage.js'
import menuPage from '../pages/menuPage.js'   
import myInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const MenuPage = new menuPage()
const MyInfoPage = new myInfoPage()


describe('Orange HRM teste automatizado', () => {
 

  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithtUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

    MenuPage.accessMyInfo()

    MyInfoPage.fillPersonalDetails(chance.first(), chance.string(), chance.last())
    MyInfoPage.fillEmployeeDetails('123654', '829638', '582147', '2024-06-02','123656', '147852')
    MyInfoPage.fillStatussDetails()
    MyInfoPage.saveForm()
  })

})
