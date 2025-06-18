class CheckoutOverviewLocator {
  get singleProductName() {
    return $("//div[contains(@class,'inventory_item_name')]");
  }
  get multipleProductName() {
    return $$(`//div[contains(@class,'inventory_item_name')]`);
  }
  get tax() {
    return $("//div[@class='summary_tax_label']");
  }
  get totalPrice() {
    return $("//div[@class='summary_total_label']");
  }
  get finishButton() {
    return $("//button[@id='finish']");
  }
  get successfulOrderMessage(){
    return $("//h2[contains(text(),'Thank you for your order!')]");
  }
  
}
module.exports = new CheckoutOverviewLocator();
