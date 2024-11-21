Feature: Checkout Item

    Background:
        Given User access url

    Scenario: Checkout 1 item with random picked
        When User input valid credential
        * User click on "Login" button
        Then User already on homepage
        When User select 1 item randomly
        * User click on cart icon
        Then User already on cart page
        * User click on "Remove" item button
        * User click on checkout button
        * User fill the form checkout information
        * User click on continue button
        * User click on finish button
        Then Verify user success checkout

    Scenario: Checkout 2 item with random picked
        When User input valid credential
        * User click on "Login" button
        Then User already on homepage
        When User select 2 item randomly
        * User click on cart icon
        Then User already on cart page
        * User click on "Remove" item button
        * User click on checkout button
        * User fill the form checkout information
        * User click on continue button
        * User click on finish button
        Then Verify user success checkout