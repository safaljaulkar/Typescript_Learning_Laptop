import { test, expect } from "@playwright/test";
test.only('Verify Login with standard_user user', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('//input[@id="user-name"]').fill('standard_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page.locator(`//div[text()='Swag Labs']`)).toBeVisible()
    console.log('User login with "standard_user"')

})
test.only('Verify Login with locked_out_user user', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('//input[@id="user-name"]').fill('locked_out_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page.locator(`//h3[@data-test="error"]`)).toContainText('Epic sadface: Sorry, this user has been locked out.')
   console.log('User login with "locked_out_user"')

})
test('Verify Login with problem_user user', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('//input[@id="user-name"]').fill('problem_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page.locator(`//div[text()='Swag Labs']`)).toBeVisible()
console.log('User login with "problem_user"')
})
test('Verify Login with performance_glitch_user user', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('//input[@id="user-name"]').fill('performance_glitch_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page.locator(`//div[text()='Swag Labs']`)).toBeVisible()


    console.log(typeof null)
console.log('User login with "performance_glitch_user"')
})
test('Verify Login with error_user user', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('//input[@id="user-name"]').fill('error_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page.locator(`//div[text()='Swag Labs']`)).toBeVisible()
console.log('User login with error_user')
})
test('Verify Login with visual_user user', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('//input[@id="user-name"]').fill('visual_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page.locator(`//div[text()='Swag Labs']`)).toBeVisible()
console.log('User login with "visual_user"')
})

