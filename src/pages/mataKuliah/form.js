"use strict";
exports.__esModule = true;
exports.hapusMataKuliah = exports.tambahMataKuliah = void 0;
var constants_1 = require("../../constants");
var readline_1 = require("../../services/readline");
function tambahMataKuliah(mataKuliah, callback) {
    console.log("".concat(constants_1.garis, "\nLengkapi data di bawah ini:\n"));
    readline_1.rl.question("ID Mata Kuliah:", function (MatkulID) {
        readline_1.rl.question("Nama Mata Kuliah:", function (NAMA) {
            readline_1.rl.question("Jumlah SKS:", function (SKS) {
                readline_1.rl.question("ID Dosen:", function (DosenID) {
                    mataKuliah.add([MatkulID, NAMA, SKS, DosenID], callback);
                });
            });
        });
    });
}
exports.tambahMataKuliah = tambahMataKuliah;
function hapusMataKuliah(mataKuliah, callback) {
    readline_1.rl.question("masukkan ID Mata Kuliah yang akan dihapus:", function (ID) {
        mataKuliah.remove(ID, callback);
    });
}
exports.hapusMataKuliah = hapusMataKuliah;
