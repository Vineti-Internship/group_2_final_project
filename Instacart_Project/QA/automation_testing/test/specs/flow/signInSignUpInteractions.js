// const assert = require('assert');
// const HomePageObject = require('pages/HomePageObject').default;
// const HomeConfig = require('configurations/HomePageConfiguration');
// const SignInPageObject = require('pages/SignInPageObject').default;
// const SignInConfig = require('configurations/SignInConfiguration');
// const SignUpPageObject = require('pages/SignUpPageObject').default;
// const SignUpConfig = require('configurations/SignUpConfiguration');
// let homePageObject = new HomePageObject(HomeConfig);
// let signInPageObject = new SignInPageObject(SignInConfig);
// let signUpPageObject = new SignUpPageObject(SignUpConfig);
// describe('SignIn SignUp interactions', () => {
//     describe('Positive tests', () =>{
//         it('sign up with valid data', () => {
//             homePageObject.navigateToInstacart();
//             homePageObject.clickOnSignUpButton();
//             signUpPageObject.setFirstName();
//             signUpPageObject.setLastName();
//             signUpPageObject.setEmail('user@bk.am');
//             signUpPageObject.setAddress();
//             signUpPageObject.setPhoneNumber();
//             signUpPageObject.setPassword();
//             signUpPageObject.setConfirmPassword();
//             signUpPageObject.clickOnSignUpButton();
//             const homeText = homePageObject.getHomeText();
//             assert.equal(homeText, 'Time to eat ...');
//         })
//         it('sign in with the same data', () =>{
//             homePageObject.clickOnSignInButton();
//             signInPageObject.setEmail('user@bk.am');
//             signInPageObject.setPassword('zzzzzz');
//             signInPageObject.clickOnSubmitButton();
//             const signOutText = signInPageObject.getSignOutText();
//             assert.equal(signOutText, 'SIGN OUT');
//         })
//     })
//     describe('Negative tests', () =>{
//         it('sign up with Email "john@gmail.com" and password "zzzzzz"', () => {
//             homePageObject.clickOnSignOutButton();
//             homePageObject.clickOnSignUpButton();
//             signUpPageObject.setFirstName();
//             signUpPageObject.setLastName();
//             signUpPageObject.setEmail('john@gmail.com');
//             signUpPageObject.setAddress();
//             signUpPageObject.setPhoneNumber();
//             signUpPageObject.setPassword();
//             signUpPageObject.setConfirmPassword();
//             signUpPageObject.clickOnSignUpButton();
//             const homeText = homePageObject.getHomeText();
//             assert.equal(homeText, 'Time to eat ...');
//         })
//         it('sign in with blank Email and password "zzzzzz"', () => {
//             homePageObject.clickOnSignInButton();
//             signInPageObject.setPassword('zzzzzz');
//             signInPageObject.clickOnSubmitButton();
//             const errorMessege = signInPageObject.getErrorMessege();
//             assert.equal(errorMessege, 'Wrong email or password');
//         })
//         it('sign in with Email "john@gmail.com" and blank password', () => {
//             homePageObject.clickOnSignUpButton();
//             homePageObject.clickOnSignInButton();
//             signInPageObject.setEmail('john@gmail.com');
//             const errorMessege = signInPageObject.getErrorMessege();
//             assert.equal(errorMessege, 'Wrong email or password');
//         })
//         it('sign in with blank Email and blank password', () => {
//             homePageObject.clickOnSignUpButton();
//             homePageObject.clickOnSignInButton();
//             const errorMessege = signInPageObject.getErrorMessege();
//             assert.equal(errorMessege, 'Wrong email or password');
//         })
//         it('sign in with Email "john1@gmail.com" and password "zzzzzz"', () => {
//             signInPageObject.setEmail('john1@gmail.com');
//             signInPageObject.setPassword('zzzzzz');
//             const errorMessege = signInPageObject.getErrorMessege();
//             assert.equal(errorMessege, 'Wrong email or password');
//         })
//         it('sign in with Email "john@gmail.com" and password "zzzzzZ"', () => {
//             signInPageObject.setEmail('john@gmail.com');
//             signInPageObject.setPassword('zzzzzZ');
//             const errorMessege = signInPageObject.getErrorMessege();
//             assert.equal(errorMessege, 'Wrong email or password');
//         })

//     })
// })