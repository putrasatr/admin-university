"use strict";
exports.__esModule = true;
var config_1 = require("../../config");
var helpers_1 = require("../../helpers");
var Kontrak = /** @class */ (function () {
    function Kontrak() {
    }
    Kontrak.prototype.list = function (callback) {
        config_1.pool.all((0, config_1.Select)("daftarNilai"), function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            (0, helpers_1.getTable)(rows, ["NIM", "MatkulID", "SKS", "Nilai", "DosenID"]);
            callback();
        });
    };
    Kontrak.prototype.find = function (id, callback) {
        config_1.pool.all("\n          ".concat((0, config_1.Select)("mahasiswa.NIM,NamaMahasiswa,mataKuliah.MatkulID,NamaMatkul,daftarNilai.Nilai FROM mahasiswa"), " \n          ").concat((0, config_1.Join)([{ daftarNilai: "NIM" }, { mahasiswa: "NIM" }], "left"), " \n          ").concat((0, config_1.Join)([{ mataKuliah: "MatkulID" }, { daftarNilai: "MatkulID" }], "left"), " \n          WHERE daftarNilai.MatkulID = $MatkulID"), { $MatkulID: id }, function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            (0, helpers_1.getTable)(rows, [
                "NIM",
                "NamaMahasiswa",
                "MatkulID",
                "NamaMatkul",
                "Nilai",
            ]);
            callback();
        });
    };
    Kontrak.prototype.add = function (value, callback) {
        config_1.pool.run((0, config_1.Insert)("daftarNilai", ["NIM", "MatkulID", "SKS", "Nilai", "DosenID"], value), function (err) {
            if (err)
                (0, helpers_1.handleError)(err);
            console.log("Data Kontrak Baru Berhasil Ditambahkan.");
            callback();
        });
    };
    Kontrak.prototype.remove = function (id, callback) {
        config_1.pool.all("".concat((0, config_1.Select)("daftarNilai"), " ").concat((0, config_1.Where)({ KontrakID: id })), { $KontrakID: id }, function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            if (rows.length > 0) {
                config_1.pool.run("".concat((0, config_1.Delete)("daftarNilai"), " ").concat((0, config_1.Where)({ KontrakID: id })), { $KontrakID: id }, function (err) {
                    if (err)
                        (0, helpers_1.handleError)(err);
                    callback(true, id);
                });
                return;
            }
            callback(false, id);
        });
    };
    return Kontrak;
}());
exports["default"] = Kontrak;
