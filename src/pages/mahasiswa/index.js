"use strict";
exports.__esModule = true;
var constants_1 = require("../../constants");
var mahasiswa_1 = require("../../services/control/mahasiswa");
var main_menu_1 = require("../main-menu");
var form_1 = require("./form");
var list_1 = require("./list");
var readline_1 = require("../../services/readline");
function mahasiswaMenu() {
    var mahasiswa = new mahasiswa_1["default"]();
    (0, constants_1.menuView)("Mahasiswa");
    readline_1.rl.question("masukan salah satu no. dari opsi diatas: ", function (mhs) {
        switch (mhs) {
            case "1":
                mahasiswa.list(function () {
                    mahasiswaMenu();
                });
                break;
            case "2":
                (0, list_1.findMahasiswa)(mahasiswa, function () { return mahasiswaMenu(); });
                break;
            case "3":
                (0, form_1.tambahMahasiswa)(mahasiswa, function () { return mahasiswaMenu(); });
                break;
            case "4":
                (0, form_1.hapusMurid)(mahasiswa, function (isSuccess, id) {
                    console.log("\n");
                    if (isSuccess) {
                        console.log("Mahasiswa dengan ID Mahasiswa : ".concat(id, " berhasil di hapus."));
                    }
                    else {
                        console.log("Mahasiswa dengan ID Mahasiswa : ".concat(id, " tidak terdaftar"));
                    }
                    mahasiswaMenu();
                });
                break;
            case "5":
                (0, main_menu_1["default"])();
                break;
            default:
                console.log("\nMasukan nomor yang sesuai!!\n");
                mahasiswaMenu();
                break;
        }
    });
}
exports["default"] = mahasiswaMenu;
