const { Builder, By, until } = require('selenium-webdriver');

(async function createToPhone() {
    // Step 1: Set up the WebDriver and navigate to the homepage
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to the homepage
        await driver.get('https://ea-website.srqz-mpay.com/home');

        // Locate the "Contact Us" button and click
        let contactUsButton = await driver.wait(
            until.elementLocated(By.xpath("//a[@href='/contact-us']/button")),
            20000
        );
        await contactUsButton.click();

        // Locate the button with the displayed phone number (012456789)
        const phoneButton = await driver.wait(
            until.elementLocated(By.xpath("//button//p[text()='012456789']")),
            10000
        );

        // Wait for the phone number button to be visible and click it
        await driver.wait(until.elementIsVisible(phoneButton), 10000);
        await phoneButton.click();

        console.log('Phone number button clicked.');

        // Optionally, you could now simulate dialing if you want to open a phone dialer (with tel: protocol)
        // You could update the script to click a link like `tel:012456789`, if it's structured that way

    } catch (err) {
        console.error('Error during the process:', err);
    } finally {
        // Optionally close the browser (uncomment when you want to quit)
        // await driver.quit();
    }
})();
