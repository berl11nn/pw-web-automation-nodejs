import { AppiumDriver } from "./AppiumDriver";

export class AndroidDriver extends AppiumDriver {


    initSession(): void {
        console.log("Initialing AndroidDriver");
    }

}