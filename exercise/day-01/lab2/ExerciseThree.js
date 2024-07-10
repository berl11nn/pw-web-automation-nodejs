const readline = require('readline-sync');

let weight = readline.question('Your weight: ');
let height = readline.question('Your height: ')
let BMI = Number(weight) / (Number(height) * 2)
let underWeight = 18.5;
let normalWeight = 24.9;
let overWeight = 29.9;
let suggestionWeight;

if (BMI <= underWeight) {
    suggestionWeight = ((underWeight - BMI) * (Number(height) * 2))
    console.log('You should increase your weight more: ' + Math.round(suggestionWeight) + 'kg');
} else if (BMI <= normalWeight) {
    console.log('Keep maintaining your weight.');
} else if (BMI <= overWeight) {
    suggestionWeight = ((BMI - underWeight) * (Number(height) * 2))
    console.log('You should decrease your weight down: ' + Math.round(suggestionWeight) + 'kg');
} else {
    suggestionWeight = ((BMI - underWeight) * (Number(height) * 2))
    console.log('You should decrease your weight down: ' + Math.round(suggestionWeight) + 'kg');
}