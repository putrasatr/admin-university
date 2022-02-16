"use strict";
exports.__esModule = true;
var constants_1 = require("../../constants");
var dosen_1 = require("../../services/control/dosen");
var readline_1 = require("../../services/readline");
var main_menu_1 = require("../main-menu");
var form_1 = require("./form");
var list_1 = require("./list");
function dosenMenu() {
    var dosen = new dosen_1["default"]();
    (0, constants_1.menuView)("Dosen");
    readline_1.rl.question("masukan salah satu no. dari opsi diatas:", function (input) {
        switch (input.trim()) {
            case "1":
                dosen.list(function () {
                    dosenMenu();
                });
                break;
            case "2":
                (0, list_1.findDosen)(dosen, function () { return dosenMenu(); });
                break;
            case "3":
                (0, form_1.tambahDosen)(dosen, function () { return dosenMenu(); });
                break;
            case "4":
                (0, form_1.hapusDosen)(dosen, function (res, id) {
                    console.log("\n");
                    if (res) {
                        console.log("Dosen dengan ID Dosen : ".concat(id, " berhasil di hapus."));
                    }
                    else {
                        console.log("Dosen dengan ID Dosen : ".concat(id, " tidak terdaftar"));
                    }
                    dosenMenu();
                });
                break;
            case "5":
                (0, main_menu_1["default"])();
                break;
            default:
                console.log("\nMasukan nomor yang sesuai!!\n");
                dosenMenu();
                break;
        }
    });
}
exports["default"] = dosenMenu;
