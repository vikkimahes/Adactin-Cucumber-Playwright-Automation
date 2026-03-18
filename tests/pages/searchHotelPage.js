const { expect } = require("@playwright/test");
class SearchHotelPage {
  constructor(page) {
    this.page = page;
    this.location = page.locator("#location");
    this.hotels = page.locator("#hotels");
    this.roomType = page.locator("#room_type");
    this.noOfRooms = page.locator("#room_nos");
    this.checkInDate = page.locator("#datepick_in");
    this.checkOutDate = page.locator("#datepick_out");
    this.adultPerRoom = page.locator("#adult_room");
    this.childrenPerRoom = page.locator("#child_room");
    this.searchButton = page.locator("#Submit");
  }
  async selectLocation() {
    await this.location.selectOption({ value: "Melbourne" });
  }
  async selectHotel() {
    await this.hotels.selectOption({ value: "Hotel Sunshine" });
  }
  async selectRoomType() {
    await this.roomType.selectOption({ value: "Super Deluxe" });
  }

  async selectNumberOfRooms() {
    await this.noOfRooms.selectOption({ value: "1" });
  }
  async enterCheckInDate() {
    await this.checkInDate.fill("20/03/2026");
  }
  async enterCheckOutDate() {
    await this.checkOutDate.fill("26/03/2026");
  }
  async selectAdultsPerRoom() {
    await this.adultPerRoom.selectOption({ value: "2" });
  }
  async selectChildrenPerRoom() {
    await this.childrenPerRoom.selectOption({ value: "1" });
  }
  async clickSearch() {
    await this.searchButton.click();
  }
  async verifySelectHotelPage() {
    await expect(this.page).toHaveURL(
      "https://adactinhotelapp.com/SelectHotel.php",
    );
  }
}
module.exports = { SearchHotelPage };
