"use strict";
exports.__esModule = true;
exports.hapusDosen = exports.tambahDosen = void 0;
var constants_1 = require("../../constants");
var readline_1 = require("../../services/readline");
function tambahDosen(dosen, callback) {
    console.log("".concat(constants_1.garis, "\nLengkapi data di bawah ini:\n"));
    readline_1.rl.question("ID Dosen:", function (IDDosen) {
        readline_1.rl.question("NAMA:", function (NAMA) {
            dosen.add([IDDosen, NAMA], callback);
        });
    });
}
exports.tambahDosen = tambahDosen;
function hapusDosen(dosen, callback) {
    readline_1.rl.question("masukkan ID dosen yang akan dihapus:", function (ID) {
        dosen.remove(Number(ID), callback);
    });
}
exports.hapusDosen = hapusDosen;
