const HamburgerMenuLocator = require("../locators/hamburgerMenuLocator");
const ResetAppStateLocator = require("../locators/resetAppStateLocator");

class ResetAppState {
  async resetAppState() {
    await HamburgerMenuLocator.hamburgerMenu.click();
    await browser.pause(2000);
    await ResetAppStateLocator.resetAppState.click();
  }
}
module.exports = new ResetAppState();
