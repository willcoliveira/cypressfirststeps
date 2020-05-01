const selectors = {
    pageTitle : '.f-nodePage__title',
    sectionEntry : '.Strate-title'
};

class commonPage {
    checkPageSections(page) {
        switch (page) {
            case 'home':
                cy.get(selectors.sectionEntry)
                    .should($sectionList => {
                        expect($sectionList, '4 sections and footer').to.have.length(5);
                        expect($sectionList.eq(0), 'The best opportunities').to.have.text('AS MELHORES OPORTUNIDADES SEM SAIR DE CASA ;)');
                        expect($sectionList.eq(1), 'News').to.have.text('CHEGA PRIMEIRO ÀS NOVIDADES ');
                        expect($sectionList.eq(2), 'Selected for you').to.have.text('espreita o que selecionámos para ti!');
                        expect($sectionList.eq(3), 'Recommendations').to.have.text('Estas recomendações são inspiradas no teu histórico de navegação e nas tuas compras.');
                        expect($sectionList.eq(4), `Expert's advise`).to.have.text('Conselhos dos nossos Expert');
                });
                break;
            case 'tv':
                cy.get(selectors.sectionEntry)
                    .should($sectionList => {
                        expect($sectionList, '9 sections and footer').to.have.length(9);
                        expect($sectionList.eq(0), 'On Sale').to.have.text('Em Promoção');
                        expect($sectionList.eq(1), 'Stay at Home').to.have.text('#stayathome: TV e Filmes');
                        expect($sectionList.eq(2), 'Online Tvs').to.have.text('TV Exclusivos Online');
                        expect($sectionList.eq(3), 'Categories').to.have.text('Por Categoria');
                        expect($sectionList.eq(4), 'SoundBars').to.have.text('Soundbars');
                        expect($sectionList.eq(5), 'Main Brands').to.have.text('Principais Marcas');
                        expect($sectionList.eq(6), 'You May Also Like').to.have.text('Também poderás gostar de');
                        expect($sectionList.eq(7), 'Recommendations').to.have.text('Estas recomendações são inspiradas no teu histórico de navegação e nas tuas compras.');
                        expect($sectionList.eq(8), `Expert's advise`).to.have.text('Conselhos dos Nossos Experts');
                    });
                break;
        }
    }

    checkPageTitle(page) {
        switch (page) {
            case 'home':
                cy.get(selectors.pageTitle)
                    .should('not.be.visible')
                break;
            case 'tv':
                cy.get(selectors.pageTitle)
                    .should('contain', 'TV e Home Cinema')
                break;
        }
    }

    checkPageURL(url) {
        cy.url().should('contain', url);
    }
}

export default commonPage;
