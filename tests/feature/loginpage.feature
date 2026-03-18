Feature: The login page of adactin website
Scenario: To test login page using valid credentials
Given user navigates to the adactin website
When the user enters the userName
And the user enters the password
And the user clicks the login button
Then user navigates to the search hotel page

Scenario Outline: To test login page using invalid credentials 
Given user navigates to the adactin website
When user enters the invalid "<userName>" and "<Password>" and "<Result>" clicks the login button
Then user gets the error message

Examples:
|userName||Password||Result|
|vikki||mahes||fail|
|vikki||sachu||fail|
|sachu||vikki||fail|