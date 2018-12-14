const BasePageObject = require('./BasePageObject.js').default

module.exports['default'] = class SignUpPageObject extends BasePageObject{
    constructor(selector) {
        super();
        this.selector = selector;
      }
    clickOnSignUpButton(){
        this.click(this.selector.signUpSubmit);
        browser.pause(2000);
    }
    getHeaderText(){
        return browser.element(this.selector.signUpPageText).getText();
    }
    getEmailErrorMessege(){
        return browser.element(this.selector.signUpEmailError).getText();
    }
    getFirstNameErrorMessege(){
        return browser.element(this.selector.signUpFirstNameError).getText();
    }
    getLastNameErrorMessege(){
        return browser.element(this.selector.signUpLastNameError).getText();
    }
    getAddressErrorMessege(){
        return browser.element(this.selector.signUpAddressError).getText();
    }
    getPassErrorMessege(){
        return browser.element(this.selector.signUpPassError).getText();
    }
    getConfPassErrorMessege(){
        return browser.element(this.selector.signUpConfPassError).getText();
    }
    getPhoneErrorMessege(){
        return browser.element(this.selector.signUpPhoneError).getText();
    }
    setEmail(email = 'info@info.com'){
        this.setValue(this.selector.emailField, email);
    }
    setLongEmail(){
        this.setValue(this.selector.emailField, "infodacaddddddddcccccccccccccccccccaddddddddddddddddd1111111111111111111111111115333333333333333333333333333333333333333333333333338888888888888888888888888888888888888888888888877777777777777777777777777777777777777777@email.am");
    }
    setPassword(password = 'zzzzzz'){
        this.setValue(this.selector.passField, password);
    }
    setLongPassword(){
        this.setValue(this.selector.passField, 'infodacaddddddddcccccccccccccccccccaddddddddddddddddd1111111111111111111111111115333333333333333333333333333333333333333333333333338888888888888888888888888888888888888888888888877777777777777777777777777777777777777777');
    }
    setConfirmPassword(confirmPassword = 'zzzzzz'){
        this.setValue(this.selector.passConfirmField, confirmPassword);
    }
    setLongConfirmPassword(){
        this.setValue(this.selector.passConfirmField, 'infodacaddddddddcccccccccccccccccccaddddddddddddddddd1111111111111111111111111115333333333333333333333333333333333333333333333333338888888888888888888888888888888888888888888888877777777777777777777777777777777777777777');
    }
    setFirstName(firstName = 'John'){
        this.setValue(this.selector.firstNameField, firstName);
    }
    setLongFirstName(){
        this.setValue(this.selector.firstNameField, 'Ajknsdkdncksdcisudcbidusbciubciudbciudbiudbcdbcuidbcdbciudbciudwhodcjiwjcwdjciwjocjdicjwdoicjwoicjdoicjdicjdwcjowdicjdoicjodwijcoijcoiwdjcowdjcoidwjcoidwjcoidjcoidjcwdoicjoidwcjoidjcoiwdjcowjcoiwdjciwdjcowdjcoiwdjcow');
    }
    setLastName(lastName = 'Smith'){
        this.setValue(this.selector.lastNameField, lastName);
    }
    setLongLastName(){
        this.setValue(this.selector.lastNameField, 'Ajknsdkdncksdcisudcbidusbciubciudbciudbiudbcdbcuidbcdbciudbciudwhodcjiwjcwdjciwjocjdicjwdoicjwoicjdoicjdicjdwcjowdicjdoicjodwijcoijcoiwdjcowdjcoidwjcoidwjcoidjcoidjcwdoicjoidwcjoidjcoiwdjcowjcoiwdjciwdjcowdjcoiwdjcow');
    }
    setAddress(){
        this.setValue(this.selector.addressField, '445 Mount Eden Road, Mount Eden, Auckland');
    }
    setLongAddress(){
        this.setValue(this.selector.addressField, 'dskjcnskjcnkjsncljkj skjcnsdkjcnkjsdcksjdnckjsdnckjsnckjnsdkj dskjcnsdkjcnksjdncksdnckjsdcnjk sdjcnsjdkcnkjsndcjskckjsndc skjcnsdkjcnksjdcnkjsdnc sdkcnsdkjcndskjcnksjdc sdkjcnsdkjcnkjsncsdkjnckjsnckjsdnckjsndkjcsd cdcnd');
    }
    setPhoneNumber(phone = '+37494949494'){
        this.setValue(this.selector.phoneNumberField, phone);
    }
    setLongPhoneNumber(){
        this.setValue(this.selector.phoneNumberField, '+51616516816515616516489461651331186416555555555555555111111111184861335555555555555351688888888888888888888888888888111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333');
    }

    

}