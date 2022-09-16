"use strict";
/*
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive")*/
/////////FUNCTION////////////////
/*
function logger(){
    console.log('My name is Abdulraheem')
}
//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');*/

/*
//// FUNCTION DECLARATION  ////

function calcAge(birthYear){
    return 2037 - birthYear;
}
const age1 = calcAge(1991);
console.log(age1)
///// FUNCTION EXPRESSION //////
const calcAge2 = function (birthYear){
    return 2037 - birthYear;  
}
const age2 = calcAge2(1991);

console.log(age1, age2);*/


/*
///////Arrow Function ////////////
const calcAge3 = birthYear=> 2037 - birthYear; 
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement1 = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement1(1991));

const yearsUntilRetirement2 = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstname} reteires in ${retirement} years.`;
}
console.log(yearsUntilRetirement2(1991, 'Abdulraheem'));
console.log(yearsUntilRetirement2(1980, 'Taiwo'));
*/

/*
////// Function calling other functions ////////

function cutFruitPieces(fruit){
    return fruit * 6;
}


function fruitProcessor(apples, oranges){ 
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

const calcAge2 = function (birthYear){
    return 2040 - birthYear;  
};

const yearsUntilRetirement2 = function(birthYear, firstname) {
    const age = calcAge2(birthYear)
    const retirement = 65 - age;

    if (retirement > 0){
        console.log(`${firstname} reteires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstname} has already been retired ${-retirement} years ago. Cheers!`);
        return `${-retirement} years ago`;
    }

    return retirement;
    //return `${firstname} reteires in ${retirement} years.`;
}
console.log(yearsUntilRetirement2(1990, 'Abdulraheem'));
console.log(yearsUntilRetirement2(1960, 'Taiwo'));







/*
/////////////ARRAYS///////////////////
const friends = ['Michael','Steven','Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay"; 
console.log(friends);
const fName = 'Abdulraheem'
const taiwo = [ fName, 'Raimi', 2037 - 1991, friends];
console.log(taiwo);
console.log(taiwo.length);

// const birthYear = 1990;

const calcAge = function(birthYear){
    return 2037 - birthYear
} 
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
const age4 = calcAge(years[3]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);*/

/*
//methods of array//
// add elements//
const friends = ['Michael','Steven','Peter'];
const newLenght =  friends.push('Jay');
console.log(newLenght);

// remove elements///
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();  //First
console.log(friends);

// indexOf //
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Michael'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));
console.log(friends.includes('23'));*/


