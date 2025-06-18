class Error {

    get errorMessage() {
    return $("//h3[@data-test='error']");
  }
}
module.exports = new Error();