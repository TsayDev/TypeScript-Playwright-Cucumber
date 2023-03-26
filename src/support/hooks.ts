import { AfterAll, BeforeAll, Before } from '@cucumber/cucumber';
import playwright from "playwright";
import { Browser, BrowserContext } from "playwright";

let PW: {
  browser: Browser | any;
  context: BrowserContext | any
} = { browser: null, context: null };

BeforeAll(async function () {
  PW.browser = await playwright.chromium.launch({
    headless: false,
  });
  PW.context = await PW.browser.newContext({
    baseURL: 'https://www.saucedemo.com'
  });
});

AfterAll(async function () {
  if (PW.browser) {
    await PW.browser.close();
  }
});

Before(function () {
  this.PW = PW;
});
