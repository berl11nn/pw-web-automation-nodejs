import BankingAccounts from "./BankingAccounts";

export default class SavingsAccount extends BankingAccounts {

    private minimumBalance: number;

    constructor(initialBalance: number, minimumBalance: number) {
        super(initialBalance);
        this.minimumBalance = minimumBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited $${amount}. Current balance: $${this.balance}`);
    }

    withdraw(amount: number): void {
        if (this.balance - amount < this.minimumBalance) {
            console.log(`Cannot withdraw $${amount}. The minimum balance: $${this.minimumBalance}`);
        } else {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. Current balance $${this.balance}`);
        }
    }

    getBalance(): number {
        return this.balance;
    }
}