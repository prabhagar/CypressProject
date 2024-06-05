export class LoginPage {

    username = 'input[name="username"]'
    password = 'input[name="password"]'
    loginButton = '.oxd-button'
    input = '.oxd-input'
    menuItems = '.oxd-main-menu-item'

    enterUserName(userName) {
        cy.get(this.username).type(userName);
    }

    enterPassword(password) {
        cy.get(this.password).type(password);
    }

    clickLogin() {
        cy.get(this.loginButton).click();
    }

    enterInput(inputText) {
        cy.get(this.input).type(inputText)
    }

    validateMenuItem(menuItem) {
        cy.get(this.menuItems).contains(menuItem)
    }

    
    
}