const { Builder, By } = require('selenium-webdriver');

(async function testFontSize() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://ea-website.srqz-mpay.com/home'); // Replace with your website URL
        const buttons = await driver.findElements(By.css('button'));

        for (let i = 0; i < buttons.length; i++) {
            const fontSize = await buttons[i].getCssValue('font-size');
            console.log(`Button ${i + 1} font size: ${fontSize}`);
            if (fontSize === '16px') {
                console.log(`✅ Button ${i + 1} font size is correct: ${fontSize}`);
            } else {
                console.log(`❌ Button ${i + 1} font size is incorrect: ${fontSize}`);
            }
        }
    } finally {
        // await driver.quit();
    }
})();
