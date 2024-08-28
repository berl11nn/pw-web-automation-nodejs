import AnimalSpeedController from "./AnimalSpeedController";
import Animals from "./Animals";
import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";


let animalController: AnimalSpeedController = new AnimalSpeedController();

let horse: Animals = new Horse();
let tiger: Animals = new Tiger();
let dog: Animals = new Dog();

let animalBestSpeed = animalController.getAnimalSpeed([horse, tiger, dog]);

console.log(`Winner is ${animalBestSpeed.getName()} with speed: ${animalBestSpeed.getSpeed()} `);
