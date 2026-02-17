import { test,expect} from "@playwright/test";
import {CreateAccount} from "./Pages/createRealAccount";


test('Create Real Account',async({page})=>{

    const createAccount:CreateAccount = new CreateAccount(page);
     await page.goto('https://bolt.playrealbrokerage.com/login');
    await createAccount.clickJoinReal();

    await test.step('Verify first name input field should be editable and fill the value',async()=>{
        await createAccount.verifyFirstNameInputFieldShouldBeEditable();
        await createAccount.enterValueIntoFirstNameInputField('Playwright');
    });

    await test.step('Verify last name input field should be editable and fill the value',async()=>{
        await createAccount.verifyLastNameInputFieldShouldBeEditable();
        await createAccount.enterValueIntoLastNameInputField('Test');

    })

    await test.step('Verify user name input field should be editable and fill the value',async()=>{
        await createAccount.verifyUserNameInputFieldShouldBeEditable();
        await createAccount.enterValueIntoUserNameInputField('PLuser');
        
    })

   await  test.step('Verify email id input field should be editable and fill the value',async()=>{
        await createAccount.verifyEmailIdInputFieldShouldBeEditable();
        await createAccount.enterValueIntoEmailIdInputField('Playwright123@gmail.com');
        
    })

    await test.step('Verify password input field should be editable and fill the value',async()=>{
        await createAccount.verifyPasswordInputFieldShouldBeEditable();
        await createAccount.enterValueIntoPasswordInputField('playwright@123');
        
    })

    await test.step('Verify confirm  input field should be editable and fill the value',async()=>{
        await createAccount.verifyConfirmPasswordInputFieldShouldBeEditable();
        await createAccount.enterValueIntoConfirmPasswordInputField('playwright@123');
        
    })

    await test.step('Check the consent checkbox',async()=>{
        await createAccount.checkConsentCheckBoxOne();
        await createAccount.checkConsentCheckBoxTwo();
    })

    await test.step ('check if create account button is enabled and click it',async()=>{
        await createAccount.createAccountButtonShouldBeEnabled();
        await createAccount.clickCreateAccountButton();
    })

});