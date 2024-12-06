const { Builder } = require('selenium-webdriver');

(async function testResponsive() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Open the website
        await driver.get('https://ea-website.srqz-mpay.com/contact-us');

        // Set viewport for mobile
        await driver.manage().window().setRect({ width: 375, height: 667 });
     
    } finally {
        // await driver.quit();
    }
})();
