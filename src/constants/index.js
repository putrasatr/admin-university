"use strict";
exports.__esModule = true;
exports.menuView = exports.greetingSentence = exports.garis = void 0;
exports.garis = "=============================================";
exports.greetingSentence = "\nWelcome to Universitas Ngoding Indonesia\nJl Ngebul No. 666";
var menuView = function (menu) {
    console.log("\nSilahkan pilih opsi dibawah ini\n    [1] Daftar ".concat(menu, "\n    [2] Cari ").concat(menu, "\n    [3] Tambah ").concat(menu, "\n    [4] Hapus ").concat(menu, "\n    [5] Kembali\n").concat(exports.garis));
};
exports.menuView = menuView;
