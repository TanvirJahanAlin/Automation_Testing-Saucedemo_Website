const firstProductLocator = require("../locators/firstProductLocator");
const cartIconLocator = require("../locators/cartIconLocator");
const checkoutLocator = require("../locators/checkoutLocator");
const checkoutOverviewLocator = require("../locators/checkoutOverviewLocator");

class AddFirstProductToCart {
  async firstProduct() {
    await firstProductLocator.firstProduct.click();
  }
  async cartIconClick() {
    await cartIconLocator.cartIcon.click();
  }
  async checkoutButtonClick() {
    await checkoutLocator.checkoutButton.click();
  }
  async getFirstProductName() {
    return await firstProductLocator.firstProductName.getText();
  }

  async getFirstProductPrice() {
    return await firstProductLocator.firstProductPrice.getText();
  }

  async getCheckoutOverviewProductName() {
    return await checkoutOverviewLocator.singleProductName.getText();
  }
  async getCheckoutOverviewTax() {
    return await checkoutOverviewLocator.tax.getText();
  }
  async getCheckoutOverviewTotalPrice() {
    return await checkoutOverviewLocator.totalPrice.getText();
  }
}
module.exports = new AddFirstProductToCart();
