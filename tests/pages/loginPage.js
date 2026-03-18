const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = page.locator("#username");
    this.password = page.locator("#password");
    this.loginButton = page.locator("#login");
    this.errorMessage = page.locator("//b[contains(text(),'Invalid Login')]");
  }
  async navigateToUrl() {
    await this.page.goto("https://adactinhotelapp.com/");
  }
  async userName1() {
    await this.userName.fill("vikkimahes");
  }
  async password1() {
    await this.password.fill("Y46370");
  }
  async loginButton1() {
    await this.loginButton.click();
  }
  async verify() {
    await expect(this.page).toHaveTitle("Adactin.com - Search Hotel");
  }
  async login(userName,password,Result) {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();
    console.log(Result);
  }
  async invalidCredential() {
    const value = await this.errorMessage.isVisible();
    console.log(value);
  }
}
module.exports = { LoginPage };
