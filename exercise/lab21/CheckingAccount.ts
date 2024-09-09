import BankingAccounts from "./BankingAccounts";

export default class CheckingAccount extends BankingAccounts {

    private overdraftLimit: number;

    constructor(initialBalance: number, overdraftLimit: number) {
        super(initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited $${amount}. Current balance: $${this.balance}`);
    }

    withdraw(amount: number): void {
        if (this.balance - amount < this.overdraftLimit) {
            console.log(`Cannot withdraw $${amount}. Overdraft limit is $${this.overdraftLimit}`);
        } else {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. Current balance $${this.balance}`);
        }
    }

    getBalance(): number {
        return this.balance;
    }
}