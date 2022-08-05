
// loop kore sob gular output pete cai
const ShopingCart = {
    bag: 12,
    sunglass: 2,
    shoe: 'nike brand',
    computer: 1,
    mobile: 'redmi',
    mouse: 'tech bd brand',
    pen: 25,


};


// array vs object 
// array
const ShopingItems = ['books', 'pen', 'bag', 'mobile'];

var FriendsAges = [12, 5, 89, 36, 47, 5, 6, 9, 8, 7, 4, 5, 2, 4];

// object 

const FriendsAge = {

    sakib: 20,
    rakib: 40,
    shakil: 50,
    mamun: 69,
    rubel: 36,
    amirul: 63,
    jony: 78,
    sorif: 58

};


const keys = Object.keys(ShopingCart);
console.log(keys);


const value = Object.values(ShopingCart);
console.log(value);




/*  var keys  bag: 12,
    sunglass: 2,
    shoe: 'nike brand',
    computer: 1,
    mobile: 'redmi',
    mouse: 'tech bd brand',
    pen: 25, */



for (var i = 0; i < keys.length; i++) {



    console.log(keys[i]);
    var propertiesName = keys[i];
    var propertieValue = ShopingCart[propertiesName];
    console.log(propertiesName, propertieValue);


}






// for in  looping 

for (var propertiesName in ShopingCart) {

    const value = ShopingCart[propertiesName];
    console.log('for in looping :', propertiesName, value);
}


