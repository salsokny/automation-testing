const { Builder, By, Key, until } = require('selenium-webdriver');

(async function createToChatSupport() {
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

        // Step 3: Locate and click the "Chat Now" button
        const chatButton = await driver.wait(
            until.elementLocated(By.xpath("//a[@href='/chat']/button")),
            30000
        );

        console.log("Chat Now button located");

        // Step 4: Wait for the button to be visible and then click it
        await driver.wait(until.elementIsVisible(chatButton), 30000);
        // await chatButton.click();



    } catch (err) {
        console.error('Error during the process:', err);
    } finally {
        // Close the browser
        // await driver.quit();
    }
})();
