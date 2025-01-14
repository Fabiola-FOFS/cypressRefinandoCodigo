class dashboardPage {
    selectorsList () {
        const selectors = {
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid:'.orangehrm-dashboard-grid',
        }
        return selectors
    }
       checkDashboardPage() {
       cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
       cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }
}
export default dashboardPage