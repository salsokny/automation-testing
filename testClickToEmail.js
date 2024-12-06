const { Builder, By, until } = require('selenium-webdriver');

(async function createToContactUs() {
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

        // Locate the email link inside the button (using XPath to target <a> tag with mailto)
        const emailLink = await driver.wait(
            until.elementLocated(By.xpath("//button//a[starts-with(@href, 'mailto:')]")),
            10000
        );

        // Wait for the email link to be visible and click it
        await driver.wait(until.elementIsVisible(emailLink), 10000);
        await emailLink.click();

        console.log('Email link clicked, it should now open the default email client.');

    } catch (err) {
        console.error('Error during the process:', err);
    } finally {
        // Optionally close the browser (uncomment when you want to quit)
        // await driver.quit();
    }
})();
