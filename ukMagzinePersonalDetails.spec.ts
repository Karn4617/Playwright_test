import {test}from"@playwright/test"
import {personalDetails} from "./Pages/ukMagzinePDetails"

test('UK magzine Test',async({page})=>{

    const personalDet: personalDetails = new personalDetails(page);

    await page.goto('https://www.magupdate.co.uk/reader-enquiry/PATI/254');

    await test.step('Title input field should be editable and fill the title',async()=>{
        await personalDet.verifyTitleInputFieldShouldBeEditable();
        await personalDet.enterValueIntoTitleInputField('Mr');
    })

    await test.step('Select Value from contry dropdown',async()=>{
        await personalDet.selectValueFropContryCodeDropdown('Afghanistan')
    })

    await page.waitForTimeout(10000);

    await test.step('Enter Value into post code input field',async()=>{
        await personalDet.enterValueIntoPostCodeInputField('1234')
    })

     await page.waitForTimeout(10000);


})