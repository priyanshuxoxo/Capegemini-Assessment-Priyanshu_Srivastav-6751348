import {test} from "@playwright/test"
import fs from 'fs';
import path from "path";
import Amazon from "../Flipkart_Assesment/POM/AmazonTask.day21.page";

const dataFile=fs.readFileSync(path.join(__dirname,"../Flipkart_Assesment/TestData/Amazon.day21.json"),"utf8")
const data=JSON.parse(dataFile);

test("Amazon task",async({page})=>{

    await page.goto(data.url);
    const Amazonn=new Amazon(page,data);
    await Amazonn.careerPage();
    await Amazonn.opportunity();
    await Amazonn.findRoles();
    await Amazonn.choosecountry();
    await Amazonn.chooseState();
    await Amazonn.chooseCity();
    await Amazonn.chooseEmployment();
    await Amazonn.chooseCategory();
    await Amazonn.chooseCareer();
    await Amazonn.chooseTeam();
    await Amazonn.chooseRole();
    await Amazonn.applyJob();
    await page.screenshot({path:"./screenshots/jobsApply.png"});
    await Amazonn.applyNow();
    await page.screenshot({path:"./screenshots/jobApplied.png"});

})