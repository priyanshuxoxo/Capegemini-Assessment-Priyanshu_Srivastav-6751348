import {expect, test} from "@playwright/test"

test("task1", async ({page}) => {
    await page.goto("https://www.flipkart.com")
    await page.waitForTimeout(3000)
    await page.locator('(//span[@class="b3wTlE"])[1]').click()
    const searchBox = page.locator('//input[@name="q"]').first();
    await expect(searchBox).toBeVisible();
    await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').first().fill("shoes")
    await page.locator('(//button[@class="XFwMiH"])[1]').click()
    await page.waitForTimeout(4000);
    await page.locator('//a[contains(text(),"Women")]').first().click()
    await expect(page).toHaveScreenshot("women-shoes.png");
    let date_and_time = new Date().getTime();
    await page.screenshot({path:`Screenshots/${date_and_time}.png`})

})