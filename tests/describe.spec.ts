import { test, expect } from "@playwright/test";

test.describe('Verify functionality', async () => {


test('app launch', async ({page}) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/')
})

test('verify login', async ({page}) => {
await page.locator('[id="username"]').fill('student')
await page.locator('[id="password"]').fill('Password123')
await page.locator('[id="submit"]').click()
})



})