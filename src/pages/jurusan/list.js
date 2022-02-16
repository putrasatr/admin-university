"use strict";
exports.__esModule = true;
exports.findJurusan = void 0;
var constants_1 = require("../../constants");
var readline_1 = require("../../services/readline");
function findJurusan(jurusan, callback) {
    console.log(constants_1.garis);
    readline_1.rl.question("Masukan ID:", function (ID) {
        jurusan.find(ID, callback);
    });
}
exports.findJurusan = findJurusan;
