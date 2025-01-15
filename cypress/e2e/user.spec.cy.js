import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage  from '../pages/dashboardPage.js'
import menuPage from '../pages/menuPage.js'   
import myInfoPage from '../pages/myInfoPage.js'


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
    
    MyInfoPage.fillPersonalDetails('first name', 'middle name', 'last name')
    MyInfoPage.fillEmployeeDetails('123456', '789456', '147852', '2025-07-09','123656', '147852')
    MyInfoPage.fillStatussDetails()
    MyInfoPage.saveForm()
  })

})
