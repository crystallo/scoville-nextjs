import { Brands } from '@/components/home/Brands';
import { brandCards } from '../../fixtures/brandCards';

describe('<Brands />', () => {
    it('should render brand cards', () => {
        cy.mount(<Brands />);

        const length = brandCards.length;
        cy.get('[data-test="brand-card"]').should('have.length', length);
    }) 
})