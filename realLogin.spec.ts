import { test,Page,Browser } from "@playwright/test";
import { chromium,firefox,webkit } from "@playwright/test";

test('real login test',async()=>{

    const browser:Browser = await chromium.launch({headless: false});
    const page:Page = await browser.newPage();

await page.goto('https://bolt.therealbrokerage.com/login');
await page.getByTestId('usernameOrEmail').click();
await page.getByTestId('usernameOrEmail').fill('hiraLungare');
await page.getByTestId('password').click();
await page.getByTestId('password').fill('hiraLungare@1234');
await page.getByRole('button', { name: 'Login' }).click();
})
