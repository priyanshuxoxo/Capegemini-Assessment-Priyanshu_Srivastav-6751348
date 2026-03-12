import {expect, test} from "@playwright/test"

// test("Handle Browser Notifications Popup",async({browser})=>{
//     const context=await browser.newContext();
//     await context.grantPermissions(["notifications"])
//     const page=await context.newPage();
//     await page.goto("https://www.justdial.com/")
//     const result=await page.evaluate(()=>{
//         return Notification.requestPermission();
//     })
//     console.log(result);
//      expect(result).toBe("granted")
//     await page.getByPlaceholder("Search for Spa & Salons").fill("Restaurants")
//     await Promise.all([
//         page.waitForNavigation(),
//         page.keyboard.press("Enter") 
//     ])
//     await expect(page).toHaveURL(/Restaurants/)
//     await page.screenshot({path:"./screenshots/justdial.png"})


// })


test("Handle Browser Notifications Popup", async ({ browser }) => {
    const context=await browser.newContext();
    await context.grantPermissions(["notifications"])
    const page=await context.newPage();
    await page.goto("https://www.justdial.com/")
    await page.waitForLoadState("load");
     await page.getByPlaceholder("Search for Spa & Salons").fill("Restaurants")
    await page.waitForLoadState("load")
    await Promise.all([
        page.waitForNavigation(),
        page.keyboard.press("Enter") 
    ])
    await expect(page).toHaveURL(/Restaurants/)
    await page.screenshot({path:"./screenshots/jusdial.png"})
});
