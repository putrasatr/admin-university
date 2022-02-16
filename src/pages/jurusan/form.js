"use strict";
exports.__esModule = true;
exports.hapusJurusan = exports.tambahJurusan = void 0;
var constants_1 = require("../../constants");
var readline_1 = require("../../services/readline");
function tambahJurusan(jurusan, callback) {
    console.log("".concat(constants_1.garis, "\nLengkapi data di bawah ini:\n"));
    readline_1.rl.question("ID Jurusan:", function (IDJurusan) {
        readline_1.rl.question("NAMA:", function (NAMA) {
            jurusan.add([IDJurusan, NAMA], callback);
        });
    });
}
exports.tambahJurusan = tambahJurusan;
function hapusJurusan(jurusan, callback) {
    readline_1.rl.question("masukkan ID jurusan yang akan dihapus:", function (ID) {
        jurusan.remove(ID, callback);
    });
}
exports.hapusJurusan = hapusJurusan;
