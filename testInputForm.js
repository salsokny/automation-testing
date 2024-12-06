const { Builder, By, until } = require("selenium-webdriver");

async function testRegisterButton() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Navigate to the website
        await driver.get("https://ea-website.srqz-mpay.com/home");

        // Locate the register button and click
        let registerButton = await driver.wait(
            until.elementLocated(By.xpath("//a[@href='/register']/button")),
            20000
        );
        await registerButton.click();

        // Wait for the page to navigate and the form to be visible
        await driver.wait(until.urlContains("/register"), 10000);

        //Input name
        const inputName = await driver.wait(
            until.elementLocated(By.css("#name .arco-input")),
            30000 // Increase the timeout to 30 seconds
        );
        await inputName.sendKeys("Business Name");

        // Input preferred
        const inputPre = await driver.wait(
            until.elementLocated(By.css("#namePre .arco-input")),
            30000 // Increase the timeout to 30 seconds
        );
        await inputPre.sendKeys("Preferred Name");

        // select country
        const inputField = await driver.findElement(By.css('#country .arco-input-size-medium'));
        // Remove readonly if needed
        await driver.executeScript("arguments[0].removeAttribute('readonly');", inputField);
        await inputField.sendKeys('Cambodia');
        const countryValue = await inputField.getAttribute('value');

        if (countryValue === 'Cambodia') { 
            // Locate the <p> element inside the prefix span
            const prefixElement = await driver.findElement(By.css('#phoneNumber .arco-input-prefix .text-title'));
            // Update the text to (+855) using JavaScript
            await driver.executeScript("arguments[0].textContent = '( +855 )';", prefixElement);

            const phoneNumber = await driver.findElement(By.css('#phoneNumber .arco-input'))
            // Remove readonly if needed
            await driver.executeScript("arguments[0].removeAttribute('readonly');", phoneNumber);
            await phoneNumber.sendKeys('966805742');

        } else {
            console.log('Country value is not China.');
        }

        // Address
        const phoneAddress = await driver.findElement(By.css('#address .arco-input-size-medium'))
        await driver.executeScript("arguments[0].removeAttribute('readonly');", phoneAddress);
        await phoneAddress.sendKeys('songkat seng sok address');

        // Referral Code
        const referralCode = await driver.findElement(By.css('#referralCode .arco-input-size-medium'))
        await driver.executeScript("arguments[0].removeAttribute('readonly');", referralCode);
        await referralCode.sendKeys('111111');

        console.log("Text entered into the input field successfully!");
    } catch (error) {
        console.error("Error during test:", error);
    } finally {
        // await driver.quit(); // Uncomment to close the browser after the test
    }
}

testRegisterButton();
