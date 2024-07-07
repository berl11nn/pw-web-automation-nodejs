const { getInputToArray } = require('../ultimethods/UltiMethods');

let intArr = [];

intArr = getInputToArray();

console.log(intArr.length - 1);

for (let i = 0; i < intArr.length - 1; i++) {
    for (let j = 0; j < intArr.length - 1 - i; j++) {
        if (intArr[j] > intArr[j + 1]) {
            let sortedNumber = intArr[j];
            intArr[j] = intArr[j + 1];
            intArr[j + 1] = sortedNumber;
        }
    }
}

console.log(`Array after sorted: ${intArr}`);