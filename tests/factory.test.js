describe ("Shoe Catalogue Factory Function", function(){
    describe ("Should be able to filter shoes using color, brand, price and size.", function(){
        it('Should be able to display all shoes from Fendi Brand', function(){
            
            let testShoeCatalogue = shoeCatalogueFactoy();

            
            testShoeCatalogue.filterShoes("Fendi", "All", "All")
            
            assert.deepEqual([], testShoeCatalogue.displayFilter());
        })

        it('Should be able to display all shoes from Louis Vuitton Brand.', function(){
            let testShoeCatalogue = shoeCatalogueFactoy();

            testShoeCatalogue.filterShoes("Louis Vuitton", "All", "All")
            
            assert.deepEqual([],  testShoeCatalogue.displayFilter())
        })

        it('Should be able to display all shoes from  Gucci Brand.', function(){
            let testShoeCatalogue = shoeCatalogueFactoy();

            testShoeCatalogue.filterShoes("Gucci", "All", "All")
            
            assert.deepEqual([],  testShoeCatalogue.displayFilter())
        })

        it('Should be able to display all shoes from Versace Brand.', function(){
            let testShoeCatalogue = shoeCatalogueFactoy();

            testShoeCatalogue.filterShoes("Versace", "All", "All")
            
            assert.deepEqual([],  testShoeCatalogue.displayFilter())
        })

        it('Should be able to display all size 7 shoes when only the size 7 option has been selected.', function(){
            let testShoeCatalogue = shoeCatalogueFactoy();

            testShoeCatalogue.filterShoes("All", "All", "7") 
            
            assert.deepEqual([], testShoeCatalogue.displayFilter())
        })

        it('Should be able to display all "White"; "Nike"; "size: 9" shoes when these options are selected.', function(){
            let testShoeCatalogue = shoeCatalogueFactoy();

            testShoeCatalogue.filterShoes()
            
            assert.deepEqual([], testShoeCatalogue.displayFilter() )
        })

        it('Should be able to return an error when there are no shoes which matches the filtered options', function(){
            let testShoeCatalogue = shoeCatalogueFactoy();
            
            testShoeCatalogue.filterShoes("Adidas", "Black", "5")

            assert.equal("Sorry, no match found.", testShoeCatalogue.displayFilter())
        })

    })
});