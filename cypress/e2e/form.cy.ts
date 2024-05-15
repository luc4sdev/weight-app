describe('Fill and submit the form', () => {
  it('Fill in and submit the form', () => {

    cy.visit('http://localhost:3000');

    cy.get('input[name="name"]').type('Nome de Exemplo');
    cy.get('input[name="age"]').type('30');
    cy.get('input[name="height"]').type('180');
    cy.get('input[name="currentweight"]').type('80');
    cy.get('input[name="desiredweight"]').type('70');

    cy.get('input[name="gender"][value="male"]').check();

    cy.get('select[name="activityLevel"]').select('sedentary');

    cy.get('button[type="submit"]').click();

    cy.location('pathname').should('include', '/result')
  });
});
