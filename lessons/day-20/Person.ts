export default class Person {

    private age: number;

    constructor(age: number){
        this.validateAge(age);
        this.age = age;
    }

    // Service method - dung trong pham vin cac class khac nhau
    setAge(age: number){
        this.validateAge(age);
        this.age = age;
    }


    //support merhod - chi support trong pham vi class
    private validateAge(age: number){
        if(age < 0){
            throw new Error('Age Must me from zero!')
        }
    }
}