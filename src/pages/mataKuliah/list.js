"use strict";
exports.__esModule = true;
exports.findMataKuliah = void 0;
var constants_1 = require("../../constants");
var readline_1 = require("../../services/readline");
function findMataKuliah(mataKuliah, callback) {
    console.log(constants_1.garis);
    readline_1.rl.question("Masukan ID:", function (ID) {
        mataKuliah.find(ID, callback);
    });
}
exports.findMataKuliah = findMataKuliah;
