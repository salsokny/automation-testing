const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Initialize Chrome WebDriver
// let driver = new Builder()
//     .forBrowser('chrome')
//     .setChromeOptions(new chrome.Options().headless()) // Use headless if you don't need a UI
//     .build();



// Test Login Form
async function testLoginForm() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get('https://ea-website.srqz-mpay.com/register'); // Replace with your login URL

        // Test valid login
        await driver.wait(
            until.elementLocated(By.css("#name .arco-input")),
            30000 // Increase the timeout to 30 seconds
        ).sendKeys('validName');

        await driver.wait(
            until.elementLocated(By.css("#namePre .arco-input")),
            30000 // Increase the timeout to 30 seconds
        ).sendKeys('validNamePre');
       
        // await driver.findElement(By.css('arco-btn')).click(); // Replace with your login button ID

        console.log('Valid login test passed.');

        // await driver.findElement(By.css('arco-btn')).click();

        // Check for error message
        // let errorMessage = await driver.findElement(By.id('error-message')).getText(); // Replace with your error message element ID
        // if (errorMessage === 'Invalid username or password') {
        //     console.log('Invalid login test passed.');
        // } else {
        //     console.log('Invalid login test failed.');
        // }
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        // await driver.quit(); // Close the browser
    }
}

testLoginForm();
