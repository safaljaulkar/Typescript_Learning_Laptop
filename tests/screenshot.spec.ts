import { test, expect } from "@playwright/test";
test('to have screenshot', async ({ page }) => {

   await page.goto('https://www.saucedemo.com/')
      await expect(page).toHaveScreenshot()
   
    await expect(page).not.toHaveScreenshot()
})