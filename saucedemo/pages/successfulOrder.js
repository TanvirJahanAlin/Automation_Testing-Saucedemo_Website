const checkoutOverviewLocator = require("../locators/checkoutOverviewLocator");

class SuccessfulOrder {
  async clickFinishButton() {
    await checkoutOverviewLocator.finishButton.click();
  }
  async getOrderMessage() {
    return await checkoutOverviewLocator.successfulOrderMessage.getText();
  }

}
module.exports = new SuccessfulOrder();

 