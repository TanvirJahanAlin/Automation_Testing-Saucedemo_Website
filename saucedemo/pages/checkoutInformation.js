const checkoutInformationLocator = require("../locators/checkoutInformationLocator");

class CheckoutInformationInput {
  async firstNameInput(firstName) {
    await checkoutInformationLocator.firstName.click();
    await checkoutInformationLocator.firstName.setValue(firstName);
  }
  async lastNameInput(lastName) {
    await checkoutInformationLocator.lastName.click();
    await checkoutInformationLocator.lastName.setValue(lastName);
  }
  async postalCodeInput(postalCode) {
    await checkoutInformationLocator.postalCode.click();
    await checkoutInformationLocator.postalCode.setValue(postalCode);
  }
  async continueButton() {
    await checkoutInformationLocator.continueButton.click();
  }
}
module.exports = new CheckoutInformationInput();
