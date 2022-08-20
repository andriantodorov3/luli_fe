describe('Main', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.viewport('macbook-15');
    })

    it('loads', () => {
        cy.contains('Stocks analyst')
    })

    it('can to go frontend page', () => {
        cy.get('.v-navigation-drawer__content .v-list a').eq(1).click();
        cy.url().should('contain', '/feinfo')
    })

    it('can to go backend page', () => {
        cy.get('.v-navigation-drawer__content .v-list a').eq(2).click();
        cy.url().should('contain', '/beinfo')
    })


    it('can submit before filling in the form (use the defaults)', () => {
        cy.get('#search-btn').should('not.be.disabled')
    })


    it('can submit the form with correct inputs', () => {
        cy.get('#date_picker_start').type('2022-08-02T15:37');
        cy.get('#date_picker_end').type('2022-08-03T15:37');
        cy.get('#funds_input').clear().type('1000');
        cy.get('#search-btn').should('not.be.disabled')
    })

    it('cannot submit the form with incomplete data', () => {
        cy.get('#date_picker_start').type('2022-08-02T15:37');
        cy.get('#date_picker_end').type('2022-08-03T15:37');
        cy.get('#funds_input').clear();
        cy.get('#search-btn').should('be.disabled')
    })


    it('submits the form with correct inputs', () => {

        cy.intercept({
                    method: 'POST',
                    url: '/api/v1/stocks/search',
                }, { "buy_point": 1659447173, "buy_point_price": 10, "sell_point": 1659447252, "sell_point_price": 100 }

            ).as('getStocks') // and assign an alias
        cy.get('#date_picker_start').type('2022-08-02T15:37');
        cy.get('#date_picker_end').type('2022-08-03T15:37');
        cy.get('#funds_input').clear().type('1000');
        cy.get('#search-btn').click();
    })



})