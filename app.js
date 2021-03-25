
const word = ["nice", "awesome", "tof"];
const addTheWordcool = (array) => {
    array.push("cool");
}
addTheWordcool(word);
// console.log(word);

const amountOfElements = (array) => {
    return array.length
}
// console.log(amountOfElements(word));

const firstElement = (array) => {
    return array[0];
}
// console.log(firstElement(word));

const theLastElement = (array) => {
    return array[array.length - 1];
}
// console.log(theLastElement(word));

const firstElementSlice = (array) => {
    return array.slice(0, 1);
}
// console.log(firstElementSlice(word));

const wincAcademy = ['Winc', 'Academy', 'is', 'leuk', ';-}'];

const joinArrays = (array) => {
    return array.join(" ");
}
// console.log(joinArrays(wincAcademy));

const combi2Arrays = (array, array2) => {
    return [...array, ...array2]
}

// console.log(combi2Arrays(word, wincAcademy));


//Opdracht: Array methods - deel 2

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

// Hier komt jouw functie
const findSpiderMan = function (array) {
    return array.find(array => array.name === "Spiderman");
}

// console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


// result should be [2, 4, 6]
const doubleArrayValues = function (array) {
    return array.map(newArray => newArray * 2);
}

// console.log(doubleArrayValues([1, 2, 3]));

const testArray = [1, 2, 3];
const newTestArray = testArray.map(x => x * 2);
// console.log(newTestArray);

const containsNumberBiggerThan10 = (array) => {
    return array.some(array => array >= 10);
}

// console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));

const isItalyInTheGreat7 = (array) => {
    return array.includes("Italy");
}
// console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));

const tenfold = (array) => {
    let newArray = [];
    array.forEach(array => {
        newArray.push(array * 10);
    });
    return newArray;
}
// console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));

const isBelow100 = (array) => {
    return array.every(array => array < 100);
}
// console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))

const bigSum = (array, accumulator) => {
    return array.reduce((accumulator, array) => accumulator + array);
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));