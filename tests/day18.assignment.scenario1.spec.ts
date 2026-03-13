import {test,expect} from "@playwright/test";
import excel from "exceljs"
import path from "node:path";

test("Register Multiple users using excel",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage();
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"./testdata/logindata.xlsx"))
    let sheet=book.getWorksheet("Sheet1")
    let photoPath:string[]=[path.join(__dirname,"./uploadPicture/car.png"),path.join(__dirname,"./uploadPicture/dolphin.png"),path.join(__dirname,"./uploadPicture/fruit.png")]
    let k=0;
    for(let i=2;i<=sheet!.actualRowCount;i++){
        let url:string=sheet!.getRow(i).getCell(1).toString();
        let firstName:string=sheet!.getRow(i).getCell(2).toString();
        let lastName:string=sheet!.getRow(i).getCell(3).toString();
        let email:string=sheet!.getRow(i).getCell(4).toString();
        let gender:string=sheet!.getRow(i).getCell(5).toString();
        let mobile:string=sheet!.getRow(i).getCell(6).toString();
        let dob=sheet!.getRow(i).getCell(7).value as Date;
        let year=dob.getFullYear().toString();
        let month = dob.toLocaleString('default', { month: 'long' });
        let day=(dob.getDate()).toString();
        let subjects:string=sheet!.getRow(i).getCell(8).toString();
        let hobbies:string=sheet!.getRow(i).getCell(9).toString();
        let currentAddress:string=sheet!.getRow(i).getCell(10).toString();
        let state:string=sheet!.getRow(i).getCell(11).toString();
        let city:string=sheet!.getRow(i).getCell(12).toString();

        await page.goto(url);
        await page.getByPlaceholder("First Name").fill(firstName);
        await page.getByPlaceholder("Last Name").fill(lastName);
        await page.locator("#userEmail").fill(email);
        await page.locator(`//label[text()='${gender}']`).click()
        await page.getByPlaceholder("Mobile Number").fill(mobile);
        await page.locator("#dateOfBirthInput").click();
        await page.locator("//select[@class='react-datepicker__year-select']").selectOption(year);
        await page.locator("//select[@class='react-datepicker__month-select']").selectOption(month);
        await page.locator(`.react-datepicker__day--0${day}`).first().click();
        await page.locator(".subjects-auto-complete__input").fill(subjects);
        await page.keyboard.press("Enter")
        await page.locator(`//label[@class="form-check-label" and .='${hobbies}']`).click();
        await page.locator("#uploadPicture").setInputFiles(photoPath[k % photoPath.length]);
        k++;
        await page.getByPlaceholder("Current Address").fill(currentAddress);
        await page.locator("#state").click();
        await page.getByText(state).click();
        await page.locator("#city").click();
        await page.getByText(city).click();
        
        await page.locator("#submit").click();
        await page.screenshot({path:`./screenshots/${firstName}.png`})
    }
    
})