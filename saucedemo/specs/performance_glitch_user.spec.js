const login = require("../pages/login");
const resetAppState = require("../pages/resetAppState");
const addFirstProductToCart = require("../pages/addFirstProductToCart");
const sortingProduct = require("../pages/sortingProduct");
const checkoutInformation = require("../pages/checkoutInformation");
const successfulOrder = require("../pages/successfulOrder");
const logout = require("../pages/logout");

const username = "performance_glitch_user";
const password = "secret_sauce";

const firstName = "Tanvir Jahan";
const lastName = "Alin";
const postalCode = 1217;

describe("Verifying the order with performance_glitch_user", () => {
  it("Verifying successful login and reset app state", async () => {
    await login.usernameInput(username);
    await browser.pause(2000);
    await login.passwordInput(password);
    await browser.pause(2000);
    await login.loginButton();
    await browser.pause(2000);

    //reset app state
    await resetAppState.resetAppState();
    await browser.pause(2000);
  });

  it("Sorting Z to A", async () => {
    await sortingProduct.sortingProductZtoA();
    await browser.pause(3000);
  });

  it("Successfully add first product to cart", async () => {
    await addFirstProductToCart.firstProduct();
    await addFirstProductToCart.cartIconClick();
    await addFirstProductToCart.checkoutButtonClick();
  });

  it("Navigate to final checkout page", async () => {
    await checkoutInformation.firstNameInput(firstName);
    await browser.pause(3000);

    await checkoutInformation.lastNameInput(lastName);
    await browser.pause(3000);

    await checkoutInformation.postalCodeInput(postalCode);
    await browser.pause(3000);

    await checkoutInformation.continueButton();
    await browser.pause(3000);
  });

  it("Verifying product name and total price", async () => {
    await expect(
      await addFirstProductToCart.getCheckoutOverviewProductName()
    ).toEqual(await addFirstProductToCart.getFirstProductName());

    let checkoutTotalPrice =
      await addFirstProductToCart.getCheckoutOverviewTotalPrice();
    let firstProductPrice = await addFirstProductToCart.getFirstProductPrice();
    let tax = await addFirstProductToCart.getCheckoutOverviewTax();

    checkoutTotalPrice = Number(checkoutTotalPrice.split("$")[1]);
    firstProductPrice = Number(firstProductPrice.split("$")[1]);
    tax = Number(tax.split("$")[1]);

    totalPrice = firstProductPrice + tax;

    await expect(checkoutTotalPrice).toEqual(totalPrice);
  });

  it("Verifying successful order message", async () => {
    await successfulOrder.clickFinishButton();
    await browser.pause(2000);
    await expect(await successfulOrder.getOrderMessage()).toContain(
      "Thank you for your order!"
    );
  });

  it("Successfully reset app state and logout", async () => {
    await resetAppState.resetAppState();
    await browser.pause(2000);
    await logout.clickLogoutButton();
    await browser.pause(2000);
  });
});
