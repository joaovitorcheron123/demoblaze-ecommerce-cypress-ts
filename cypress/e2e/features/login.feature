Feature: User Login

Scenario: User should be able to log in successfully
  Given that the home page is loaded
  When the user clicks on "Log In" button at the top of the page
  Then the Log In window should be displayed
  When the user enters a valid username and password
  And the user click on Log in in the modal
  Then the user should be redirected to the home page