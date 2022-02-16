"use strict";
exports.__esModule = true;
var constants_1 = require("../../constants");
var jurusan_1 = require("../../services/control/jurusan");
var readline_1 = require("../../services/readline");
var main_menu_1 = require("../main-menu");
var form_1 = require("./form");
var list_1 = require("./list");
function jurusanMenu() {
    var jurusan = new jurusan_1["default"]();
    (0, constants_1.menuView)("Jurusan");
    readline_1.rl.question("masukan salah satu no. dari opsi diatas:", function (input) {
        switch (input.trim()) {
            case "1":
                jurusan.list(function () {
                    jurusanMenu();
                });
                break;
            case "2":
                (0, list_1.findJurusan)(jurusan, function () { return jurusanMenu(); });
                break;
            case "3":
                (0, form_1.tambahJurusan)(jurusan, function () { return jurusanMenu(); });
                break;
            case "4":
                (0, form_1.hapusJurusan)(jurusan, function (res, id) {
                    console.log("\n");
                    if (res) {
                        console.log("Jurusan dengan ID Jurusan : ".concat(id, " berhasil di hapus."));
                    }
                    else {
                        console.log("Jurusan dengan ID Jurusan : ".concat(id, " tidak terdaftar"));
                    }
                    jurusanMenu();
                });
                break;
            case "5":
                (0, main_menu_1["default"])();
                break;
            default:
                console.log("\nMasukan nomor yang sesuai!!\n");
                jurusanMenu();
                break;
        }
    });
}
exports["default"] = jurusanMenu;
