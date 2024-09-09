import readline from 'readline-sync';
import BankingAccounts from './BankingAccounts';
import SavingsAccount from './SavingsAccount';
import CheckingAccount from './CheckingAccount';

export default class BankingAccountsController {

    displayBankingOption(): void {
        console.log("Welcome to the Bank");
        console.log("\tChoose Account Type:");
        console.log("1. Savings Account");
        console.log("2. Checking Account");
        const accountChoice = readline.question('Enter Your choice: ');

        let account: BankingAccounts;

        if (accountChoice === '1') {
            const initialBalance = Number(readline.question('Enter initial Balance for Savings Account: '));
            const minimumBalance = Number(readline.question('Enter minimum Balance for Savings Account: '));
            account = new SavingsAccount(initialBalance, minimumBalance);
        } else if (accountChoice === '2') {
            const initialBalance = Number(readline.question('Enter initial Balance for Checking Account: '));
            const overdraftLimit = Number(readline.question('Enter Over Draft Limit for Checking Account: '));
            account = new CheckingAccount(initialBalance, overdraftLimit);
        } else {
            console.log("Invalid account type.");
            return;
        }
        this.handleAccountOperations(account);
    }

    private handleAccountOperations(account: BankingAccounts): void {
        let isRunning = true;

        while (isRunning) {
            this.displayMenu();
            const optionChoice = readline.question('Enter Your choice (1-4): ');

            switch (optionChoice) {
                case '1':
                    const depositAmount = this.validateAmountInput('Enter amount to deposit: ');
                    account.deposit(depositAmount);
                    break;
                case '2':
                    const withdrawAmount = this.validateAmountInput('Enter amount to withdraw: ');
                    account.withdraw(withdrawAmount);
                    break;
                case '3':
                    console.log(`Current balance: $${account.getBalance()}`);
                    break;
                case '4':
                    isRunning = false;
                    console.log("Thank you!");
                    break;
                default:
                    console.log("Invalid choice. Please select a valid option.");
            }
        }
    }

    private displayMenu(): void {
        console.log("\tChoose an option:");
        console.log("1. Deposit");
        console.log("2. Withdraw");
        console.log("3. Check Balance");
        console.log("4. Exit");
    }

    private validateAmountInput(textMessage: string): number {
        let amount: number;

        do {
            amount = Number(readline.question(textMessage))
            if (amount < 0) {
                console.log("Amount cannot be negative. Please enter a valid amount.");
            }
        } while (amount < 0);

        return amount;
    }
}