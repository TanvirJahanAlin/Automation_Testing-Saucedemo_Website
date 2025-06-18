const sortProduct =require ('../locators/sortProductLocator');

class SortingProduct{
  async sortingProductZtoA(){
    await sortProduct.sortProductDropDown.click();
    await browser.pause(2000);

    await sortProduct.sortZtoA.click();

    await browser.pause(5000);

  }

}

module.exports = new SortingProduct();
