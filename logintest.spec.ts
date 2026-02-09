import { test, Browser, expect, Page, Locator, BrowserContext} from "@playwright/test";
import { chromium, webkit, firefox } from "@playwright/test";

test.describe('Naveen automation lab',async()=>{
    test('1.login test',async()=>{
    const browser: Browser = await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

    const emailId: Locator = await page.locator('#input-email');
    const password : Locator = await page.locator('#input-password');
    const loginButton: Locator = await page.locator("input[value='Login']");

    await emailId.fill('Karnmuley5757@gmail.com');
    await password.fill('Pass@1234');
    await loginButton.click();

    const title = await page.title();
    console.log('Home page title is', title);

    await page.screenshot({path: 'homePage.png'});
    expect(title).toEqual('My Account');
});

test('2. Naveen Automation lab registration',async()=>{
    const browser: Browser = await chromium.launch({headless:false});
    const page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

    const continueButton1: Locator = await page.getByRole('link', { name: 'Continue' }); 
    const firstName: Locator =await page.locator('#input-firstname');
    const lastName: Locator = await page.locator('#input-lastname');
    const emailId: Locator = await page.locator('#input-email');
    const telephone: Locator = await page.locator('#input-telephone');
    const password: Locator = await page.locator('#input-password');
    const confirmPassword: Locator = await page.locator('#input-confirm');
    const privacyCheckbox = page.locator('input[type="checkbox"][name="agree"]');
    const continueButton2: Locator = await page.locator('input[type="submit"][value="Continue"]'); 



    await continueButton1.click();
    await firstName.fill('Dhiraj');
    await lastName.fill('Kadam');
    await emailId.fill('dhirajKadam123@gmail.com');
    await password.fill('Pass@1234');
    await telephone.fill('7387115757');
    await confirmPassword.fill('Pass@1234');
    await privacyCheckbox.check();
    await continueButton2.click();
});
test('3.Browser context',async()=>{
    const browser:Browser = await chromium.launch({headless:false});

    // BrowserContext1
    const BrowserContext1: BrowserContext = await browser.newContext();
    const page1 : Page = await BrowserContext1.newPage();

    
    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    
    const emailId1: Locator = await page1.locator('#input-email');
    const password1: Locator = await page1.locator('#input-password');
    const loginButton1 : Locator = await page1.locator("input[value='Login']");
    
    await emailId1.fill('Karnmuley5757@gmail.com');
    await password1.fill('Pass@1234');
    await loginButton1.click();

     // BrowserContext2
    const BrowserContext2 : BrowserContext = await browser.newContext();
    const page2 : Page = await BrowserContext2.newPage();

      
    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    
    const emailId2: Locator = await page2.locator('#input-email');
    const password2: Locator = await page2.locator('#input-password');
    const loginButton2 : Locator = await page2.locator(
        "input[value='Login']");
    
    await emailId2.fill('dhirajKadam123@gmail.com');
    await password2.fill('Pass@1234');
    await loginButton2.click();

    await new Promise(()=>{}); //Prevent your test
})
});
