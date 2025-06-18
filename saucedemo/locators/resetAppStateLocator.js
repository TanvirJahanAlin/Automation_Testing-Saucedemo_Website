class ResetAppStateLocator {
  get resetAppState() {
    return $("//a[@id='reset_sidebar_link']");
  }
}
module.exports = new ResetAppStateLocator();
