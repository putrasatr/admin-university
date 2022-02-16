"use strict";
exports.__esModule = true;
var constants_1 = require("../../constants");
var kontrak_1 = require("../../services/control/kontrak");
var readline_1 = require("../../services/readline");
var main_menu_1 = require("../main-menu");
var form_1 = require("./form");
var list_1 = require("./list");
function kontrakMenu() {
    var kontrak = new kontrak_1["default"]();
    (0, constants_1.menuView)("Kontrak");
    readline_1.rl.question("masukan salah satu no. dari opsi diatas:", function (input) {
        switch (input.trim()) {
            case "1":
                kontrak.list(function () {
                    kontrakMenu();
                });
                break;
            case "2":
                (0, list_1.findKontrak)(kontrak, function () { return kontrakMenu(); });
                break;
            case "3":
                (0, form_1.tambahKontrak)(kontrak, function () { return kontrakMenu(); });
                break;
            case "4":
                (0, form_1.hapusKontrak)(kontrak, function (res, id) {
                    console.log("\n");
                    if (res) {
                        console.log("Kontrak dengan NIM : ".concat(id, " berhasil di hapus."));
                    }
                    else {
                        console.log("Kontrak dengan NIM : ".concat(id, " tidak terdaftar"));
                    }
                    kontrakMenu();
                });
                break;
            case "5":
                (0, main_menu_1["default"])();
                break;
            default:
                console.log("\nMasukan nomor yang sesuai!!\n");
                kontrakMenu();
                break;
        }
    });
}
exports["default"] = kontrakMenu;
