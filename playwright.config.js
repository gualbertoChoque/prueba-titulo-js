//playwright configuraciones

/** @type {import('@playwright/test').PlaywrightTestConfig}*/

const config = {
  use: {
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "Chromium", use: { browserName: "chromium" } },
    { name: "Firefox", use: { browserName: "firefox" } },
    //{ name: "webkit", use: { browserName: "webkit" } },
  ],
  testDir: "tests",
  timeout: 3000,
  expect: {
    timeout: 5000,
  },
};

module.exports = config;
