const { SelectHotelPage } = require("../pages/selectHotelPage");
const { When, Then } = require("@cucumber/cucumber");
let selectHotel;
When("the user selects the radio button", async function () {
  selectHotel = new SelectHotelPage(this.page);
  await selectHotel.checkRadioButton();
});

When("the user clicks on the Continue button", async function () {
  await selectHotel.clickContinueButton();
});

Then(
  "the user should be redirected to the Book A Hotel page",
  async function () {
    await selectHotel.verifyBookHotelPage();
  },
);
