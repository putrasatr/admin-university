"use strict";
exports.__esModule = true;
exports.hapusMurid = exports.tambahMahasiswa = void 0;
var constants_1 = require("../../constants");
var readline_1 = require("../../services/readline");
function tambahMahasiswa(mahasiswa, callback) {
    console.log("".concat(constants_1.garis, "\nLengkapi data di bawah ini:\n"));
    readline_1.rl.question("NIM:", function (NIM) {
        readline_1.rl.question("NAMA:", function (NAMA) {
            readline_1.rl.question("Alamat:", function (Alamat) {
                readline_1.rl.question("ID Jurusan:", function (IDJurusan) {
                    readline_1.rl.question("\nFormat tanggal lahir: YYYY-MM-DD\nContoh : 2002-12-30\nTanggal Lahir:", function (tgl) {
                        mahasiswa.add([NIM, NAMA, Alamat, IDJurusan, tgl], callback);
                    });
                });
            });
        });
    });
}
exports.tambahMahasiswa = tambahMahasiswa;
function hapusMurid(mahasiswa, callback) {
    readline_1.rl.question("masukkan NIM mahasiswa yang akan dihapus:", function (NIM) {
        mahasiswa.remove(NIM, callback);
    });
}
exports.hapusMurid = hapusMurid;
