const BasePageObject = require('./BasePageObject.js').default

module.exports['default'] = class ProductPageObject extends BasePageObject{
    constructor(selector) {
        super();
        this.selector = selector;
    }
    getFirstProductText(){
        return browser.element(this.selector.firstProduct).getText();
    }
    getSecondProductText(){
        return browser.element(this.selector.secondProduct).getText();
    }
    getFirstProductPriceText(){
        return browser.element(this.selector.firstProductPrice).getText();
    }
    setFirstProductAmount(amount){
        this.setValue(this.selector.firstProductInput, amount);
    }
    clickOnFirstProductAddToCard(){
        this.click(this.selector.firstProductAddToCard);
        browser.pause(2000);
    }
    clickOnSecondProductAddToCard(){
        this.click(this.selector.secondProductAddToCard);
        browser.pause(2000);
    }
    clickOnThirProductAddToCard(){
        this.click(this.selector.thirdProductAddToCard);
        browser.pause(2000);
    }
    clickOnCard(){
        this.click(this.selector.card);
        browser.pause(2000);
    }
    clickOnDeleteFirstProduct(){
        this.click(this.selector.deleteProduct);
        browser.pause(2000);
    }
    getTotalCost(){
        return browser.element(this.selector.totalCost).getText();
    }
    clickOnShopButton(){
        this.click(this.selector.shop);
    }
    clickOnSelectCourier(){
        this.click(this.selector.selectCourier);
    }
    clickOnChooseFreeCourier(){
        this.click(this.selector.chooseFreeCourier);
    }
    clickOnChoosePremiumCourier(){
        this.click(this.selector.choosePremiumCourier);
    }
    clickOnPlaceOrder(){
        this.click(this.selector.placeOrder);
    }
}