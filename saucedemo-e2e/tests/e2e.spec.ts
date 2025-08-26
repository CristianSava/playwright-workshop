import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

  const userName : string = 'standard_user';
  const password : string = 'secret_sauce';
  const randomString : string = 'asd123';

test('happy path: login, add to cart, checkout', async ({ page }) => {
  // Login
  await login(page, userName, password);

  // Assert we landed on inventory
  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByText('Products')).toBeVisible();
});

test('assert visibility of text', async ({ page }) => {
  // Login
  await login(page, userName, password);

  await page.getByTestId('shopping-cart-link').click();
  await expect(page.getByTestId('title')).toHaveText('Your Cart');
});

test('verify validations for login fields', async ({ page }) => {
  await page.goto('https://saucedemo.com');
  await page.locator('#user-name').fill(randomString);
  await page.locator('#password').fill(randomString);
  await page.locator('#login-button').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});