import { test, expect } from "@playwright/test";

//Verify the static dropdown
test('Static dropdown', async ({page}) => {

await page.goto('https://demo.automationtesting.in/Register.html')
await page.locator('[id="Skills"]').selectOption({value: "Analytics"})
await page.selectOption('[id="Skills"]', {label: 'Android'})
await page.selectOption('[id="Skills"]', {index: 2})

await page.locator('[role="combobox"]').click()
await page.locator('[type="search"]').fill('Bangladesh')
await page.keyboard.press('Enter')


})