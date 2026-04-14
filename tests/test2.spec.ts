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

test.only('verify delete count', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')
    await expect(page.locator('//button[@class="added-manually"]')).toHaveCount(0)
    await page.locator("//button[text()='Add Element']").click()    //parent
    await expect(page.locator('//button[@class="added-manually"]')).toHaveCount(1)

})

test.only('verify delete count use conditions', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')
    const addElement = page.locator(`//button[text()='Add Element']`)
    const deleteButton = page.locator('//button[@class="added-manually"]')
    let count = await deleteButton.count()   //check delete button count 

    for (let i = 0; i < 4; i++) {
        if (count < 4) {
            await addElement.click();
            count = await deleteButton.count()   //re-assign count 
            console.log(`After click on ${i} count the delete button count is ${count}`) 
            // await expect (deleteButton).toHaveCount(count)
        } else {
            console.log('completed for 4 delete button');
            break;
        }
    }
})

/*
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("found 3 breaking loop");
        break;
    }
    console.log(`current number:` + i)

}
console.log("Exit from 1st loop")

*/