class LoginLocator {
  get username() {
    return $("//input[@id='user-name']");
  }
  get password() {
    return $("//input[@id='password']");
  }
  get loginButton() {
    return $("//input[@id='login-button']");
  }
}
module.exports = new LoginLocator();
