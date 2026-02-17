import { Page,Locator,expect } from "@playwright/test";

export class CreateAccount{

    //Locator
    readonly page:Page;
    readonly joinReal: Locator;
    readonly firtName: Locator;
    readonly lastName: Locator;
    readonly username: Locator;
    readonly emailId: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly consentCheckBoxOne: Locator;
    readonly consentCheckboxTwo: Locator;
    readonly createAccountButton: Locator;

    //Constructor
    constructor (page:Page){
        this.page= page;
        this.joinReal = page.getByText('Join Real');
        this.firtName = page.getByPlaceholder('Enter your first name');
        this.lastName = page.getByPlaceholder('Enter your last name');
        this.username = page.getByPlaceholder('eg. johndoe9');
        this.emailId = page.getByPlaceholder('johndoe@example.com');
        this.password = page.getByPlaceholder('Choose password');
        this.confirmPassword = page.getByPlaceholder('Confirm password');
        this.consentCheckBoxOne = page.getByTestId('consentedToTerms');
        this.consentCheckboxTwo = page.getByTestId('consentedToCallMessage');
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' })
    }



    //Getter method

    async getJoinReal(){
        return this.joinReal;
    }

    async getFirstName(){
        return this.firtName;
    }

    async getLastName(){
        return this.lastName;
    }

    async getUserName(){
        return this.username;
    }

    async getEmailId(){
        return this.emailId;
    }

    async getPassword(){
        return this.password;
    }

    async getConfirmPassword(){
        return this.confirmPassword;
    }

    async getConsentCheckboxOne(){
        return this.consentCheckBoxOne;
    }

    async getConsentCheckBoxTwo(){
        return this.consentCheckboxTwo;
    }

    async getCreateAccountButton(){
        return this.createAccountButton;
    }

    //Action method

    async clickJoinReal(){
        await(await this.getJoinReal()).click();
    }

    async verifyFirstNameInputFieldShouldBeEditable(){
        await expect(await this.getFirstName(),'Verify if first name input field should be editable').toBeEditable();
    }

    async enterValueIntoFirstNameInputField(value: string){
        await(await this.getFirstName()).fill(value);
    }

    async verifyLastNameInputFieldShouldBeEditable(){
        await expect(await this.getLastName(),'Verify if last name input field should be editable').toBeEditable();
    }

    async enterValueIntoLastNameInputField(value: string){
        await(await this.getLastName()).fill(value);
    }

    async verifyUserNameInputFieldShouldBeEditable(){
        await expect(await this.getUserName(),'Verify if user name input field should be editable').toBeEditable();
    }

    async enterValueIntoUserNameInputField(value: string){
        await(await this.getUserName()).fill(value);
    }

    async verifyEmailIdInputFieldShouldBeEditable(){
        await expect(await this.getEmailId(),'Verify if email id input field should be editable').toBeEditable();
    }

    async enterValueIntoEmailIdInputField(value: string){
        await(await this.getEmailId()).fill(value);
    }

    async verifyPasswordInputFieldShouldBeEditable(){
        await expect(await this.getPassword(),'Verify if password input field should be editable').toBeEditable();
    }

    async enterValueIntoPasswordInputField(value: string){
        await(await this.getPassword()).fill(value);
    }

        async verifyConfirmPasswordInputFieldShouldBeEditable(){
        await expect(await this.getConfirmPassword(),'Verify if confirm oassword input field should be editable').toBeEditable();
    }

    async enterValueIntoConfirmPasswordInputField(value: string){
        await(await this.getConfirmPassword()).fill(value);
    }

    async checkConsentCheckBoxOne(){
        await (await this.getConsentCheckboxOne()).check();
    }

    async checkConsentCheckBoxTwo(){
        await (await this.getConsentCheckBoxTwo()).check();
    }

    async createAccountButtonShouldBeEnabled(){
        await expect(await this.getCreateAccountButton(),'Verify if create account button to be enabled').toBeEnabled();
    }

    async clickCreateAccountButton(){
        await(await this.getCreateAccountButton()).click();
    }

    


}