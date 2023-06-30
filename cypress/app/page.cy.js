import Home from "@/app/page";

describe('<Home />', () => {
    it('should render all the sections', () => {
        cy.mount(<Home />);

        cy.get('[data-test="nav-bar"]').should('exist');
        cy.get('[data-test="hero-section"]').should('exist');
        cy.get('[data-test="brands-section"]').should('exist');
        cy.get('[data-test="core-section"]').should('exist');
        cy.get('[data-test="overview-section"]').should('exist');
        cy.get('[data-test="consulting-service-section"]').should('exist');
        cy.get('[data-test="product-service-section"]').should('exist');
        cy.get('[data-test="footer"]').should('exist');
    })
})