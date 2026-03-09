import {expect, test} from "@playwright/test"

test("task1", async ({page}) => {

    page.setDefaultTimeout(20000)
    const response=await page.request.get("https://demoapps.qspiders.com/ui/login")
    await expect(response).toBeOK();
    await page.goto("https://demoapps.qspiders.com/ui/login")

    const email = page.getByLabel("email")
    await email.fill("srivastavapriyanshu201@gmail.com")
    await expect(email).toHaveValue("srivastavapriyanshu201@gmail.com")

    const password = page.getByLabel("password")
    await password.fill("Priyanshu@222")
    await expect(password).toHaveValue("Priyanshu@222")

    await page.getByRole("button", {name:"Login"}).click()

    await expect(page).toHaveTitle("DemoApps | Qspiders | Text Box")
    await page.screenshot({path:"./screenshots/login.png"})

})