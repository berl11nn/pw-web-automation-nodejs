const readline = require('readline-sync');
// Declaration
function getWeight(yourCurrentBMI, height, standardBMI) {
    const weight = (height ** 2) * (yourCurrentBMI - standardBMI);
    return Math.abs(weight);
}

const hello = function () {
    console.log('Hello!');
}

function getInputToArray() {
    let intArray = [];
    let numberInputToArr = readline.question('Please input quantity of your numbers to add to array: ');

    for (let i = 0; i < Number(numberInputToArr); i++) {
        numberToInput = readline.question('Please input your numbers to add to array: ');

        if (!Number.isNaN(numberToInput)) {
            let number = parseInt(numberToInput);
            intArray.push(number);
        } else {
            console.log('Please input valid number!');
        }
    }
    return intArray;
}


//Export function
module.exports = { getWeight, getInputToArray };