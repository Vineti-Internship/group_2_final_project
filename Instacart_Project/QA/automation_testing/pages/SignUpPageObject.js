const BasePageObject = require('./BasePageObject.js').default

module.exports['default'] = class SignUpPageObject extends BasePageObject{
    constructor(selector) {
        super();
        this.selector = selector;
      }

    getHeaderText(){
        return browser.element(this.selector.signUpPageText).getText();
    }

    setEmail(email){
        this.setValue(this.selector.emailField, email)
    }

    setPassword(password){
        this.setValue(this.selector.passField, password)
    }

    // getEmailLabel(){
    //     return this.getValue(this.selector.emailLabel);
    // }

    // getPassLabel(){
    //     return this.getValue(this.selector.passLabel);
    // }

}