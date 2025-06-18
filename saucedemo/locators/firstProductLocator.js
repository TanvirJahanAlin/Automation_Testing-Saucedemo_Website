class FirstProductLocator {
  get firstProduct() {
    return $("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']");
  }
  get firstProductName(){
    return $("//div[contains(text(),'T-Shirt (Red)')]");
  }
  get firstProductPrice(){
    return $("(//div[contains(text(), '$')])[1]");
  }

}
module.exports = new FirstProductLocator();