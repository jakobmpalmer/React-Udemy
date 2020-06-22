// const square = function(x){
//     return x * x
// };

// console.log('norm ', square(3))

// // Arrow notation
// const squareArrow = (x) => {
//     return x * x
// };

// console.log('Arrow: ',squareArrow(9));

// // Arrow notation Expressions Syntax
// const squareArrowTwo = (x) => x * x;

// console.log('Arrow Exp: ',squareArrowTwo(4));

// Challenge

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log("First Name: ", getFirstName('Jakob Palmer'));


const getFirstNameExp = (fullName) => fullName.split(' ')[0];

console.log("First Name: ", getFirstNameExp('Jakob Palmer'));

const add = function (a, b) {
    return a + b
}
console.log(add(55, 1));


const addArrow = (a, b) => {
    return a+b
}
console.log(addArrow(55,2));

const user = {
    name : "Jake",
    cities : ['Humboldt', 'Salem'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived())



const multiplier = {
    numbers : [10,20,30],
    multiplyBy : 3,

    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy)
    }
};

console.log(multiplier.multiply());
// [1,2,3] 2
// = [2,4,6]

