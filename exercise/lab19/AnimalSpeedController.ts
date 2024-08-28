import Animals from "./Animals";

export default class AnimalSpeedController {

    getAnimalSpeed(animalList: Animals[]) {
        let winner = animalList[0];

        animalList.forEach(animal => {
            if (animal.getSpeed() > winner.getSpeed()) {
                winner = animal;
            }
        });
        return winner;
    }
}