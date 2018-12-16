// const assert = require('assert');
// const HomePageObject = require('pages/HomePageObject').default;
// const HomeConfig = require('configurations/HomePageConfiguration');
// const SignInPageObject = require('pages/SignInPageObject').default;
// const SignInConfig = require('configurations/SignInConfiguration');
// const ShopPageObject = require('pages/ShopPageObject').default;
// const ShopConfig = require('configurations/ShopPageConfiguration');
// const ProductPageObject = require('pages/ProductPageObject').default;
// const ProductConfig = require('configurations/ProductPageConfiguration');
// let homePageObject = new HomePageObject(HomeConfig);
// let signInPageObject = new SignInPageObject(SignInConfig);
// let shopPageObject = new ShopPageObject(ShopConfig);
// let productPageObject = new ProductPageObject(ProductConfig);
// describe('Order functionality', () => {
//     describe('Tests for shops', () =>{
//         it('sign in with Email "hakob.hakobyan@gmail.com" and password "123456"', () => {
//             homePageObject.navigateToInstacart();
//             homePageObject.clickOnSignInButton();
//             signInPageObject.setEmail('hakob.hakobyan@gmail.com');
//             signInPageObject.setPassword('123456');
//             signInPageObject.clickOnSubmitButton();
//             const signOutText = signInPageObject.getSignOutText();
//             assert.equal(signOutText, 'SIGN OUT');
//         })
//         it('check that shops are available after sign in', () => {
//             const giantShopText = shopPageObject.getGiantShopText();
//             assert.equal(giantShopText, 'Giant');       
//         })
//         it('check that products are available after clicking on shop', () => {
//             shopPageObject.clickOnGiantShop();
//             const firstProductText = productPageObject.getFirstProductText();
//             assert.equal(firstProductText, 'Macaroni Al Dente');
//         })
//     })
//     describe('Positive tests for products and card', () =>{
//         it('check that products added to card', () => {
//             productPageObject.setFirstProductAmount('5');
//             productPageObject.clickOnFirstProductAddToCard();
//             productPageObject.clickOnCard();
//             productPageObject.clickOnDeleteFirstProduct();
//             const totalCost = productPageObject.getTotalCost();
//             assert.equal(totalCost, 'Total Cost 0');
//         })
//     })
//     describe('Positive tests for shops, products and card', () =>{
//         it('check that products from different shops added to card and cost is correct', () => {
//             homePageObject.navigateToInstacart();
//             productPageObject.clickOnShopButton();
//             shopPageObject.clickOnGiantShop();
//             productPageObject.setFirstProductAmount('1');
//             productPageObject.clickOnFirstProductAddToCard();
//             productPageObject.clickOnShopButton();
//             shopPageObject.clickOnPosShop();
//             productPageObject.clickOnFirstProductAddToCard();
//             productPageObject.clickOnCard();
//             const totalCost = productPageObject.getTotalCost();
//             assert.equal(totalCost, 'Total Cost 11480');
//         })
//     })
// })