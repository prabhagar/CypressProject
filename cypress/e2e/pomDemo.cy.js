import { LoginPage } from "./pages/login_page";

const loginPage = new LoginPage();

describe("LoginPage", () => {

it('Validate Login page', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    loginPage.enterUserName('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    
})

it('Validate dashboard', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    loginPage.enterUserName('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.contains('Dashboard')
    loginPage.enterInput('Das')
    loginPage.validateMenuItem('Dashboard')
    
})
});