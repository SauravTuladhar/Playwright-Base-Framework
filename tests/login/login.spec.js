import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pageOjects/login.po';
const testData = require('../../fixtures/loginFixture.json');


test.beforeEach(async ({ page }) => {
    await page.goto('/');
})

test('Valid login test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.validUser.userName, testData.validUser.password);
    await login.verifyValidLogin();
})

test('Invalid Password login test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.validUser.userName, testData.invalidUser.password);
    await login.verifyInvalidLogin();
})

test('Invalid Username login test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidUser.userName, testData.validUser.password);
    await login.verifyInvalidUsername();
})

test('Invalid Username and Password login test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidUser.userName, testData.invalidUser.password);
    await login.verifyInvalidUsername();
})

test('Empty Username and Password login test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login("", "");
    await login.verifyUsernameEmptyFields();
    await login.verifyPasswordEmptyFields();
})

test('Empty Username login test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login("", testData.validUser.password);
    await login.verifyUsernameEmptyFields();
})

test('Empty Password login test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.validUser.userName, "");
    await login.verifyPasswordEmptyFields();
})

test.skip('User blocked login test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login('boadmin@admin.com', 'VT!@dmin123');
    await login.verifyUserBlocked();
})