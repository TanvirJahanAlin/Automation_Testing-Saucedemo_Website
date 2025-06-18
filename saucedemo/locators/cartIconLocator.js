class CartIconLocator {
  get cartIcon() {
    return $("//a[@class='shopping_cart_link']");
  }

}
module.exports = new CartIconLocator();