class CheckoutInformationLocator {
  get firstName() {
    return $("//input[@id='first-name']");
  }
  get lastName() {
    return $("//input[@id='last-name']");
  }
  get postalCode() {
    return $("//input[@id='postal-code']");
  }
  get continueButton() {
    return $("//input[@id='continue']");
  }
}
module.exports = new CheckoutInformationLocator();
