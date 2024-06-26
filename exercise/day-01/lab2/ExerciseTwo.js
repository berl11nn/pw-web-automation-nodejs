const readline = require('readline-sync');

let number = Number(readline.question('Input your number: '));
let oddNumber = Number((number % 2) != 0);
let evenNumber = Number((number % 2) == 0);

if(oddNumber){
    console.log("This is odd number"); 
}else if (evenNumber){
    console.log("This is even number");
}else{
    console.log("Please input a number");
}