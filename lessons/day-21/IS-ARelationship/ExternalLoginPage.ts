import LoginPage from "./LoginPage";

export default class ExternalLoginPage extends LoginPage {

    inputUsername(username: string): void {
        console.log("External username input");
    }

    inputPassword(password: string): void {
        console.log("External password input");
    }

    clickOnLoginButton(): void {
        console.log("External Login click");
    }

}