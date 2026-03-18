import { Page, expect } from '@playwright/test';
import "../TestData/FileUpload.day22.json";
import path from "path";
class FileUpload{
    page:Page
    data:any
    chooseFileBTN:any
    uploadFileBTN:any
    uploadedFileNameTF:any
    constructor(page:Page,data){
        this.page=page;
        this.data=data;
        this.chooseFileBTN=page.locator("#file-upload")
        this.uploadFileBTN=page.locator("#file-submit")
        this.uploadedFileNameTF=page.locator("#uploaded-files");

    }
    async navigate(){
        await this.page.goto(this.data.url)
    }

    async selectingFile(){
        const fullPath=path.join(
            this.data.filePath,this.data.expectedFileName
        );
        await this.chooseFileBTN.setInputFiles(fullPath);
    }
    async uploadingFile(){
        await Promise.all([
            this.page.waitForNavigation(),  
            this.uploadFileBTN.click()
        ]);
        await expect(this.uploadedFileNameTF).toHaveText(this.data.expectedFileName);
    }

}
export default FileUpload;