import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("User access url", () => {
    cy.visit(Cypress.env("url_link"))
})

When("User input valid credential", () => {
    cy.get('[data-test="username"]').type(Cypress.env("valid_user"));
    cy.get('[data-test="password"]').type(Cypress.env("valid_pass"));
})

When("User click on {string} button", (btn) => {
    cy.contains(btn).click()
})

Then("User already on homepage", () => {
    cy.url().should('eq', Cypress.env("valid_assertion_homepage"))
})

When("User select 1 item randomly", () => {
    cy.get('.btn_inventory').then(($buttons) => {
        const randomIndex = Math.floor(Math.random() * $buttons.length)
        cy.wrap($buttons.get(randomIndex)).click();
    });
    cy.get('.shopping_cart_badge').should('exist');
})

When("User click on cart icon", () => {
    cy.get('[data-test="shopping-cart-link"]').click()
})

Then("User already on cart page", () => {
    cy.url().should('eq', Cypress.env("valid_assertion_cartpage"))
})

When("User click on {string} item button", (btn) => {
    cy.contains(btn).click()
})

When("User click on checkout button", () => {
    cy.get('[data-test="checkout"]').click()
})

When("User fill the form checkout information", () => {
    cy.get('[data-test="firstName"]').type("ardhi")
    cy.get('[data-test="lastName"]').type('wiranata')
    cy.get('[data-test="postalCode"]').type('12345')
})

When("User click on continue button", () => {
    cy.get('[data-test="continue"]').click()
})

When("User click on finish button", () => {
    cy.get('[data-test="finish"]').click()
})

Then("Verify user success checkout", () => {
    cy.url().should('eq', Cypress.env("valid_assertion_co_complete"))
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
})

When("User select 2 item randomly", () => {
    cy.get('.btn_inventory').then(($btn) => {
        const randomIndex1 = Math.floor(Math.random() * $btn.length);
        let randomIndex2 = Math.floor(Math.random() * $btn.length);

        while (randomIndex1 === randomIndex2) {
            randomIndex2 = Math.floor(Math.random() * $btn.length);
        }
        cy.wrap($btn.get(randomIndex1)).click();
        cy.wrap($btn.get(randomIndex2)).click();
    });
    cy.get('.shopping_cart_badge').should('exist');
})