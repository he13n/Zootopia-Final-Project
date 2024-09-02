describe('login with valid credentils', () => {
    beforeEach(() => { cy.visit('https://testzootopia.loremipsum.ge/ka') })
  
  
    it('login with valid credentials', () => {
  
      cy.get('.menu-pop > .rprof').click()
      cy.login('email', 'password')
      cy.contains('.menu-pop > .iprof', 'პროფილი').should('be.visible')
    })
  
    it('registeration with invalid email', () => {
      cy.get('.menu-pop > .rprof').click()
      cy.get('.input-shablon > p > a').click()
      cy.fixture('userData').then((userData) => {
        cy.get(':nth-child(1) > .ismile').type(userData.users[0].fullName)
        cy.get(':nth-child(2) > .imail').type(userData.users[0].email)
        cy.get('.ipir').type(userData.users[0].ID)
        cy.get(':nth-child(4) > .itel').type(userData.users[0].number)
        cy.get(':nth-child(5) > .ipass').type(userData.users[0].password)
        cy.get('.reg-form-left > :nth-child(6) > .ipass').type(userData.users[0].password)
      })
      cy.get('.etx > svg').click()
      cy.get('.regsub').click()
      cy.get('.input-div.alert > .alert > img').should('be.visible')
  
    })
  
    it('registration with valid credentials', () => {
      let random = Math.round((Math.random() * 1000))
      cy.get('.menu-pop > .rprof').click()
      cy.get('.input-shablon > p > a').click()
      cy.fixture('userData').then((userData) => {
        cy.get(':nth-child(1) > .ismile').type(userData.users[1].fullName)
        cy.get(':nth-child(2) > .imail').type("kankavam" + random + "@gmail.com")
        cy.get('.ipir').type("65748363" + random)
        cy.get(':nth-child(4) > .itel').type("577564" + random)
        cy.get(':nth-child(5) > .ipass').type(userData.users[1].password)
        cy.get('.reg-form-left > :nth-child(6) > .ipass').type(userData.users[1].password)
      })
      cy.get('.etx > svg').click()
      cy.get('.regsub').click()
      cy.contains('.menu-pop > .iprof', 'პროფილი').should('be.visible')
  
    })
  
    it('basket', () => {
      cy.addToBasket()
      cy.contains('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"] > #cart-items-count', '1').should('be.visible')
      
    })
  
    it('lowerQuantityTo0', () => {
    cy.addToBasket()
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
    cy.get('.minus').click()
    cy.get('.empty > p').should('be.visible')
      
    })
  
  })
  
  
  
  