// const assert = require('assert');
// const HomePageObject = require('pages/HomePageObject').default;
// const HomeConfig = require('configurations/HomePageConfiguration');
// const SignInPageObject = require('pages/SignInPageObject').default;
// const SignInConfig = require('configurations/SignInConfiguration');
// let homePageObject = new HomePageObject(HomeConfig);
// let signInPageObject = new SignInPageObject(SignInConfig);
// describe('SignIn functionality', () => {
//     describe('General', () =>{
//         it('sign in Text is correct', () => {
//             homePageObject.navigateToInstacart();
//             homePageObject.clickOnSignInButton();
//             const signInText = signInPageObject.getHeaderText();
//             assert.equal(signInText, 'Sign In');
//         })
//     })
//     describe('Email and Password fields positive tests', () =>{
//         it('sign in with valid Email and Password', () => {
//             signInPageObject.setEmail();
//             signInPageObject.setPassword();
//             signInPageObject.clickOnSubmitButton();
//             const signOutText = signInPageObject.getSignOutText();
//             assert.equal(signOutText, 'SIGN OUT');
//         })
//     })
//     describe('Boundary values of Email field', () =>{
//         it('sign in with long Email (256 characters)', () => {
//             homePageObject.clickOnSignOutButton();
//             homePageObject.clickOnSignInButton();
//             signInPageObject.setLongEmail();
//             signInPageObject.setPassword();
//             signInPageObject.clickOnSubmitButton();
//             const errorMessege = signInPageObject.getErrorMessege();
//             assert.equal(errorMessege, 'Wrong email or password');
//         })
//     })
//     describe('Boundary values of Password field', () =>{
//         it('sign in with long Password (256 characters)', () => {
//             signInPageObject.setEmail();
//             signInPageObject.setLongPassword();
//             signInPageObject.clickOnSubmitButton();
//             const errorMessege = signInPageObject.getErrorMessege();
//             assert.equal(errorMessege, 'Wrong email or password');
//         })
//     })
//     describe('Email negative tests', () =>{
//         it('sign in with blank Email', () => {
//             homePageObject.navigateToInstacart();
//             homePageObject.clickOnSignInButton();
//             signInPageObject.clickOnSubmitButton();
//             const errorMessege = signInPageObject.getErrorMessege();
//             assert.equal(errorMessege, 'Wrong email or password');
//         })
//         it('sign in with Email which is not stored in the database', () => {
//             signInPageObject.setWrongEmail();
//             signInPageObject.setPassword();
//             signInPageObject.clickOnSubmitButton();
//             const errorMessege = signInPageObject.getErrorMessege();
//             assert.equal(errorMessege, 'Wrong email or password');
//         })
//     })
//     describe('Password negative tests', () =>{
//         it('sign in with blank Password', () => {
//             homePageObject.navigateToInstacart();
//             homePageObject.clickOnSignInButton();
//             signInPageObject.clickOnSubmitButton();
//             const errorMessege = signInPageObject.getErrorMessege();
//             assert.equal(errorMessege, 'Wrong email or password');
//         })
//         it('sign in with Password which is not stored in the database', () => {
//             signInPageObject.setEmail();
//             signInPageObject.setWrongPassword();
//             signInPageObject.clickOnSubmitButton();
//             const errorMessege = signInPageObject.getErrorMessege();
//             assert.equal(errorMessege, 'Wrong email or password');
//         })
//     })         
// })