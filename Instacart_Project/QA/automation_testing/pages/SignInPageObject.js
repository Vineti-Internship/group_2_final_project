const BasePageObject = require('./BasePageObject.js').default

module.exports['default'] = class SignInPageObject extends BasePageObject{
    constructor(selector) {
        super();
        this.selector = selector;
      }
    clickOnSubmitButton(){
        this.click(this.selector.signInSubmit);
        browser.pause(2000);
    }
    getHeaderText(){
        return browser.element(this.selector.signInPageText).getText();
    }
    getSignOutText(){
        return browser.element(this.selector.signOutText).getText();
    }
    setEmail(email = 'arthur.hakobyan@gmail.com'){
        this.setValue(this.selector.emailField, email);
    }
    setWrongEmail(email = 'user70@email.am'){
        this.setValue(this.selector.emailField, email);
    }
    setLongEmail(){
        this.setValue(this.selector.emailField, "infodacaddddddddcccccccccccccccccccaddddddddddddddddd1111111111111111111111111115333333333333333333333333333333333333333333333333338888888888888888888888888888888888888888888888877777777777777777777777777777777777777777@email.am");
    }
    setPassword(password = '123456'){
        this.setValue(this.selector.passField, password);
    }
    setWrongPassword(password = '1234567'){
        this.setValue(this.selector.passField, password);
    }
    setLongPassword(){
        this.setValue(this.selector.passField, 'infodacaddddddddcccccccccccccccccccaddddddddddddddddd1111111111111111111111111115333333333333333333333333333333333333333333333333338888888888888888888888888888888888888888888888877777777777777777777777777777777777777777');
    }
    getErrorMessege(){
        return browser.element(this.selector.errorMessege).getText();
    }
} 