const { Builder, By, until } = require("selenium-webdriver");

async function testRegisterButton() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Navigate to the website
        await driver.get("https://ea-website.srqz-mpay.com/home");

        // Locate the button inside an <a> with href="/register"
        let registerButton = await driver.wait(
            until.elementLocated(By.xpath("//a[@href='/register']/button")),
            20000 // Increase timeout if needed
        );

        // Attempt to click the button
        try {
            await registerButton.click();
        } catch (err) {
            console.log("Standard click failed, trying JavaScript click...");
            await driver.executeScript("arguments[0].click();", registerButton);
        }

        // Wait for the navigation to complete
        await driver.wait(async () => {
            const currentUrl = await driver.getCurrentUrl();
            return currentUrl.includes("/register"); // Check for the target URL
        }, 10000);

        // Validate the navigation
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes("/register")) {
            console.log("Navigation successful: " + currentUrl);
        } else {
            console.error("Navigation failed. Current URL: " + currentUrl);
        }
    } catch (error) {
        console.error("Error during test:", error);
    } finally {
        // await driver.quit();
    }
}

testRegisterButton();
