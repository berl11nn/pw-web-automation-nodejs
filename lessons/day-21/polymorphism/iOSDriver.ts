import { AppiumDriver } from "./AppiumDriver";

export class iOSDriver extends AppiumDriver {

    initSession(): void {
        console.log("Initialing iOSDriver");
    }

}