import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pageOjects/login';

test('Valid login test', async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('/');
    //await login.gotoLoginPage();
    await login.login('standard_user', 'secret_sauce');
    await login.verifyValidLogin();
})

test('Invalid username login test', async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('/');
    //await login.gotoLoginPage();
    await login.login('tasdasdsdest', 'testpass');
    await login.verifyInvalidLogin();
})