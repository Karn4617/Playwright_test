import {test,expect} from "@playwright/test"
import {HomePage}from "./Pages/homePage"

test('Playwright POM test',async({page})=>{
    
    const homePage:HomePage = new HomePage(page);

    await page.goto('https://playwright.dev/')

    await test.step('1.click on get started button',async()=>{
        await homePage.clickGetStarted();
    })

     await expect(page).toHaveURL(/docs/);

    

    await test.step('2.Verify if playwright heading is visible or not',async()=>{
        await homePage.verifyPlaywrightHeadingShouldBeVisible();
    })

    await test.step('3.Verify if getting started link should be visible',async()=>{
        await homePage.verifyGettingStartedLinkShouldBeVisible();
    })

    
})