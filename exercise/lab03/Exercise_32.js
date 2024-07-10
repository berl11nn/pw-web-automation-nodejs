const { getInputToArray } = require('../ultimethods/UltiMethods');

let intArr = [];

intArr = getInputToArray();

let min = intArr[0];
let max = intArr[0];

for(let i = 0; i < intArr.length; i++){
    if(intArr[i] < min){
        min = intArr[i];
    }

    if(intArr[i] > max){
        max = intArr[i];
    }
}

console.log(`The min number is ${min}`);
console.log(`The max number is ${max}`);