import {expect, test} from "@playwright/test"

test("dropdown scenerio",async({page})=>{
    await page.goto("https://www.automationtesting.co.uk/dropdown.html")
    await page.locator("#cars").click();
    const items=await page.locator("#cars option").all()
    const Expected:(string)[]=["Audi","BMW","Ford","Honda","Jeep","Mercedes","Suzuki","Volkswagen"]
    expect(items.length).toBe(Expected.length)
    for(let it of items){
        let text=await it.textContent();
        console.log(text);
        expect(Expected).toContain(text?.trim())
    }
    await page.screenshot({path:"./screenshots/carDropdown.png"})
})