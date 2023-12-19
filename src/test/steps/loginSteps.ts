import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

setDefaultTimeout(60 * 1000 * 2);

Given('User navigates to the application', async function () {
  await pageFixture.page.goto('https://web-v2.sandbox.gotoblink.com/auth/login');
});

Given('User click on the login link', async function () {
  await pageFixture.page.locator('//span[text()="Login"]').click();
  // await pageFixture.page.locator('.mat-focus-indicator.mat-button.mat-button-base.ng-star-inserted').click();
});

Given('User enter the username as {string}', async function (username) {
  await pageFixture.page
    .locator('input[formcontrolname="email"]')
    .type(username);
});

Given('User enter the password as {string}', async function (password) {
  await pageFixture.page
    .locator('input[formcontrolname="password"]')
    .type(password);
});

When('User click on the login button', async function () {
  await pageFixture.page.locator('.btn-submit').click();
  // await pageFixture.page.locator('.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary').click();
  await pageFixture.page.waitForLoadState();
  await pageFixture.page.waitForTimeout(2000);
});

Then('Login should be success as {string}', async function (username) {
  const textMessage = await pageFixture.page
    .locator('.user-block')
    .locator('.text')
    //.textContent()
    await expect(textMessage).toHaveText(username);
});

When('Login should fail', async function () {
  const errorMessage = pageFixture.page.locator('mat-error');
  await expect(errorMessage).toBeVisible();
  //Invalid email or password.
});
