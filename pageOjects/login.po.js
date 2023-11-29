const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = '#username';
        this.passwordInput = '//input[@placeholder="Password"]';
        this.loginButton = '//button[@type="submit"]';
        this.ValidLoginValidation = '//img[@alt="logo"]';
        this.InvalidLoginValidation = '//div[@role="alert"]';
        this.userNameEmptyError = '//input[@placeholder="Username"]//following::div[1]';
        this.passwordEmptyError = '//input[@placeholder="Password"]//following::div[2]';
    }

    async login(username, password) {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }

    async verifyValidLogin() {
        const verifyLogin = await this.page.locator(this.ValidLoginValidation);
        await expect(verifyLogin).toBeVisible;
    }

    async verifyInvalidLogin() {
        const verifyInvalidLogin = await this.page.locator(this.InvalidLoginValidation);
        await expect(verifyInvalidLogin).toHaveText('Invalid username or password');
    }

    async verifyInvalidUsername() {
        const verifyInvalidLogin = await this.page.locator(this.InvalidLoginValidation);
        await expect(verifyInvalidLogin).toHaveText('User not found');
    }

    async verifyUsernameEmptyFields() {
        const verifyEmptyUsername = await this.page.locator(this.userNameEmptyError);
        await expect(verifyEmptyUsername).toHaveText('Value is required');
    }

    async verifyPasswordEmptyFields() {
        const verifyEmptyPassword = await this.page.locator(this.passwordEmptyError);
        await expect(verifyEmptyPassword).toHaveText('Value is required');
    }

    async verifyUserBlocked() {
        const verifyInvalidLogin = await this.page.locator(this.InvalidLoginValidation);
        await expect(verifyInvalidLogin).toHaveText('User blocked');
    }
}





