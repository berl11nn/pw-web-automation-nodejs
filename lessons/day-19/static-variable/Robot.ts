export default class Robot {

    //Class variable - shared value - Static la khi 1 thang thay doi thi cac thang khac thay doi theo
    static id = 0;
    private robotName: string;


    constructor(){
        Robot.id++;
        this.robotName = "Robot";
    }

    getId(){
        return Robot.id;
    }

    //class method
    static doSomething(){
        console.log(this.robotName);
        
    }

}

const meo = new Robot();
const lulu = new Robot();

console.log(meo.getId());
console.log(lulu.getId());

