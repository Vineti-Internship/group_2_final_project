const assert = require('assert');
const HomePageObject = require('pages/HomePageObject').default;
const HomeConfig = require('configurations/HomePageConfiguration');
const SignInPageObject = require('pages/SignInPageObject').default;
const SignInConfig = require('configurations/SignInConfiguration');
const SignUpPageObject = require('pages/SignUpPageObject').default;
const SignUpConfig = require('configurations/SignUpConfiguration');
const ShopPageObject = require('pages/ShopPageObject').default;
const ShopConfig = require('configurations/ShopPageConfiguration');
const ProductPageObject = require('pages/ProductPageObject').default;
const ProductConfig = require('configurations/ProductPageConfiguration');
let homePageObject = new HomePageObject(HomeConfig);
let signInPageObject = new SignInPageObject(SignInConfig);
let signUpPageObject = new SignUpPageObject(SignUpConfig);
let shopPageObject = new ShopPageObject(ShopConfig);
let productPageObject = new ProductPageObject(ProductConfig);
describe('Take order (example)', () => {
    it('sign up with Email "ellavinetiam@gmail.com" and password "zzzzzz"', () => {
        homePageObject.navigateToInstacart();
        homePageObject.clickOnSignUpButton();
        signUpPageObject.setFirstName('Ella');
        signUpPageObject.setLastName('Harutyunyan');
        signUpPageObject.setEmail('ellavinetiam@gmail.com');
        signUpPageObject.setAddress();
        signUpPageObject.setPhoneNumber('+37411575070');
        signUpPageObject.setPassword();
        signUpPageObject.setConfirmPassword();
        signUpPageObject.clickOnSignUpButton();
        const homeText = homePageObject.getHomeText();
        assert.equal(homeText, 'Time to eat ...');        
    })
    it('sign in with Email "ellavinetiam@gmail.com" and password "zzzzzz"', () => {
        homePageObject.clickOnSignInButton();
        signInPageObject.setEmail('ellavinetiam@gmail.com');
        signUpPageObject.setPassword();
        signInPageObject.clickOnSubmitButton();
        const signOutText = signInPageObject.getSignOutText();
        assert.equal(signOutText, 'SIGN OUT');
    })
    it('add products to card', () => {
        shopPageObject.clickOnGiantShop();
        productPageObject.setFirstProductAmount('3');
        productPageObject.clickOnFirstProductAddToCard();
        productPageObject.clickOnShopButton();
        shopPageObject.clickOnPosShop();
        productPageObject.clickOnFirstProductAddToCard();
        productPageObject.clickOnCard();
        const totalCost = productPageObject.getTotalCost();
        assert.equal(totalCost, 'Total Cost 13460');
    })
    it('choose premium courier and place order', () => {
        productPageObject.clickOnSelectCourier();
        productPageObject.clickOnChoosePremiumCourier();
        productPageObject.clickOnPlaceOrder();
    })
})