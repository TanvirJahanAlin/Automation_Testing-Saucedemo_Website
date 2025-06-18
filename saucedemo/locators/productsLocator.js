class ProductsLocator {
  get products() {
    return $$(`//button[contains(@class,'btn_inventory')]`);
  }
  get selectedRandomProductsName() {
    return $$(`//div[@class='inventory_item_name']`);
  }
  get selectedRandomProductsPrice(){
    return $$(`//div[@class='inventory_item_price']`);
  }
}
module.exports = new ProductsLocator();
