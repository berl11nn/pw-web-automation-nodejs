const readline = require('readline-sync');

let number = Number(readline.question('Input your number: '));
let oddNumber = Number((number % 2) != 0);

if(oddNumber){
    console.log("This is odd number"); 
}else{
    console.log("This is even number");
}