const { getInputToArray } = require('../ultimethods/UltiMethods');

let intArr = [];

intArr = getInputToArray();

let oddNumber = 0;
let evenNumber = 0;

for (let i = 0; i < intArr.length; i++) {
    if (intArr[i] % 2 === 0) {
        evenNumber++;
    } else {
        oddNumber++;
    }
}

console.log(`Even number has ${evenNumber}`);
console.log(`Odd number has ${oddNumber}`);