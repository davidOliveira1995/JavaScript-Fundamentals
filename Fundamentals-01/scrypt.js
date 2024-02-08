/* 
 -------- JavaScrit Fundamentals - Part 1 --------
*/

// Values and Variables

console.log(`-------> Values and Variables`);


let country, continent, population;

country = 'Brazil';
continent = 'South American';
population = 220000000;

console.log(`Country: ${country}`);
console.log(`Continent: ${continent}`);
console.log(`Population: ${population}`);

console.log();

// Data Types

console.log(`-------> Data Types`);


const isIsland = false;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);

console.log();

// let, const and var
console.log(`-------> let, const and var`);


const language = 'Portuguese';

console.log(`Country: ${country}`);
console.log(`Continent: ${continent}`);
console.log(`Population: ${population}`);
console.log(`Is island: ${isIsland}`);

console.log(`Language: ${language}`);

console.log();

// Basic Operators

console.log(`-------> Basic Operators`);


/* 

1. If your country split in half, and each half would contain half the population, then how many people would live in each half?

2. Increase the population of your country by 1 and log the result to the console.

3. Finland has a population of 6 million. Does your country have more people than Finland?

4. The average population of a country is 33 million people. Does you country have less people than the average country?

5. Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

*/

let halfPopulation = population / 2;

console.log(`Half of Population: ${halfPopulation}`);

population++;

console.log(`Population plus one: ${population}`);

let finlandPopulation = 6000000;
let finlandIsBiggisterMyCountry = finlandPopulation > population;

console.log(`Finland is biggister my country? ${finlandIsBiggisterMyCountry}`);

let averageOthersCountry = 33000000;

let avaregeMyPopulationIsBiggister = averageOthersCountry > population;

console.log(`Others country the average of population is ${averageOthersCountry}: My country average is smallest? ${avaregeMyPopulationIsBiggister}`);

const DESCRIPTION = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;

console.log(`Description: ${DESCRIPTION}`);

console.log();
// Strings and Template Literals

/*
  1. Recreate the description variable from the last assignment, this time using the template literal syntax.
*/

console.log(`-------> Strings and Template Literals`);


console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}`);

console.log();

// Taking Decisions: if / else Statements

/*
  1. If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

  2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/

console.log(`-------> Taking Decisions: if / else Statements`);

let averageMyCountry = population - averageOthersCountry;
let aboveOrBelow = '';

if (population > averageOthersCountry) {
  aboveOrBelow = 'above'
} else {
  aboveOrBelow = 'below';
}

let descriptionAverage = `${country}'s population is ${averageMyCountry} million ${aboveOrBelow} average.`;

console.log(`${descriptionAverage}`);

console.log();

// Type Conversion and Coercion

/*
  1. Predict the result of these 5 operations without executing them:


  console.log('9' - '5'); // -> ?
  console.log('19' - '13' + '17'); // -> ?
  console.log('19' - '13' + 17); // -> ?
  console.log('123' < 57); // -> ?
  console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?

  2. Execute the operations to check if you were right.
*/

console.log(`-------> Type Conversion and Coercion`);

console.log('9' - '5'); // -> 95
  console.log('19' - '13' + '17'); // -> 617
  console.log('19' - '13' + 17); // -> 23
  console.log('123' < 57); // -> false
  console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 117
