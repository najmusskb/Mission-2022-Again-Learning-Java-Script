
// 19-7 multiple ways to get and set object property

var ShopingCart = {
    bag: 12,
    sunglass: 2,
    shoe: 'nike brand',
    computer: 1,
    mobile: 'redmi',
    mouse: 'tech bd brand',
    pen: 25

};

// when you know the specific  property  name , you use dot notation to get  the property value 

var penCount = ShopingCart.pen;
console.log(penCount);



//  Alternative system

var penCount2 = ShopingCart['mouse'];
console.log(penCount2);




// get all object with daynamic way 

// find keys
var properties = Object.keys(ShopingCart);

// find values
var propertiesValues = Object.values(ShopingCart);


/* console.log(properties);
console.log(propertiesValues); */




// different way to get and  object values 

var propertyName = 'computer';
var propertieValue = ShopingCart[propertyName];

console.log(propertyName);
console.log(propertieValue);



// set new value -01

ShopingCart.bag = 20;
console.log(ShopingCart);

// Anouther way -02
ShopingCart['bag'] = 25;
console.log(ShopingCart);

// Anouther Way- 03
ShopingCart[propertyName] = 89;
console.log(ShopingCart);