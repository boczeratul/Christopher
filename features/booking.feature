Feature: RAW Booking
  In order to get seats at RAW
  As a software engineer 
  I want to build an automatic booking software!

  # Scenario: Browse the website
  #   Given I am on "home" page
  #   Then I should see "superContainer" div

  Scenario: Book a seat
    Given I am on "booking" page
    And I can see "Panel_Booking" div
    When I choose option "2" from "DropDownList_People" dropdown
    And I wait for "2" seconds
    And I write "2015-04-07" in "TextBox_Date"
    And I write "李玄" in "TextBox_FName"
    And I write "boczeratul@gmail.com" in "TextBox_Email"
    And I write "0939686300" in "TextBox_PNumber"
    And I wait for "2" seconds
    And I write "李玄" in "TextBox_PName"
    And I write "0939686300" in "TextBox_PTel"
    And I write "boczeratul@gmail.com" in "TextBox_PEMail"
    And I choose option "Card" from "DropDownList_Payment" dropdown
    And I click "1" for "RadioButtonList_InvoiceType" radio
    And I click "LinkButton_Send" button
    Then I should wait for "5" seconds