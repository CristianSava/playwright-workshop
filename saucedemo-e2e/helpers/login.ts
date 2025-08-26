import { Page } from '@playwright/test';

export async function login(page: Page, email: string, password: string) {
  await page.goto('https://saucedemo.com');
  await page.locator('#user-name').fill(email);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();
  await page.waitForURL('**/inventory.html');   // wait until login completes
}