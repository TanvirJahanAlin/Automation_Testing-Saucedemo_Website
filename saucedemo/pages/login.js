const LoginLocator = require("../locators/loginLocator");
const ErrorMessage = require("../locators/errorMessageLocator");
class Login {
  async usernameInput(username) {
    await LoginLocator.username.click();
    await LoginLocator.username.setValue(username);
  }
  async passwordInput(password) {
    await LoginLocator.password.click();
    await LoginLocator.password.setValue(password);
  }
  async loginButton() {
    await LoginLocator.loginButton.click();
  }
  async getErrorMessage() {
    return await ErrorMessage.errorMessage.getText();
  }
}
module.exports = new Login();
