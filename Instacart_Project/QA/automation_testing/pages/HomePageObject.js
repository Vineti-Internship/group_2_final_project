const BasePageObject = require('./BasePageObject.js').default

module.exports['default'] = class HomePageObject extends BasePageObject{
    constructor(selector) {
        super();
        this.selector = selector;
    }

    navigateToInstacart(){
        this.open('http://localhost:3001/');
    }

    clickOnSignUpButton(){
        this.click(this.selector.signUp);
    }
    clickOnSignInButton(){
        this.click(this.selector.signIn);
    }
    clickOnSignOutButton(){
        this.click(this.selector.signOut);
    }
    getHeaderText(){
        return browser.element(this.selector.signUpPageText).getText();
    }
    getHomeText(){
        return browser.element(this.selector.homePageText).getText();
    }

}