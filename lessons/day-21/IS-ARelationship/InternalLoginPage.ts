import LoginPage from "./LoginPage";

export default class InternalLoginPage extends LoginPage {

    inputUsername(username: string): void {
        console.log("Internal username input");
    }

    inputPassword(password: string): void {
        console.log("Internal password input");
    }

    clickOnLoginButton(): void {
        console.log("Internal Login click");
    }

}