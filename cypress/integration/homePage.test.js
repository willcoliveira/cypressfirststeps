import commonPage from '../fixtures/pages/common.js';

const common = new commonPage();

describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('should not display header title', () => {
        common.checkPageURL('https://www.fnac.pt/')
        common.checkPageTitle('home')
    });

    it('should display all available sections', () => {
        common.checkPageSections('home')
    });
});