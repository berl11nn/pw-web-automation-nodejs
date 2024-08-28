export default class Animals {

    private speed: number;
    private name: string;

    constructor(name: string, maxSpeed: number) {
        const randomNumber: number = Math.floor(Math.random() * maxSpeed) + 1;
        this.name = name;
        this.speed = randomNumber;
    }

    getSpeed() {
        return this.speed;
    }

    getName() {
        return this.name;
    }

}