const logoutLocator = require ("../locators/logoutLocator");

class logout {
  async clickLogoutButton() {
    await browser.pause(2000);
    await logoutLocator.logoutButton.click();
    
  }
}
module.exports = new logout();

