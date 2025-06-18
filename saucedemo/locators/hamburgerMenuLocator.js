class HamburgerMenuLocator{

    get hamburgerMenu() {
    return $("//button[@id='react-burger-menu-btn']");
  }
}
module.exports = new HamburgerMenuLocator();