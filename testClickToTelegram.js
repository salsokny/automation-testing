const { Builder, By, Key, until } = require('selenium-webdriver');

(async function createToContactUs() {
    // Step 1: Set up the WebDriver and navigate to the homepage
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to the homepage
        await driver.get('https://ea-website.srqz-mpay.com/home');

        // Locate the register button and click
        let contactUsButton = await driver.wait(
            until.elementLocated(By.xpath("//a[@href='/contact-us']/button")),
            20000
        );
        
        await contactUsButton.click();

        const telegramButton = await driver.wait(
            until.elementLocated(By.xpath("//button//p[text()='@mpay99']")),
            10000
        );

        await driver.wait(until.elementIsVisible(telegramButton), 10000);
        await telegramButton.click();

    } catch (err) {
        console.error('Error during the process:', err);
    } finally {
        // Close the browser
        // await driver.quit();
    }
})();
