"use strict";
exports.__esModule = true;
var readline_1 = require("../../services/readline");
var constants_1 = require("../../constants");
var jurusan_1 = require("../jurusan");
var mahasiswa_1 = require("../mahasiswa");
var dosen_1 = require("../dosen");
var mataKuliah_1 = require("../mataKuliah");
var kontrak_1 = require("../kontrak");
var pages_1 = require("../../pages");
function mainMenu() {
  console.log(
    "Silahkan pilih opsi dibawah ini\n[1] Mahasiswa\n[2] Jurusan\n[3] Dosen\n[4] Mata Kuliah\n[5] Kontrak\n[6] Keluar\n".concat(
      constants_1.garis
    )
  );
  readline_1.rl.question(
    "Masukan salah satu no. dari opsi diatas:",
    function (Masukan) {
      switch (Masukan.trim().toLowerCase()) {
        case "1":
          (0, mahasiswa_1["default"])();
          break;
        case "2":
          (0, jurusan_1["default"])();
          break;
        case "3":
          (0, dosen_1["default"])();
          break;
        case "4":
          (0, mataKuliah_1["default"])();
          break;
        case "5":
          (0, kontrak_1["default"])();
          break;
        case "6":
          (0, pages_1["default"])();
          break;
        default:
          console.log("\nMasukan nomor yang sesuai!!\n");
          mainMenu();
          break;
      }
    }
  );
}
exports["default"] = mainMenu;
