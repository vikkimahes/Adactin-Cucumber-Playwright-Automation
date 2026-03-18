const { LoginPage } = require("../pages/loginPage");
const { Given, When, Then } = require("@cucumber/cucumber");
let logobj1;
//logobj1 = new LoginPage(this.page);

Given("user navigates to the adactin website", async function () {
  // Write code here that turns the phrase above into concrete actions
  //return "pending";
  logobj1 = new LoginPage(this.page);
  await logobj1.navigateToUrl();
});
When("the user enters the userName", async function () {
  // Write code here that turns the phrase above into concrete actions
  //return "pending";
  //logobj = new LoginPage(this.page);
  await logobj1.userName1();
});
When("the user enters the password", async function () {
  // Write code here that turns the phrase above into concrete actions
  //return "pending";
  //logobj = new LoginPage(this.page);
  await logobj1.password1();
});
When("the user clicks the login button", async function () {
  // Write code here that turns the phrase above into concrete actions
  //return "pending";
  //logobj = new LoginPage(this.page);
  await logobj1.loginButton1();
});
Then("user navigates to the search hotel page", async function () {
  // Write code here that turns the phrase above into concrete actions
  //return "pending";
  //logobj = new LoginPage(this.page);
  await logobj1.verify();
});
When(
  "user enters the invalid {string} and {string} and {string} clicks the login button",
  async function (userName, password, Result) {
    await logobj1.login(userName, password, Result);
  },
);
Then("user gets the error message", async function () {
  await logobj1.invalidCredential();
});
