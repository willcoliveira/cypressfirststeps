import commonPage from '../fixtures/pages/common';
import listingPage from '../fixtures/pages/listing'

const common = new commonPage();
const listing = new listingPage();

describe('Listing Page - TV', () => {
    beforeEach(() => {
        cy.visit('/TV-Hi-Fi-MP3/h12#bl=MMtv'); 
    });

    it('should display tv header title', () => {
        common.checkPageURL('TV')
        common.checkPageTitle('tv')
    });

    it('should display home page link', () => {
        listing.checkHomePageLink()
    });
    
    it('should redirect to product detail page when click', () => {
        common.checkPageSections('tv')
    });
});