"use strict";
exports.__esModule = true;
var constants_1 = require("../../constants");
var mataKuliah_1 = require("../../services/control/mataKuliah");
var readline_1 = require("../../services/readline");
var main_menu_1 = require("../main-menu");
var form_1 = require("./form");
var list_1 = require("./list");
function matakuliahMenu() {
    var matakuliah = new mataKuliah_1["default"]();
    (0, constants_1.menuView)("Mata Kuliah");
    readline_1.rl.question("masukan salah satu no. dari opsi diatas:", function (input) {
        switch (input.trim()) {
            case "1":
                matakuliah.list(function () {
                    matakuliahMenu();
                });
                break;
            case "2":
                (0, list_1.findMataKuliah)(matakuliah, function () { return matakuliahMenu(); });
                break;
            case "3":
                (0, form_1.tambahMataKuliah)(matakuliah, function () { return matakuliahMenu(); });
                break;
            case "4":
                (0, form_1.hapusMataKuliah)(matakuliah, function (res, id) {
                    console.log("\n");
                    if (res) {
                        console.log("Mata Kuliah dengan ID Mata Kuliah : ".concat(id, " berhasil di hapus."));
                    }
                    else {
                        console.log("Mata Kuliah dengan ID Mata Kuliah : ".concat(id, " tidak terdaftar"));
                    }
                    matakuliahMenu();
                });
                break;
            case "5":
                (0, main_menu_1["default"])();
                break;
            default:
                console.log("\nMasukan nomor yang sesuai!!\n");
                matakuliahMenu();
                break;
        }
    });
}
exports["default"] = matakuliahMenu;
