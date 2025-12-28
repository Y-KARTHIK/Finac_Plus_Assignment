const { test, expect } = require('@playwright/test');
const fs = require('fs');
test('DemoQA Book Store UI Automation', async ({ page }) => {
  await page.goto('https://demoqa.com/books');
  await page.click('#login');
  await page.fill('#userName', 'Y_Karthik');
  await page.fill('#password', '@Ykarthik96');
  await page.click('#login');
  await expect(page.locator('#userName-value'))
    .toHaveText('Y_Karthik');
  await expect(page.locator('#submit')).toBeVisible();
  await page.click('text=Book Store');
  await page.fill('#searchBox', 'Learning JavaScript Design Patterns');
  await expect(
    page.locator('text=Learning JavaScript Design Patterns')
  ).toBeVisible();
  const title = await page.locator('.rt-td >> nth=1').innerText();
  const author = await page.locator('.rt-td >> nth=2').innerText();
  const publisher = await page.locator('.rt-td >> nth=3').innerText();
  const bookDetails = `
Title: ${title}
Author: ${author}
Publisher: ${publisher}
`;

  fs.writeFileSync('book-details.txt', bookDetails);
  await page.click('#submit');
});
