const productsLocator = require("../locators/productsLocator");
const checkoutOverviewLocator = require("../locators/checkoutOverviewLocator");
class AddToCartProduct {
  async addRandomProductToCart() {
    const buttons = await productsLocator.products;
    const selectedButtons = [];
    while (selectedButtons.length < 3) {
      const randomButtom = Math.floor(Math.random() * buttons.length);
      if (selectedButtons.includes(randomButtom)) {
        continue;
      }
      selectedButtons.push(randomButtom);
      await buttons[randomButtom].click();
      await browser.pause(2000);
    }
  }
  async getRandomProductsName() {
    const selectedProductsName =
      await productsLocator.selectedRandomProductsName;

    const allSelectedProductsName = [];
    for (let i = 0; i < selectedProductsName.length; i++) {
      const product = await selectedProductsName[i].getText();
      allSelectedProductsName.push(product);
    }
    return allSelectedProductsName;
    
  }
  async getRandomProductsPrice() {
    const selectedProductsPrice =
      await productsLocator.selectedRandomProductsPrice;
    const allProductsPrice = [];
    for (let i = 0; i < selectedProductsPrice.length; i++) {
      const price = await selectedProductsPrice[i].getText();
      allProductsPrice.push(price);
    }
    return allProductsPrice;
  }
  async getCheckoutProductsName() {
    const checkoutProducts = await checkoutOverviewLocator.multipleProductName;
    const allProducts = [];
    for (let i = 0; i < checkoutProducts.length; i++) {
      const product = await checkoutProducts[i].getText();
      allProducts.push(product);
    }
    return allProducts;
    
  }
}
module.exports = new AddToCartProduct();
