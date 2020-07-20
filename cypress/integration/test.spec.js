it('should open lcl', () =>{
    cy.visit('http://localhost:3000/')


    //Player simulation
    cy.get(':nth-child(6) > :nth-child(3)').click()
    cy.get('.App_wrapper__buttons__2UgTK > :nth-child(1) > :nth-child(2)').click()
    cy.get(':nth-child(8) > :nth-child(3)').click()
    cy.get('.App_wrapper__buttons__2UgTK > :nth-child(1) > :nth-child(2)').click()
    cy.get(':nth-child(6) > :nth-child(6)').click()
    cy.get('.App_wrapper__buttons__2UgTK > :nth-child(1) > :nth-child(2)').click()
    cy.get(':nth-child(4) > :nth-child(3)').click()
    cy.get(':nth-child(5) > :nth-child(3)').click()
    cy.get('div > .App_btn__Kp1bi').click()
    cy.get(':nth-child(2) > span > :nth-child(3)').click()
})