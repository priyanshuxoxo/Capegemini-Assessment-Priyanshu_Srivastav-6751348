import { test } from "@playwright/test";

test("ICC ODI Rankings",async({page})=>{
   await page.goto("https://www.icc-cricket.com/rankings")
   await page.locator("//button[@id='onetrust-accept-btn-handler']").click();
   await page.locator("//td[@class='text-right pr-2 align-middle py-2.5']/child::a[@href='/rankings/batting/mens/odi']/child::span[text()='full rankings']").click()
   const ranking=await page.locator("//a[@href='https://www.icc-cricket.com/rankings/3993/virat-kohli']/../../following-sibling::td/descendant::span").first().textContent();
   console.log(ranking);
   await page.screenshot({path:"./screenshots/ranking.png"})
})
//!VIRAT KOHLI ODI RANKING