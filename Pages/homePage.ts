import { Page, Locator, expect } from "@playwright/test";

export class HomePage {

  //Locator
  readonly page: Page;
  readonly installationHeading: Locator;
  readonly startedButton: Locator;
  readonly gettingStartedLink: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
    this.startedButton = page.locator('.getStarted_Sjon');
    this.gettingStartedLink = page.getByRole('button',{ name: 'Getting Started',exact:true});
  }

  //getter method
  async getInstallationHeading(){
    return this.installationHeading;
  }

  async getStatedButton(){
    return this.startedButton;
  }

  async getGettingStartedLink(){
    return this.gettingStartedLink;
  }

  //Action Method
  async verifyPlaywrightHeadingShouldBeVisible() {
    await expect(await this.getInstallationHeading()).toBeVisible();
  }

  async clickGetStarted() {
    await (await this.getStatedButton()).click();
  }

  async verifyGettingStartedLinkShouldBeVisible(){
    await expect(await this.getGettingStartedLink()).toBeVisible();
  }

}
