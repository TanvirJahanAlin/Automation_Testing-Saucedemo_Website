const login = require("../pages/login");

const username = "locked_out_user";
const password = "secret_sauce";

describe("Verify the error message with locked_out_user", () => {
  it("Verify the error message", async () => {
    await login.usernameInput(username);
    await browser.pause(1000);
    await login.passwordInput(password);
    await browser.pause(1000);
    await login.loginButton();
    await browser.pause(1000);

    await expect(await login.getErrorMessage()).toContain("this user has been locked out.");
    
  });
});
