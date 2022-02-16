"use strict";
exports.__esModule = true;
exports.findDosen = void 0;
var constants_1 = require("../../constants");
var readline_1 = require("../../services/readline");
function findDosen(dosen, callback) {
    console.log(constants_1.garis);
    readline_1.rl.question("Masukan ID:", function (ID) {
        dosen.find(Number(ID), callback);
    });
}
exports.findDosen = findDosen;
