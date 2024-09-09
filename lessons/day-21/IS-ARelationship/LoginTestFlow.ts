import LoginPage from "./LoginPage";

export default class LoginTestFlow {

    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    login(login: LoginPage) {
        login.inputUsername(this.username);
        login.inputPassword(this.password);
        login.clickOnLoginButton();
    }
}