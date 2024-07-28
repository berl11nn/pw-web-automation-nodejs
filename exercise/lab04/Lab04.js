const readline = require('readline-sync');
const { inputAccountNumber, inputAccountName, inputAccountBalance } = require("../ultimethods/UltiMethods")

const bankCountNumber = {
    accountNumber: "1451",
    routingNumber: "5611",
    balance: 10000,
    accountName: "Joe Biden",
}

const bankAccount = { ...bankCountNumber }
bankAccount.accountNumber = inputAccountNumber();
bankAccount.accountName = inputAccountName();
bankAccount.balance = inputAccountBalance();

const bankAccounts = [bankCountNumber, bankAccount];

let selectOption = true;

while (selectOption) {
    printMenu();
    let option = readline.question("Input your option: ")
    if (option === '0') {
        console.log("Thank you!");
        selectOption = false;
    } else if (option === '1') {
        let account = findBankAccount();
        if (account) {
            console.log(`Account found: ${account.accountName}, Balance: ${account.balance}`);
        } else {
            console.log("Account not found!");
        }
    } else if (option === '2') {
        let bankAccount = findBankAccount();
        if (bankAccount) {
            let withDrawAmount = readline.question("Input your with draw amount: ")
            withDrawMoney(bankAccount, withDrawAmount)
        } else {
            console.log("Account not found!");
        }
    } else {
        console.log("This is an invalid option!");
    }
}

function printMenu() {
    console.log("\t=== Banking application ===");
    console.log("1. Find an account");
    console.log("2. Update balance");
    console.log("0. Exit the program");
}

function findBankAccount() {
    // for(let bankAccount of bankAccounts.bankAccount){
    //     if(bankAccount === accountNumber){
    //         return bankAccount;
    //     }
    // }
    let inputAccountNumber = readline.question("Input your account number: ");
    return bankAccounts.find(bankAccount => bankAccount.accountNumber === inputAccountNumber);
}

function withDrawMoney(bankAccount, withDrawAmount) {
    if (withDrawAmount > bankAccount.balance) {
        console.log("The balance withdraw is not correct!");
    } else {
        bankAccount.balance -= withDrawAmount;
        console.log(`Withdrawal successful. New balance: ${bankAccount.balance}`);
    }
}