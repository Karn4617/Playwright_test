import { test, Browser, Page,BrowserContext} from "@playwright/test";
import { chromium,webkit,firefox } from "@playwright/test";

test.describe('Auth-popup login method',async()=>{
test('1.Auth-popup',async()=>{

   const  browser: Browser = await chromium.launch({headless: false});
   
   const browserContext: BrowserContext = await browser.newContext();
   const page: Page = await browserContext.newPage();

  await  page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');

  const title = await page.title();
  console.log('My auth title is', title)


//    await new Promise(()=>{})

});

test('2.Auth-popup using username&password',async()=>{
    const browser: Browser = await chromium.launch({headless: false});
    const browserContext:BrowserContext = await browser.newContext();
    const page: Page= await browserContext.newPage();

    const username = 'admin';
    const password = 'admin';
    // const authHeader=  'Basic '+ btoa(username+':'+password); 
    page.setExtraHTTPHeaders({Authorization : setAuthHeader(username,password)})

    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    const title = await page.title();
    console.log('Title of my site',+ title);
});
});

function setAuthHeader(username: any, password: any ){
    return 'Basic '+ btoa(username+':'+password); 
}
