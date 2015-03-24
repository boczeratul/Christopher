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

  this.Then(/^I should see some "([^"]*)"s$/, function (elementName, callback) {
    element.all(by.css('.'+elementName)).then(function(elements) {
      expect(elements.length).to.be.not.empty;
      callback();
    });
  });

  this.Given(/^I have not logged in$/, function (callback) {
    // var username = element(by.css('a.username'));
    // expect(username.getAttribute("innerHTML")).to.be.not.equal('Someone');
    callback();
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

  this.Then(/^I should be redirected to "([^"]*)" page$/, function (pageName, callback) {
    browser.sleep(2000);
    browser.getCurrentUrl().then(function(url){
      expect(url).to.have.string(pages[pageName]);
      callback();
    });
  });

};

module.exports = steps;