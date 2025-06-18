class CheckoutLocator {
  get checkoutButton() {
    return $("//button[@id='checkout']");
  }

}
module.exports = new CheckoutLocator();