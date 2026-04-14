import { test, expect } from '@playwright/test'

test('js prompt alerts', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Alert')
        await alert.accept();

    })
    await page.locator(`//button[@onclick="jsAlert()"]`).click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')

})

test('js confirm, OK and CANCEL button', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Confirm')
        await alert.accept();
        //await alert.dismiss();

    })
    await page.locator(`//button[@onclick="jsConfirm()"]`).click();
    await expect(page.locator('#result')).toHaveText('You clicked: Ok')

})

test('js prompt', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS prompt')
        await alert.accept('Hi accept me');
        
    })
    await page.locator(`//button[@onclick="jsPrompt()"]`).click();
    await expect(page.locator('#result')).toHaveText('You entered: Hi accept me')

})
test.only('js prompt dynamic value', async ({ page }) => {
    const popupInput= 'Hi accept me'
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS prompt')
        await alert.accept(popupInput);
        
    })
    await page.locator(`//button[@onclick="jsPrompt()"]`).click();
    await expect(page.locator('#result')).toHaveText(`You entered: ${popupInput}`)

})