const BasePageObject = require('./BasePageObject.js').default

module.exports['default'] = class SignInPageObject extends BasePageObject{
    constructor(selector) {
        super();
        this.selector = selector;
      }
    }