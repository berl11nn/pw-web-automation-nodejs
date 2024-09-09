import { AndroidDriver } from "./AndroidDriver";
import { AppiumDriver } from "./AppiumDriver";
import { iOSDriver } from "./iOSDriver";

export class DriverManager {

    static getDriver(platformName: string): AppiumDriver {
        if (!platformName) {
            throw new Error("Platform name can't be empty!");
        }

        if (platformName === "iOS") {
            return new iOSDriver();
        } else if (platformName === "Android") {
            return new AndroidDriver();
        } else {
            throw new Error("Support driver: iOS, Android");
        }
    }
}