const { chromium } = require("@playwright/test");
const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60000);
Before(async function () {
  const isCI = process.env.CI;
  this.browser = await chromium.launch({ headless: isCI ? true : false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});
After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
