const { SearchHotelPage } = require("../pages/searchHotelPage");
const { Given, When, Then } = require("@cucumber/cucumber");
let searchHotel;
//Given("user navigates to the Search Hotel page", async function () {});
When("the user selects location", async function () {
  searchHotel = new SearchHotelPage(this.page);
  await searchHotel.selectLocation();
});
When("the user selects hotel", async function () {
  await searchHotel.selectHotel();
});
When("the user selects room type", async function () {
  await searchHotel.selectRoomType();
});
When("the user selects number of rooms", async function () {
  await searchHotel.selectNumberOfRooms();
});
When("the user enters check in date", async function () {
  await searchHotel.enterCheckInDate();
});
When("the user enters check out date", async function () {
  await searchHotel.enterCheckOutDate();
});
When("the user selects adults per room", async function () {
  await searchHotel.selectAdultsPerRoom();
});
When("the user selects children per room", async function () {
  await searchHotel.selectChildrenPerRoom();
});
When("the user clicks the search button", async function () {
  await searchHotel.clickSearch();
});
Then("the user should see the Select Hotel page", async function () {
  await searchHotel.verifySelectHotelPage();
});
