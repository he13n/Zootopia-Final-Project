
Cypress.Commands.add('login', (email, password) => { 
    cy.get(':nth-child(5) > .imail').type('kankavae+1@gmail.com')
    cy.get('.ipass').type("elene123")
    cy.get('.avtorization > .input-shablon > .form-button').click()

})

Cypress.Commands.add('addToBasket', () => { 
    cy.get('.popmenu-burger').click()
    cy.get('[imgsrc="/uploads/ProductCategory/335031597313845.png"] > [href="javascript:void(0)"]').click()
    cy.get('.cat-down.active > .category-holder > :nth-child(1) > .category-drop-title').click()
    cy.get('.category-holder > .active > :nth-child(2) > a').click()
    cy.get(':nth-child(1) > .price-cart > .product-cart').click()

})
