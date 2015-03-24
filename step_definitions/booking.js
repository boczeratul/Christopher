/*jslint indent: 4, node: true, nomen:true */
/*global browser, element, by */

//http://chaijs.com/
var chai = require('chai');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

var pages = {
  "home": "/indexContent.aspx?Language=ch",
  "booking": "/indexContent.aspx?Language=ch#5thPage"
};

var steps = function() {

  this.Given(/^I am on "([^"]*)" page$/, function (pageName, callback) {
    browser.ignoreSynchronization = true; // prevent AngularJS checking
    browser.get(pages[pageName]).then(function () {
      callback();
    });
  });

  this.Then(/^I should see "([^"]*)" div$/, function (appletName, callback) {
    element(by.css('div#'+appletName)).isPresent().then(function (val) {
      expect(val).to.be.true;
      callback();
    });
  });

  this.When(/^I write "([^"]*)" in "([^"]*)"$/, function (inputText, inputName, callback) {
    element(by.css('.'+inputName)).sendKeys(inputText);
    callback();
  });

  this.When(/^I click "([^"]*)" button$/, function (buttonName, callback) {
    browser.sleep(2000);
    element(by.css('#'+buttonName)).click();
    callback();
  });

};

module.exports = steps;