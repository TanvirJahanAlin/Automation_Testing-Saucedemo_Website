const login = require("../pages/login");
const resetAppState = require("../pages/resetAppState");
const addToCartProduct = require("../pages/addToCartProducts");
const addFirstProductToCart = require("../pages/addFirstProductToCart");
const checkoutInformation = require("../pages/checkoutInformation");
const successfulOrder = require("../pages/successfulOrder");
const logout = require("../pages/logout");

const username = "standard_user";
const password = "secret_sauce";

const firstName = "Tanvir Jahan";
const lastName = "Alin";
const postalCode = 1217;

describe("Verify the order with standard_user", () => {
  it("Verify the login and reset the app state", async () => {
    await login.usernameInput(username);
    await browser.pause(1000);
    await login.passwordInput(password);
    await browser.pause(1000);
    await login.loginButton();
    await browser.pause(1000);

    //reset app state
    await resetAppState.resetAppState();
    await browser.pause(2000);
  });
  it("Randomly choose three products", async () => {
    await addToCartProduct.addRandomProductToCart();
    await browser.pause(1000);
  });

  it("Navigate to the final checkout page", async () => {
    await addFirstProductToCart.cartIconClick();
    await addFirstProductToCart.checkoutButtonClick();

    await checkoutInformation.firstNameInput(firstName);
    await checkoutInformation.lastNameInput(lastName);
    await checkoutInformation.postalCodeInput(postalCode);

    await checkoutInformation.continueButton();
    await browser.pause(1000);
  });
  it("Verfying products name and prices", async () => {
    await expect(await addToCartProduct.getRandomProductsName()).toEqual(
      await addToCartProduct.getCheckoutProductsName()
    );

    let productsPrice = await addToCartProduct.getRandomProductsPrice();
    let totalProductPrice = 0;
    for (let i = 0; i < productsPrice.length; i++) {
      totalProductPrice += Number(productsPrice[i].split("$")[1]);
    }
    let totalTax = await addFirstProductToCart.getCheckoutOverviewTax();
    totalTax = Number(totalTax.split("$")[1]);

    let totalPrice = totalProductPrice + totalTax;
    let totalCheckoutPrice =
      await addFirstProductToCart.getCheckoutOverviewTotalPrice();
    totalCheckoutPrice = Number(totalCheckoutPrice.split("$")[1]);
    await expect(totalCheckoutPrice).toEqual(totalPrice);
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
    await browser.pause(1000);
    await logout.clickLogoutButton();
    await browser.pause(1000);
  });
});
