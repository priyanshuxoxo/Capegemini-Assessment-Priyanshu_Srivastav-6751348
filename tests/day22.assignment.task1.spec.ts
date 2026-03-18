import { expect,test } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import FileUpload from '../Flipkart_Assesment/POM/FileUpload.day22.page';
const dataFile=fs.readFileSync(path.join(__dirname,"../Flipkart_Assesment/TestData/FileUpload.day22.json"),"utf8")
const data=JSON.parse(dataFile);

test("UploadFile",async({page})=>{

    let Upload=new FileUpload(page,data)
    await Upload.navigate();
    await Upload.selectingFile();
    await Upload.uploadingFile();
    await page.screenshot({path:`./screenshots/${data.expectedFileName}`})
})