export default abstract class BankingAccounts {

    protected balance: number;

    constructor(balance: number){
        this.balance = balance;
    }

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
    abstract getBalance(): number;
}