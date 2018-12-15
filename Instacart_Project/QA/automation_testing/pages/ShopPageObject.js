const BasePageObject = require('./BasePageObject.js').default

module.exports['default'] = class ShopPageObject extends BasePageObject{
    constructor(selector) {
        super();
        this.selector = selector;
    }
    getGiantShopText(){
        return browser.element(this.selector.giantShop).getText();
    }
    clickOnGiantShop(){
        this.click(this.selector.giantShop);
        browser.pause(2000);
    }
    clickOnPosShop(){
        this.click(this.selector.posShop);
        browser.pause(2000);
    }
}