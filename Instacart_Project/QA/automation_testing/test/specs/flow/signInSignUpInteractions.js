const assert = require('assert');
const HomePageObject = require('pages/HomePageObject').default;
const HomeConfig = require('configurations/HomePageConfiguration');
const SignInPageObject = require('pages/SignInPageObject').default;
const SignInConfig = require('configurations/SignInConfiguration');
const SignUpPageObject = require('pages/SignUpPageObject').default;
const SignUpConfig = require('configurations/SignUpConfiguration');
let homePageObject = new HomePageObject(HomeConfig);
let signInPageObject = new SignInPageObject(SignInConfig);
let signUpPageObject = new SignUpPageObject(SignUpConfig);
describe('SignIn SignUp interactions', () => {
    describe('Positive tests', () =>{
        it('sign up with valid data and sign in', () => {
            homePageObject.navigateToInstacart();
            homePageObject.clickOnSignUpButton();
            signUpPageObject.setFirstName();
            signUpPageObject.setLastName();
            signUpPageObject.setEmail('user@bk.am');
            signUpPageObject.setAddress();
            signUpPageObject.setPhoneNumber();
            signUpPageObject.setPassword();
            signUpPageObject.setConfirmPassword();
            signUpPageObject.clickOnSignUpButton();
            homePageObject.clickOnSignInButton();
            signInPageObject.setEmail('user@bk.am');
            signInPageObject.setPassword('zzzzzz');
            signInPageObject.clickOnSubmitButton();
            const signOutText = signInPageObject.getSignOutText();
            assert.equal(signOutText, 'SIGN OUT');
        })
    })
})