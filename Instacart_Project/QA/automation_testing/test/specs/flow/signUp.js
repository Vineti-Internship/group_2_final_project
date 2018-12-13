const assert = require('assert');
const HomePageObject = require('pages/HomePageObject').default;
const HomeConfig = require('configurations/HomePageConfiguration');
const SignUpPageObject = require('pages/SignUpPageObject').default;
const SignUpConfig = require('configurations/SignUpConfiguration');


    describe('Login functionality', () =>{
        let homePageObject = new HomePageObject(HomeConfig);
        let signUpPageObject = new SignUpPageObject(SignUpConfig);
        it('sign in Text is correct', () => {
            homePageObject.navigateToInstacart();
            homePageObject.clickOnSignUpButton();
            const signUpText = signUpPageObject.getHeaderText();
            assert.equal(signUpText, 'Sign Up');
        })

        // it('Email lable text is correct', ()=>{
        //     signUpPageObject.setEmail();
        //     assert(signUpPageObject.getEmailLabel(), 'Email (phone for mobile accounts)');
        // })

        // it('Password label text is correct', ()=> {
        //     signUpPageObject.setPassword();
        //     assert(signUpPageObject.getPassLabel(), 'Password');
        // })

    })
