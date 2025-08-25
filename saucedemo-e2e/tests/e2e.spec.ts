import { test, expect } from '@playwright/test';

test('happy path: login, add to cart, checkout', async ({ page }) => {
  // Login
  const userName : string = 'standard_user';
  const password : string = 'secret_sauce';

  await page.goto('/');
  await page.locator('#user-name').fill(userName);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();

    // Assert we landed on inventory
  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByText('Products')).toBeVisible();
});

test('verify validations for login fields', async ({ page }) => {

    const randomString : string = 'abcdefg';

    await page.goto('/');
    await page.locator('#user-name').fill(randomString);
    await page.locator('#password').fill(randomString);
    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
});

