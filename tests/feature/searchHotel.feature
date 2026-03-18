Feature: Search Hotel functionality in adactin website
Scenario: Search hotel with valid details
Given user navigates to the adactin website
When the user enters the userName
And the user enters the password
And the user clicks the login button
Then user navigates to the search hotel page
When the user selects location
And the user selects hotel 
And the user selects room type 
And the user selects number of rooms 
And the user enters check in date 
And the user enters check out date 
And the user selects adults per room 
And the user selects children per room 
And the user clicks the search button
Then the user should see the Select Hotel page