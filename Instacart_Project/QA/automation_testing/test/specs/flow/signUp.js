const assert = require('assert');
const HomePageObject = require('pages/HomePageObject').default;
const HomeConfig = require('configurations/HomePageConfiguration');
const SignUpPageObject = require('pages/SignUpPageObject').default;
const SignUpConfig = require('configurations/SignUpConfiguration');
let homePageObject = new HomePageObject(HomeConfig);
let signUpPageObject = new SignUpPageObject(SignUpConfig);
describe('SignUp functionality', () => {
    describe('Email field positive tests', () =>{
        it('sign up Text is correct', () => {
            homePageObject.navigateToInstacart();
            homePageObject.clickOnSignUpButton();
            const signUpText = signUpPageObject.getHeaderText();
            assert.equal(signUpText, 'Sign Up');
        })
        it('Check that create account with email "user@email.am"', () =>{
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('user@email.am');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37494949494');
            signUpPageObject.setPassword('zzzzzz');
            signUpPageObject.setConfirmPassword('zzzzzz');
            signUpPageObject.clickOnSignUpButton(); 
            const homeText = homePageObject.getHomeText();
            assert.equal(homeText, 'Home');
        })
        it('Check that create account with email “us_us@email.am”', () =>{
            homePageObject.clickOnSignUpButton();
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('us_us@email.am');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37494949494');
            signUpPageObject.setPassword('zzzzzz');
            signUpPageObject.setConfirmPassword('zzzzzz');
            signUpPageObject.clickOnSignUpButton(); 
            const homeText = homePageObject.getHomeText();
            assert.equal(homeText, 'Home');
        })
        it('Check that create account with email “us-us@email.am”', () =>{
            homePageObject.clickOnSignUpButton();
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('us-us@email.am');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37494949494');
            signUpPageObject.setPassword('zzzzzz');
            signUpPageObject.setConfirmPassword('zzzzzz');
            signUpPageObject.clickOnSignUpButton(); 
            const homeText = homePageObject.getHomeText();
            assert.equal(homeText, 'Home');
        })
        it('Check that create account with email “u1234@email.am”', () =>{
            homePageObject.clickOnSignUpButton();
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('u1234@email.am');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37494949494');
            signUpPageObject.setPassword('zzzzzz');
            signUpPageObject.setConfirmPassword('zzzzzz');
            signUpPageObject.clickOnSignUpButton(); 
            const homeText = homePageObject.getHomeText();
            assert.equal(homeText, 'Home');
        })

    })
    describe('Password and Confirm password fields positive tests', () =>{
        it('Check that create account with password “222222”', () =>{
            homePageObject.clickOnSignUpButton();
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('user1@email.am');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37494949494');
            signUpPageObject.setPassword('222222');
            signUpPageObject.setConfirmPassword('222222');
            signUpPageObject.clickOnSignUpButton(); 
            const homeText = homePageObject.getHomeText();
            assert.equal(homeText, 'Home');
        })
        it('Check that create account with password “utyuyu”', () =>{
            homePageObject.clickOnSignUpButton();
            signUpPageObject.setFirstName('Johny');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('user2@email.am');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37494949494');
            signUpPageObject.setPassword('utyuyu');
            signUpPageObject.setConfirmPassword('utyuyu');
            signUpPageObject.clickOnSignUpButton(); 
            const homeText = homePageObject.getHomeText();
            assert.equal(homeText, 'Home');
        })
        it('Check that create account with password “22eeee”', () =>{
            homePageObject.clickOnSignUpButton();
            signUpPageObject.setFirstName('Razmik');
            signUpPageObject.setLastName('Darbinyan');
            signUpPageObject.setEmail('user3@email.am');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37494949494');
            signUpPageObject.setPassword('22eeee');
            signUpPageObject.setConfirmPassword('22eeee');
            signUpPageObject.clickOnSignUpButton(); 
            const homeText = homePageObject.getHomeText();
            assert.equal(homeText, 'Home');
        })
        it('Check that create account with password “admin”', () =>{
            homePageObject.clickOnSignUpButton();
            signUpPageObject.setFirstName('Razmik');
            signUpPageObject.setLastName('Darbinyan');
            signUpPageObject.setEmail('user4@email.am');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37494949494');
            signUpPageObject.setPassword('"admin"');
            signUpPageObject.setConfirmPassword('"admin"');
            signUpPageObject.clickOnSignUpButton(); 
            const homeText = homePageObject.getHomeText();
            assert.equal(homeText, 'Home');
        })
    })
    describe('First Name and Last Name fields positive tests', () =>{
        it('Check that create account with First Name John-Row and Last Name Smith-Smith', () =>{
            homePageObject.clickOnSignUpButton();
            signUpPageObject.setFirstName('John-Row');
            signUpPageObject.setLastName('Smith-Smith');
            signUpPageObject.setEmail('user5@email.am');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37494949494');
            signUpPageObject.setPassword('123456');
            signUpPageObject.setConfirmPassword('123456');
            signUpPageObject.clickOnSignUpButton(); 
            const homeText = homePageObject.getHomeText();
            assert.equal(homeText, 'Home');
        })
    })
    
    describe('Boundary values of Email field', () =>{
        it('Check that create account with Email (256 characters)', () =>{
            homePageObject.clickOnSignUpButton();
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setLongEmail();
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37477661712');
            signUpPageObject.setPassword('123456');
            signUpPageObject.setConfirmPassword('123456');
            signUpPageObject.clickOnSignUpButton(); 
            let errorMessege = signUpPageObject.getEmailErrorMessege();
            assert.equal(errorMessege, 'Invalid Email');
        })
    })
    describe('Boundary values of Password and Confirm Password fields', () =>{
        it('Check that create account with Password (256 characters)', () =>{
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('info@info.com');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37477661712');
            signUpPageObject.setLongPassword();
            signUpPageObject.setLongConfirmPassword();
            signUpPageObject.clickOnSignUpButton(); 
            let errorMessege = signUpPageObject.getPassErrorMessege();
            assert.equal(errorMessege, 'Minimum length of password is 6 characters and maximum is 50');
        })
    })
    describe('Boundary values of First Name and Last Name fields', () =>{
        it('Check that create account with First Name (256 characters)', () =>{
            signUpPageObject.setLongFirstName();
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('info@info.com');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37477661712');
            signUpPageObject.setPassword('zzzzzz');
            signUpPageObject.setConfirmPassword('zzzzzz');
            signUpPageObject.clickOnSignUpButton(); 
            let errorMessege = signUpPageObject.getFirstNameErrorMessege();
            assert.equal(errorMessege, 'Must contain only letters and have size not more than 50 characters');
        })
        it('Check that create account with Last Name (256 characters)', () =>{
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLongLastName();
            signUpPageObject.setEmail('info@info.com');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37477661712');
            signUpPageObject.setPassword('zzzzzz');
            signUpPageObject.setConfirmPassword('zzzzzz');
            signUpPageObject.clickOnSignUpButton(); 
            let errorMessege = signUpPageObject.getLastNameErrorMessege();
            assert.equal(errorMessege, 'Must contain only letters and have size not more than 50 characters');
        })
    })
    describe('Boundary values of Address field', () =>{
        it('Check that create account with Address (256 characters)', () =>{
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('info@info.com');
            signUpPageObject.setLongAddress();
            signUpPageObject.setPhoneNumber('+37477661712');
            signUpPageObject.setPassword('123456');
            signUpPageObject.setConfirmPassword('123456');
            signUpPageObject.clickOnSignUpButton(); 
            let errorMessege = signUpPageObject.getAddressErrorMessege();
            assert.equal(errorMessege, 'Invalid Address');
        })
    })
    describe('Boundary values of Phone Number field', () =>{
        it('Check that create account with Phone Number (256 digits)', () =>{
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('info@info.com');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setLongPhoneNumber();
            signUpPageObject.setPassword('123456');
            signUpPageObject.setConfirmPassword('123456');
            signUpPageObject.clickOnSignUpButton(); 
            let errorMessege = signUpPageObject.getPhoneErrorMessege();
            assert.equal(errorMessege, 'Length of phone number must be 8..50 and start with + sign');
        })
    })
    describe('Email negative tests', () =>{
        it('Invalid email', () =>{
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('user@123.com');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37477661712');
            signUpPageObject.setPassword('123456789');
            signUpPageObject.setConfirmPassword('123456789');
            signUpPageObject.clickOnSignUpButton(); 
            let errorMessege = signUpPageObject.getEmailErrorMessege();
            assert.equal(errorMessege, 'Invalid Email');
        })
        it('Blank email', () =>{
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail(' ');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37477661712');
            signUpPageObject.setPassword('123456789');
            signUpPageObject.setConfirmPassword('123456789');
            signUpPageObject.clickOnSignUpButton(); 
            let errorMessege = signUpPageObject.getEmailErrorMessege();
            assert.equal(errorMessege, 'Invalid Email');
        })
    })
    describe('Boundary values of First Name and Last Name fields', () =>{
        it('First name negative case 1', () =>{
            signUpPageObject.setFirstName(',John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('info@info.com');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37477661712');
            signUpPageObject.setPassword('zzzzzz');
            signUpPageObject.setConfirmPassword('zzzzzz');
            signUpPageObject.clickOnSignUpButton(); 
            let errorMessege = signUpPageObject.getFirstNameErrorMessege();
            assert.equal(errorMessege, 'Must contain only letters and have size not more than 50 characters');
        })
        it('First name negative case 2', () =>{
            signUpPageObject.setFirstName('J+-ohn');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('info@info.com');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37477661712');
            signUpPageObject.setPassword('zzzzzz');
            signUpPageObject.setConfirmPassword('zzzzzz');
            signUpPageObject.clickOnSignUpButton(); 
            let errorMessege = signUpPageObject.getFirstNameErrorMessege();
            assert.equal(errorMessege, 'Must contain only letters and have size not more than 50 characters');
        })
        it('Last name negative case 1', () =>{
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('S&*mith');
            signUpPageObject.setEmail('info@info.com');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37477661712');
            signUpPageObject.setPassword('zzzzzz');
            signUpPageObject.setConfirmPassword('zzzzzz');
            signUpPageObject.clickOnSignUpButton(); 
            let errorMessege = signUpPageObject.getLastNameErrorMessege();
            assert.equal(errorMessege, 'Must contain only letters and have size not more than 50 characters');
        })
    })
    describe('Password and Confirm Password negative tests', () =>{
        it('Password and Confirm password do not match', () =>{
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('info@info.com');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('+37477661712');
            signUpPageObject.setPassword('123456');
            signUpPageObject.setConfirmPassword('12345');
            signUpPageObject.clickOnSignUpButton(); 
            let errorMessege = signUpPageObject.getConfPassErrorMessege();
            assert.equal(errorMessege, 'Confirm password error');
        })
    })
    describe('Phone Number negative tests', () =>{
        it('Phone Number without + sign', () =>{
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('info@info.com');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('37477661712');
            signUpPageObject.setPassword('123456');
            signUpPageObject.setConfirmPassword('123456');
            signUpPageObject.clickOnSignUpButton(); 
            let errorMessege = signUpPageObject.getPhoneErrorMessege();
            assert.equal(errorMessege, 'Length of phone number must be 8..50 and start with + sign');
        })
        it('Phone Number without + sign', () =>{
            signUpPageObject.setFirstName('John');
            signUpPageObject.setLastName('Smith');
            signUpPageObject.setEmail('info@info.com');
            signUpPageObject.setAddress('445 Mount Eden Road, Mount Eden, Auckland');
            signUpPageObject.setPhoneNumber('374ffhhkk77661712');
            signUpPageObject.setPassword('123456');
            signUpPageObject.setConfirmPassword('123456');
            signUpPageObject.clickOnSignUpButton(); 
            let errorMessege = signUpPageObject.getPhoneErrorMessege();
            assert.equal(errorMessege, 'Length of phone number must be 8..50 and start with + sign');
        })
    })

})