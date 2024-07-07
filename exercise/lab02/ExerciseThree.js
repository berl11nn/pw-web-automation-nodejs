const readline = require('readline-sync');
const {getWeight, hello} = require('../ultimethods/UltiMethods');

const weight = readline.question('Your weight: ');
const currentHeight = readline.question('Your height: ')
const currentBMI = weight / (currentHeight ** 2)
let minIdeaBMI = 18.5;
let maxIdeaBMI = 24.9;

hello();

if (currentBMI <= minIdeaBMI){
    const diffWeight = getWeight(currentBMI, currentHeight, minIdeaBMI);
    console.log(`You should increase at least ${diffWeight} (kg)`);
}else if(currentBMI <= maxIdeaBMI){
    const diffWeight = getWeight(currentBMI, currentHeight, maxIdeaBMI);
    console.log(`You should decrease at least ${diffWeight} (kg)`);
}else if(currentBMI <= 29.9){
    const diffWeight = getWeight(currentBMI, currentHeight, maxIdeaBMI);
    console.log(`You should decrease at least ${diffWeight} (kg)`);
}else{
    const diffWeight = getWeight(currentBMI, currentHeight, maxIdeaBMI);
    console.log(`You should decrease at least ${diffWeight} (kg)`);
}