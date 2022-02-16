"use strict";
exports.__esModule = true;
exports.hapusKontrak = exports.tambahKontrak = void 0;
var constants_1 = require("../../constants");
var readline_1 = require("../../services/readline");
function tambahKontrak(kontrak, callback) {
    console.log("".concat(constants_1.garis, "\nLengkapi data di bawah ini:\n"));
    readline_1.rl.question("NIM:", function (NIM) {
        readline_1.rl.question("ID Mata Kuliah:", function (MatkulID) {
            readline_1.rl.question("Jumlah SKS:", function (SKS) {
                readline_1.rl.question("Nilai:", function (Nilai) {
                    readline_1.rl.question("ID Dosen:", function (DosenID) {
                        kontrak.add([NIM, MatkulID, SKS, Nilai, DosenID], callback);
                    });
                });
            });
        });
    });
}
exports.tambahKontrak = tambahKontrak;
function hapusKontrak(kontrak, callback) {
    readline_1.rl.question("masukkan ID Mata Kuliah yang akan dihapus:", function (ID) {
        kontrak.remove(ID, callback);
    });
}
exports.hapusKontrak = hapusKontrak;
