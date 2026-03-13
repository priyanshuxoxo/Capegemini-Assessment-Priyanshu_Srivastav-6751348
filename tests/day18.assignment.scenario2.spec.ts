import {test} from "@playwright/test";
import path from "node:path";

test("task-2", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    await page.locator('//input[@id="uploadFile"]').setInputFiles(
        "./uploadPicture/dolphin.png"
    )

    const [downloadFile]=await Promise.all([
        page.waitForEvent("download"),
        page.locator('//a[@id="downloadButton"]').click()
    ])
     console.log("Downloaded file:",downloadFile.suggestedFilename());
    let loc="../downloads"
    let fileName=downloadFile.suggestedFilename();

    await  downloadFile.saveAs(path.join(loc,fileName))
    

    await page.screenshot({path:"./screenshots/day18_task2.png"})
})