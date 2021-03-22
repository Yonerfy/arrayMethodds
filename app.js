
const word = ["nice", "awesome", "tof"];
const addTheWordcool = (array) => {
    array.push("cool");
}
addTheWordcool(word);
console.log(word);

const amountOfElements = (array) => {
    return array.length
}
console.log(amountOfElements(word));

const firstElement = (array) => {
    return array[0];
}
console.log(firstElement(word));

const theLastElement = (array) => {
    return array[array.length - 1];
}
console.log(theLastElement(word));

const firstElementSlice = (array) => {
    return array.slice(0, 1);
}
console.log(firstElementSlice(word));

const wincAcademy = ['Winc', 'Academy', 'is', 'leuk', ';-}'];

const joinArrays = (array) => {
    return array.join(" ");
}
console.log(joinArrays(wincAcademy));

const combi2Arrays = (array, array2) => {
    return [...array, ...array2]
}

console.log(combi2Arrays(word, wincAcademy));
