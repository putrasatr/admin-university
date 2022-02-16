"use strict";
exports.__esModule = true;
exports.findKontrak = void 0;
var constants_1 = require("../../constants/");
var readline_1 = require("../../services/readline");
function findKontrak(kontrak, callback) {
    console.log(constants_1.garis);
    readline_1.rl.question("Masukan ID:", function (ID) {
        kontrak.find(ID, callback);
    });
}
exports.findKontrak = findKontrak;
