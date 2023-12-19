Feature: User Authentication tests

  Background: 
    Given User navigates to the application
    #And User click on the login link

  Scenario: Login should be success
    And User enter the username as "carrier-tester@gotoblink.com"
    And User enter the password as "I am a carrier"
    When User click on the login button
    Then Login should be success as "carrier-tester@gotoblink.com"

  Scenario: Login should not be success
    Given User enter the username as "carrier-tester@gotoblink.com"
    Given User enter the password as "I am NOT a carrier"
    When User click on the login button
    But Login should fail