const { Builder, By, until } = require("selenium-webdriver");

async function merchantButton() {
    // Launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Navigate to the homepage
        await driver.get("https://ea-website.srqz-mpay.com/home");

        // Locate the Merchant button/link
        const merchantButton = await driver.wait(
            until.elementLocated(By.xpath("//a[@href='/merchant']")), // Adjust XPath or use CSS selector if necessary
            10000 // Wait up to 10 seconds for the element
        );

        // Scroll to the Merchant button to ensure visibility
        await driver.executeScript("arguments[0].scrollIntoView(true);", merchantButton);

        // Wait for the button to be clickable
        await driver.wait(until.elementIsVisible(merchantButton), 10000);

        // Attempt to click the Merchant button
        try {
            await merchantButton.click();
        } catch (err) {
            console.log("Standard click failed, trying JavaScript click...");
            await driver.executeScript("arguments[0].click();", merchantButton);
        }

        // Wait for the navigation to the Merchant page to complete
        await driver.wait(async () => {
            const currentUrl = await driver.getCurrentUrl();
            return currentUrl.includes("/merchant");
        }, 10000);

        // Validate the navigation
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes("/merchant")) {
            console.log("Navigation to Merchant page successful: " + currentUrl);
        } else {
            console.error("Navigation to Merchant page failed. Current URL: " + currentUrl);
        }
    } catch (error) {
        console.error("Error during Merchant button test:", error);
    } finally {
        // Close the browser
        // await driver.quit();
    }
}

merchantButton();
