const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        //this.loginLink = "#login2"
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '//input[@data-test="login-button"]';
        this.ValidLoginValidation = '//div[@id="shopping_cart_container"]';
        this.InvalidLoginValidation = '//h3[@data-test="error"]';

    }

    /* async gotoLoginPage() {
        await this.page.goto('https://www.demoblaze.com/index.html');
    } */

    async login(username, password) {
        //await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();

/*         const verifyLogin = await this.page.locator(this.verifyValidLogin);
        await expect(verifyLogin).toHaveId('shopping_cart_container'); */
    }

    async verifyValidLogin() {
        const verifyLogin = await this.page.locator(this.ValidLoginValidation);
        await expect(verifyLogin).toHaveId('shopping_cart_container');
    }

    async verifyInvalidLogin() {
        const verifyInvalidLogin = await this.page.locator(this.InvalidLoginValidation);
        await expect(verifyInvalidLogin).toHaveText('Epic sadface: Username and password do not match any user in this service');
    }
}





