class SortProductLocator {
  get sortProductDropDown() {
    return $("//select[@class='product_sort_container']");
  }
  get sortZtoA(){
    return $("//option[@value='za']");
  }
}
module.exports = new SortProductLocator();
