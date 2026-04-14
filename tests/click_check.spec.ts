import {test,expect} from "@playwright/test";


test.only('Verify checkbox',async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');
await expect(page.locator('#sunday')).not.toBeChecked();
await expect(page.locator('#monday')).not.toBeChecked();
await expect(page.locator('#tuesday')).not.toBeChecked();
await page.locator('#sunday').check();
await expect(page.locator('#sunday')).toBeChecked();
await expect(page.locator('#monday')).not.toBeChecked();
await expect(page.locator('#tuesday')).not.toBeChecked();
})

test.only('Verify click',async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');
await expect(page.locator('#sunday')).not.toBeChecked();
await expect(page.locator('#monday')).not.toBeChecked();
await expect(page.locator('#tuesday')).not.toBeChecked();
await page.locator('#sunday').click();
await expect(page.locator('#sunday')).toBeChecked();
await expect(await page.locator('#sunday').isChecked()).toBeTruthy()
await expect(await page.locator('#sunday').isChecked()).toBe(true)
})

test('Verify radio button',async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html')
await expect(page.locator('[value="Male"]')).not.toBeChecked()
await expect(page.locator('[value="FeMale"]')).not.toBeChecked()
await page.locator('[value="Male"]').check();
await page.locator('[value="FeMale"]').check()
await page.locator('[value="Male"]').check();
await expect(page.locator('[value="Male"]')).toBeChecked()
await expect(page.locator('[value="FeMale"]')).not.toBeChecked()
await expect(await page.locator('[value="Male"]').isChecked()).toBeTruthy()
await expect(await page.locator('[value="FeMale"]').isChecked()).toBeFalsy()


})