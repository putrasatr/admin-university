"use strict";
exports.__esModule = true;
var constants_1 = require("../constants");
var readline_1 = require("../services/readline");
var control_1 = require("../services/control");
var main_menu_1 = require("./main-menu");
var users = new control_1["default"]();
function mainLogin() {
    console.log("\n  ".concat(constants_1.greetingSentence, "\n  ").concat(constants_1.garis));
    askUsername();
}
exports["default"] = mainLogin;
function askUsername() {
    readline_1.rl.question("username: ", function (Username) {
        users.checkUsername(Username, askPassword, askUsername);
    });
}
function askPassword(pw) {
    readline_1.rl.question("password:", function (password) {
        if (password !== pw.Password) {
            console.log("password salah silahkan coba lagi");
            askPassword(pw);
        }
        else {
            console.log("".concat(constants_1.garis, "\nSelamat datang, ").concat(pw.Username, ". Level akses mu adalah ").concat(pw.Level, "\n").concat(constants_1.garis, "\n"));
            (0, main_menu_1["default"])();
        }
    });
}
