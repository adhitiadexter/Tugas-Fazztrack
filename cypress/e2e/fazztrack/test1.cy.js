//test suite
describe('My first  test', () => {
    //test case
    it('verify element page', function(){
        //visit web
        cy.visit('https://b899-13-67-75-93.ngrok.io')

        //verify label "Koligrum Web Playground"
        // cy.get('h1').contains('Koligrum Web Playground')
        cy.get('h1').should($text => {
            expect($text).to.contain('Koligrum Web Playground')
        });

        //verify progress bar
        cy.get('[role="progressbar"]')
            .should('be.visible')
            .and($text => {
                expect($text).to.contain('1 / 10')
            })

        //verify quote testbox
        cy.get('#inputQuote')
        .should('be.visible')
    })
});

describe('Cypress Basic 2', () => {
    it('verify list of option', () => {
        //visit web
        cy.visit('https://b899-13-67-75-93.ngrok.io')

        //get list of option
        cy.get('select.form-control > option')
        .should($list => {
            //total list is 5
            expect($list).to.have.length(5)
        
        //verify all value
        const optionList = ['White', 'Yellow', 'Cyan', 'Magenta', 'Blue'];
        for(let i=0; i < $list.length; i++){
            expect($list.eq(i)).to.contain(optionList[i])
            }
        })
    })

    it.only('check input', function(){
        //visit web
        cy.visit('https://b899-13-67-75-93.ngrok.io')

        //input at least 3 quotes
        let i=0
        let n =3
        let arrayInput = []
        while(i<n){
            //input quote
            let temp = "quote " +(i+1)
            arrayInput.push(temp)
            cy.get('#inputQuote').type(temp)
            i++

        //pilih warna --> pilih warna yg berbeda
            cy.get('#colorSelect')
            .select(i)
        //click button
            cy.get('#buttonAddQuote')
            .click()
        }

        //verify grid view
        //verify jumlah quote benar
        //cy.get('').should('have.length', n)

        //verify quotes yg diinput benar
        cy.get('p[name="quoteText"]').then($listQuotes => {
            for(let j = 0; j < arrayInput.length; j++){
                expect($listQuotes.eq(j+1)).to.contain(arrayInput[j])
            }
        })      
        
        //verify tablenya ada
        cy.get('#tableView')
        .click()

        //hover button table
        cy.get('#buttonShowTable').trigger('mouseover')

        //verify isi table
        cy.get('#tableQuote')
        .should('be.visible')

        //total Quotes is 4 
        cy.get('[name="tableColumnQuote"]')
        .should($quotes => {
            expect($quotes).to.have.length(4)
        })

        //total Color is 4 
        cy.get('[name="tableColumnColor"]')
        .should($color => {
            expect($color).to.have.length(4)
        })
    })
});