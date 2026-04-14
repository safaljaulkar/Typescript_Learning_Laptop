import { test, expect } from "@playwright/test";

test('to be visible/to be hidden', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('//input[@id="user-name"]').fill('standard_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page.locator(`//div[text()='Swag Labs']`)).toBeVisible()
    await expect(page.locator("//span[text()='Products']")).toHaveText('Products')
    await expect(page.locator("//span[text()='Products']")).not.toHaveText('Produ')
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

})

test('verify delete count', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')
    await expect(page.locator('//button[@class="added-manually"]')).toHaveCount(0)
    await page.locator("//button[text()='Add Element']").click()    //parent
    await expect(page.locator('//button[@class="added-manually"]')).toHaveCount(1)

})

test('verify delete count use conditions', async ({ page }) => {
    await page.goto('https://the-internet.herokuapps.com/add_remove_elements/')
    await expect(page).toHaveScreenshot()
    
})

test.only('Locators', async ({page}) =>{

 await page.goto('https://www.saucedemo.com/')

await expect (page.locator(`//div[contains(text(),'Swag Labs')]`)).toBeVisible()   //contains text
await expect(page.locator(`//div[contains(@class, 'login_logo')]`)).toContainText('Swag Labs')   //contains class
await page.locator(`//input[starts-with(@id,"user-name")]`).fill('standard_user')   //starts-with()

await page.locator(`//input[@type="password" and @name="password"]`).fill('secret_sauce')   //and operator
await page.locator(`//input[@type="password" and @name="password"]/parent::div`).fill('secret_sauce')  //parent
await page.locator(`//div[@class="form_group"]/child::input[@id="password"]`).fill('secret_sauce')   //child
 //label[text() = 'ReminderMe']/following::sibling::input   //following::sibling
 //button[@id='submit-button']/preceding-sibling::input[1]   //preceding-sibling

 

})