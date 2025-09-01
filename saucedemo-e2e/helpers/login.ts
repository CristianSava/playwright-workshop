import test, { Page } from '@playwright/test';
import { testIds } from '../selectors/selectors';

export async function login(page: Page, email: string, password: string) {
  await page.goto('https://saucedemo.com');
  await page.locator(testIds.usernameInput).fill(email);
  await page.locator(testIds.passwordInput).fill(password);
  await page.locator(testIds.loginButton).click();
  await page.waitForURL('**/inventory.html');   // wait until login completes
}