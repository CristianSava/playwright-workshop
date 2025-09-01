import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

  const userName : string = 'standard_user';
  const password : string = 'secret_sauce';
  const randomString : string = 'asd123';
  const baseURL : string = 'https://saucedemo.com';

test.beforeEach('login', async ({ page }) => {
  await login(page, userName, password);
});

test('happy path: login, add to cart, checkout', async ({ page }) => {
  // Assert we landed on inventory
  await expect(page.getByText('Products')).toBeVisible();

  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  await page.getByTestId('shopping-cart-link').click();
  await page.getByTestId('checkout').click();
  await page.getByTestId('firstName').fill('Cristian');
  await page.getByTestId('lastName').fill('Sava');
  await page.getByTestId('postalCode').fill('12345');

  await page.getByTestId('continue').click();

  await expect(page.getByText('Checkout: Overview')).toBeVisible();

  await page.getByTestId('finish').click();

  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});

test('assert visibility of text', async ({ page }) => {
  await page.getByTestId('shopping-cart-link').click();
  await expect(page.getByTestId('title')).toHaveText('Your Cart');
});

test('verify validations for login fields', async ({ page }) => {
  await page.goto(baseURL);
  await page.locator('#user-name').fill(randomString);
  await page.locator('#password').fill(randomString);
  await page.locator('#login-button').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});