import { Page, Locator, expect} from "@playwright/test"

export class personalDetails {

    // Locator

    readonly page:Page;
    readonly title: Locator;
    readonly initials: Locator;
    readonly forename: Locator;
    readonly surname: Locator;
    readonly emailId: Locator;
    readonly contryCodeDropdown: Locator;
    readonly postCodeInputField: Locator;

    //Constructor

    constructor (page:Page){
        this.page = page;
        this.title = page.getByPlaceholder('Title').first();
        this.initials = page.locator('#Contact_Initials');
        this.forename = page.locator('#Contact_Forename');
        this.surname = page.locator('#surname');
        this.emailId = page.locator('#Contact_DirectEmail');
        this.contryCodeDropdown = page.locator('#Contact_CountryCode');
        this.postCodeInputField = page.locator('#Contact_PostCode');
    }

    //Getter Method

    async getTitleInputField(){
        return this.title;
    }

    async getInitialsInputFields(){
        return this.initials;
    }

    async getForenameInputFields(){
        return this.forename;
    }

    async getSurnameInputFields(){
        return this.surname;
    }

    async getEmailIdInputField(){
        return this.emailId;
    }

    async getContryCodeDropdown(){
        return this.contryCodeDropdown;
    }

    async getDropDownOption(value:string){
        return this.page.getByRole('option',{name: value});
    }

    async getPostCodeInputField(){
        return this.postCodeInputField;
    }

    // async getDropdownOption(value: string){
    //     return this.page.getByRole('option',{name : value})
    // }

    // async getDropdownOptionExactMatch(value:string){
    //     return this.page.getByRole('option',{name: value , exact: true})
    // }

    //Action method

    async verifyTitleInputFieldShouldBeEditable(){
        await expect(await this.getTitleInputField()).toBeEditable();
    }

    async enterValueIntoTitleInputField(value: string){
        await (await this.getTitleInputField()).fill(value);
    }

    async verifyInitialsInputFieldShouldBeEditable(){
        await expect(await this.getInitialsInputFields()).toBeEditable();
    }

    async enterValueIntoInitialsInputField(value: string){
        await (await this.getInitialsInputFields()).fill(value);
    }

    async clickContryCodeDropdown(){
        (await this.getContryCodeDropdown()).click();
    }

    // async selectValueFropContryCodeDropdown(value:string){
    //     await this.clickContryCodeDropdown();
    //     (await this.getDropDownOption(value)).click();
    // }

    async selectValueFropContryCodeDropdown(value: string) {
    await this.page.selectOption('#Contact_CountryCode', { label: value });
    }

    async enterValueIntoPostCodeInputField(value:string){
        await (await this.getPostCodeInputField()).fill(value);
    }

    // async businessGroupDropdownHasValue(value:string){
    //     await expect(await this.getDropdownOption(value)).toBeVisible();
    // }

    // async selectValueFromDropDown(value:string){
    //     await (await this.getDropdownOption(value)).click();
    // }

    // async selectValueFromDropdown(value:String){
    //     await this.clickMethod();
    //     await this.selectValueFromDropDown(value)
    // }

    // async verifyOptionsDisplayed(expectedOptions:string[]){
    //     await this.openDropdown();
    //     const allOptions = this.page.locator('[role="option"]')
    //     const visibleOptions = allOptions.filter({ hasNotText:'selectjasbcj',});
    //     await expect(visibleOptions).toContainText(expectedOptions);

    // }

    // async SelectValueFromActionDropdpown(value:string){
    //     await this.clickActionDropdown();
    //     const provisioningObj = new Provisioning(this.page);
    //     const provisioningObj.selectValueFromDropDown(value);
    // }

}
