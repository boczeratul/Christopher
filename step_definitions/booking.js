/*jslint indent: 4, node: true, nomen:true */
/*global browser, element, by */
var pages = {
  "home": "/indexContent.aspx?Language=ch",
  "booking": "/indexContent.aspx?Language=ch#5thPage"
};

var steps = function() {

  this.Given(/^I am on "([^"]*)" page$/, function (pageName, callback) {
    browser.ignoreSynchronization = true; // prevent AngularJS checking
    browser.manage().window().maximize();
    browser.get(pages[pageName]).then(function () {
      browser.sleep(10000);
      callback();
    });
  });

  this.When(/^I write "([^"]*)" in "([^"]*)"$/, function (inputText, inputName, callback) {
    element(by.css('input[name='+inputName+']')).clear();
    element(by.css('input[name='+inputName+']')).sendKeys(inputText).then(callback);
  });

  this.When(/^I click "([^"]*)" button$/, function (buttonName, callback) {
    element(by.css('#'+buttonName)).click().then(callback);
  });

  this.When(/^I choose option "([^"]*)" from "([^"]*)" dropdown$/, function (inputOption, dropdownName, callback) {
    element(by.css('select[name="' + dropdownName + '"]')).click();
    element(by.css('option[value="' + inputOption + '"]')).click().then(callback);
  });

  this.When(/^I click "([^"]*)" for "([^"]*)" radio$/, function (inputOption, radioName, callback) {
    element(by.css('input[name="' + dropdownName + '"][value="' + inputOption + '"]')).click().then(callback);
  });

  this.When(/^I wait for "([^"]*)" seconds$/, function (waitTime, callback) {
    browser.sleep(1000 * waitTime);
    callback();
  });

  this.Then(/^I should see "([^"]*)" div$/, function (appletName, callback) {
    element(by.css('div#'+appletName)).isPresent().then(function (val) {
      callback();
    });
  });

  this.Then(/^I should wait for "([^"]*)" seconds$/, function (waitTime, callback) {
    browser.sleep(1000 * waitTime);
    callback();
  });

};

module.exports = steps;