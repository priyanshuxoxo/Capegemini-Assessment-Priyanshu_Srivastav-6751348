class Amazon{
    secondPage:any;
    page:any;
    careerLNK:any;  
    studentOpportunityBTN:any;
    findRolesBTN:any;
    countryBTN:any;;
    stateBTN:any;
    cityBTN:any;
    employmentTypeBTN:any;
    categoryBTN:any;
    careerAreaBTN:any;
    teamBTN:any;
    roleTypeBTN:any;
    applyJobBTN:any;
    applyNowBTN:any

    constructor(page,data){
        this.page=page
        this.careerLNK=this.page.locator("//a[@href='https://amazon.jobs']")
        this.studentOpportunityBTN=this.page.locator("//div[@class='homepage-tile d-flex flex-column justify-content-between w-100 university_recruiting']/div/a[text()='Find your role']")
        this.findRolesBTN=this.page.locator("//div[@data-test-component='StencilReactRow' and .='Find open university roles']")
        this.countryBTN=this.page.locator(`//label[@class='filter-value-module_root__YfMaD']/span/div[text()='${data.country}']`);
        this.stateBTN=this.page.locator(`//label[@class='filter-value-module_root__YfMaD']/span/div[text()='${data.state}']`);
        this.cityBTN=this.page.locator(`//label[@class='filter-value-module_root__YfMaD']/span/div[text()='${data.city}']`)
        this.employmentTypeBTN=this.page.locator(`//label[@class='filter-value-module_root__YfMaD']/span/div[text()='${data.EmploymentType}']`)

        this.categoryBTN=this.page.locator( `//label[@class='filter-value-module_root__YfMaD']/span/div[text()='${data.Category}']`)
        this.careerAreaBTN=this.page.locator(`//label[@class='filter-value-module_root__YfMaD']/span/div[text()='${data.CareerArea}']`)
        this.teamBTN=this.page.locator(`//label[@class='filter-value-module_root__YfMaD']/span/div[text()='${data.Team}']`)
        this.roleTypeBTN=this.page.locator(`//label[@class='filter-value-module_root__YfMaD']/span/div[text()='${data.RoleType}']`);
        this.applyJobBTN=this.page.locator("(//div[@role='button']/div/div/div/h3/a)[1]")
       
        
    }


    async careerPage(){
          await this.careerLNK.click();
    }
    async opportunity(){
        await this.studentOpportunityBTN.click();
    }
    async findRoles(){
        await this.findRolesBTN.click();
    }
    async choosecountry(){
        await this.countryBTN.click();
    }
    async chooseState(){
        await this.stateBTN.click()
    }
    async chooseCity(){
        await this.cityBTN.click();
    }
    async chooseEmployment(){
        await this.employmentTypeBTN.click();
    }
    async chooseCategory(){

        await this.categoryBTN.click()
    }
    async chooseCareer(){
        await this.careerAreaBTN.click()
    }
    async chooseTeam(){

        await this.teamBTN.click();
    }
    async chooseRole(){

        await this.roleTypeBTN.click();
    }
    async applyJob(){
        const [newPage] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.applyJobBTN.click()
        ]);

        this.secondPage = newPage;
        await this.secondPage.waitForLoadState();
        
    }
    async applyNow(){
       this.applyNowBTN=this.secondPage.locator("//a[@id='apply-button' and .='Apply now']")
       await this.applyNowBTN.click()
    }
}
export default Amazon;