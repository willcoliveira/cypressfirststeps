const selectors = {
    link: '.Breadcrumb-link',
    linkSpan: 'span'
};

class listingPage {
    checkHomePageLink() {
        cy.get(selectors.link)
            .should('have.attr', 'href', 'https://www.fnac.pt/')
            .within(() => {
                cy.get(selectors.linkSpan).should('have.text', 'Home')
            }); 
    }
}

export default listingPage;
