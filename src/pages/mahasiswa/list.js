"use strict";
exports.__esModule = true;
exports.findMahasiswa = void 0;
var constants_1 = require("../../constants");
var readline_1 = require("../../services/readline");
function findMahasiswa(mahasiswa, callback) {
    console.log(constants_1.garis);
    readline_1.rl.question("Masukan NIM:", function (NIM) {
        mahasiswa.find(NIM, callback);
    });
}
exports.findMahasiswa = findMahasiswa;
