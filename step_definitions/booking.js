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
        browser.get(pages[pageName]).then(callback);
    });

    this.Given(/^I can see "([^"]*)" div$/, function (divName, callback) {
        browser.wait(function() {
            return browser.isElementPresent(by.css('#' + divName + '[style="display:block"]'));
        }, 30000).then(function() {
            browser.sleep(6000);
            callback();
        });
    });

    this.When(/^I cannot see loading div$/, function (callback) {
        browser.wait(function() {
            return browser.isElementPresent(by.css('#dvLoadingDIV[style="display: none;"]'));
        }, 30000).then(function() {
            callback();
        });
    });

    this.When(/^I write "([^"]*)" in "([^"]*)"$/, function (inputText, inputName, callback) {
        element(by.css('input[name='+inputName+']')).clear();
        element(by.css('input[name='+inputName+']')).sendKeys(inputText).then(callback);
    });

    this.When(/^I click "([^"]*)"$/, function (clickId, callback) {
        element(by.css('#'+clickId)).click().then(callback);
    });

    this.When(/^I choose option "([^"]*)" from "([^"]*)" dropdown \(name\)$/, function (inputOption, dropdownName, callback) {
        element(by.css('select[name="' + dropdownName + '"]')).click();
        element(by.css('select[name="' + dropdownName + '"] option[value="' + inputOption + '"]')).click().then(callback);
    });

    this.When(/^I choose option "([^"]*)" from "([^"]*)" dropdown \(class\)$/, function (inputOption, dropdownClass, callback) {
        element(by.css('select.' + dropdownClass)).click();
        element(by.css('select.' + dropdownClass + ' option[value="' + inputOption + '"]')).click().then(callback);
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
        browser.pause();
        callback();
    });

};

module.exports = steps;