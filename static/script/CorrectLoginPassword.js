"use strict";

export default class CorrectLoginPassword {

    constructor() {
        this.validData = 'abcdefghijklmnopqrstuvwxyz';
        this.validData += this.validData.toUpperCase() + '1234567890';
        // alert(this.validData);
    }

    correctLog(login) {
        if (login==="") {
            return "empty";
        }

        for (let i = 0; i < login.length; i++) {
            if (this.validData.indexOf(login[i]) === -1) {
                return "incorrect";
            }
        }

        return "ok";
    }

    correctPas(password) {
        if (password === "") {
            return "empty";
        }

        for (let i = 0; i < password.length; i++) {
            if (this.validData.indexOf(password[i]) === -1) {
                return "incorrect";
            }
        }

        return "ok";
    }

    correctEmail(email) {
        if (email === "") {
            return "empty";
        }

        if (email.indexOf("@") === -1)  {
            return "is not email";
        }

        for (let i = 0; i < email.length; i++) {
            if (((this.validData + ".").indexOf(email[i]) === -1) && (email[i] !== "@")) {
                return "incorrect";
            }
        }

        return "ok";
    }

    correctLogForm(logValue, pasValue, errorBox)
    {
        let log = this.correctLog(logValue);
        let pas = this.correctPas(pasValue);

        if (log === "empty" || pas === "empty") {
            errorBox.innerHTML = "Заполнены не все поля";
            return false;
        }

        if (log === "incorrect" || pas === "incorrect") {
            errorBox.innerHTML = "Использованы недопустимые символы";
            return false;
        }

        errorBox.innerHTML = "";
        return true;
    }

    correctRegForm(logValue, pasValue, emailValue, errorBox)
    {
        let log = this.correctLog(logValue);
        let pas = this.correctPas(pasValue);
        let email = this.correctEmail(emailValue);

        if (log === "empty" || pas === "empty") {
            errorBox.innerHTML = "Заполнены не все поля";
            return false;
        }

        if (log === "incorrect" || pas === "incorrect") {
            errorBox.innerHTML = "Использованы недопустимые символы1";
            return false;
        }

       if (email === "is not email") {
            errorBox.innerHTML = "Использованы недопустимые символы2";
            return false;
        }

        errorBox.innerHTML = "";
        return true;
    }
}
