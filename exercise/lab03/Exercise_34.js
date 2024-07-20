const { getInputToArray } = require('../ultimethods/UltiMethods');

let firstIntArr = [];
let secondIntArr = [];
let mergedArr = [];

firstIntArr = getInputToArray();

secondIntArr = getInputToArray();

let totalLength = firstIntArr.length + secondIntArr.length;

let i = 0;
let j = 0;

for(k = 0; k <= totalLength; k++){
    if(firstIntArr[i] < secondIntArr[j]){
        mergedArr.push(firstIntArr[i]);
        i++;
    }else if(firstIntArr[i] > secondIntArr[j]){
        mergedArr.push(secondIntArr[j]);
        j++;
    }else if(i >= firstIntArr.length) {
        mergedArr.push(secondIntArr[j]);
        j++;
    }else{
        mergedArr.push(firstIntArr[i]);
        i++;
    }
}

console.log(mergedArr);
