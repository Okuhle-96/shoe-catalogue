function shoeCatalogueFactoy(){

    var search = undefined;
    var shoes = [{ color : 'black',
                   size  : 3,
                   brand : 'Fendi',
                   price : "R10 750",
                   in_stock: 3
                 },
                 { color : 'white',
                   size  : 4,
                   brand : 'Fendi',
                   price : 'R9 750',
                   in_stock: 3
                 },
                 { color : 'pink',
                   size  : 4,
                   brand : 'Fendi',
                   price : 7250,
                   in_stock: 3
                 },
                 { color : 'pink',
                   size  : 5,
                   brand : 'Gucci',
                   price : 2750,
                   in_stock: 3
                 },
                 { color : 'pink',
                   size  : 6,
                   brand : 'Gucci',
                   price : 9750,
                   in_stock: 3
                 },
                 { color : 'white',
                   size  : 8,
                   brand : 'Fendi',
                   price : 8750,
                   in_stock: 3
                 },
                 { color : 'white',
                   size  : 9,
                   brand : 'Versace',
                   price : 3750,
                   in_stock: 3
                 },
                 { color : 'white',
                   size  : 4,
                   brand : 'Versace',
                   price : 6750,
                   in_stock: 3
                 },
                 { color : 'black',
                   size  : 3,
                   brand : 'Louis Vuitton',
                   price : 8750,
                   in_stock: 3
                 },
                 { color : 'black',
                   size  : 3,
                   brand : 'Louis Vuitton',
                   price : 10750,
                   in_stock: 3
                 },
                 { color : 'black',
                   size  : 2,
                   brand : 'Louis Vuitton',
                   price : 12750,
                   in_stock: 3
                 },
                 { color : 'floral',
                   size  : 3,
                   brand : 'Fendi',
                   price : 18050,
                   in_stock: 3
                 },
                 { color : 'floral',
                   size  : 3,
                   brand : 'Fendi',
                   price : 11150,
                   in_stock: 3
                 },
                 { color : 'floral',
                   size  : 3,
                   brand : 'Fendi',
                   price : 7350,
                   in_stock: 3
                 },
                 { color : 'floral',
                   size  : 3,
                   brand : 'Fendi',
                   price : 7650,
                   in_stock: 3
                 },
                 { color : 'blue',
                   size  : 3,
                   brand : 'Fendi',
                   price : 8650,
                   in_stock: 3
                 },
                 { color : 'blue',
                   size  : 3,
                   brand : 'Fendi',
                   price : 6650,
                   in_stock: 3
                 },
                 { color : 'blue',
                   size  : 3,
                   brand : 'Fendi',
                   price : 4550,
                   in_stock: 3
                 },
                 { color : 'blue',
                   size  : 3,
                   brand : 'Fendi',
                   price : 4550,
                   in_stock: 3
                 },
                 { color : 'blue',
                   size  : 3,
                   brand : 'Fendi',
                   price : 3050,
                   in_stock: 3
                 },
                 { color : 'blue',
                   size  : 3,
                   brand : 'Gucci',
                   price : 2050,
                   in_stock: 3
                 },
                 { color : 'blue',
                   size  : 3,
                   brand : 'Gucci',
                   price : 1250,
                   in_stock: 3
                 },
    ]

    function filterShoes(filterBrand, filterColor, filterSize) {

        for (var i = 0; i < shoes.length; i++) {

            var shoeIndex = shoes[i];
            
            if (shoeIndex.brand === filterBrand && shoeIndex.color === filterColor && shoeIndex.filterSize === filterSize) {
                var seachOne = shoes.filter(function(shoeIndex){
                    return shoeIndex.brand === filterBrand && shoeIndex.color === filterColor && shoeIndex.size === filterSize;
                })

                search = seachOne;
                
                return search;
            } 
            else if (shoeIndex.color === filterColor && shoeIndex.size === filterSize && filterBrand === "All") {
                var searchTwo = shoes.filter(function(shoeIndex){
                    return shoeIndex.color === filterColor && shoeIndex.size === filterSize;
                })

                search = searchTwo;
                
                return search;

            } else if (shoeIndex.brand === filterBrand && shoeIndex.size === filterSize && filterColor === "All") {
                var searchColor = shoes.filter(function(shoeIndex){
                    return shoeIndex.brand === filterBrand && shoeIndex.filterSize === filterSize;
                })

                search = searchColor;
                return search;

            } else if (shoeIndex.brand === filterBrand && shoeIndex.color === filterColor && filterSize === "All") {
                var searchSize = shoes.filter(function(shoeIndex){
                    return shoeIndex.brand === filterBrand && shoeIndex.color === filterColor;
                })

                search = searchSize;
                return search;
            

            } else if (shoeIndex.brand === filterBrand && filterColor === "All" && filterSize === "All") {
                var searchBrand = shoes.filter(function(shoeIndex){
                    return shoeIndex.brand === filterBrand;
                })

                search = searchBrand;
                return search;
            
            } else if (shoeIndex.color === filterColor && filterBrand === "All" && filterSize === "All") {
                var searchSix = shoes.filter(function(shoeIndex){
                    return shoeIndex.color === filterColor;
                })
                
                search = searchSix;
                return search;
            
            } else if (shoeIndex.size === filterSize && filterBrand === "All" && filterColor === "All") {
                var searchSeven = shoes.filter(function(shoeIndex){
                    return shoeIndex.size === filterSize;
                })

                search = searchSeven;
                return search;

            } else if (filterBrand === "All" && filterColor === "All" && filterSize === "All") {

                return shoes;

            }

        }
    }

    function getList(){
        return shoes;
    }

    function displayFilter(searchedData){
        search = searchedData;
    }


    return {
        filterShoes,
        getList,
        displayFilter
    }
}