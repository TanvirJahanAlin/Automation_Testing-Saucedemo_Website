class LogoutLocator {
  get logoutButton() {
    return $("//a[contains(text(),'Logout')]");
  }

}
module.exports = new LogoutLocator();
