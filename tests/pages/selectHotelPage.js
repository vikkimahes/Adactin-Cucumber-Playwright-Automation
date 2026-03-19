const { expect } = require("@playwright/test");
class SelectHotelPage {
  constructor(page) {
    this.page = page;
    this.radioButton = page.locator("#radiobutton_0");
    this.continueButton = page.locator("#continue");
  }
  async checkRadioButton() {
    await this.radioButton.check();
  }
  async clickContinueButton() {
    await this.continueButton.click();
  }
  async verifyBookHotelPage() {
    await expect(this.page).toHaveTitle("Adactin.com - Book A Hotel");
  }
}
module.exports = { SelectHotelPage };
