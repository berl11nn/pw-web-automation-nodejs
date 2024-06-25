const readline = require('readline-sync');

let weight = readline.question('Your weight: ');
let height = readline.question('Your height: ')
let BMI = Number(weight) / (Number(height) * 2)
let underWeight = 18.5;
let normalWeight = 25;
let overWeight = 30;

if(BMI <= underWeight){
    console.log('You should increase your weight.');
}else if (BMI <= normalWeight){
    console.log('Keep maintaining your weight.');
}else if(BMI <= overWeight){
    console.log('You should decrease your weight.');
}else{
    console.log('You should decrease your weight.');
}
