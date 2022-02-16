"use strict";
exports.__esModule = true;
var config_1 = require("../../config");
var helpers_1 = require("../../helpers");
var Mahasiswa = /** @class */ (function () {
    function Mahasiswa() {
    }
    Mahasiswa.prototype.list = function (callback) {
        config_1.pool.all((0, config_1.Select)("mahasiswa"), function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            (0, helpers_1.getTable)(rows, [
                "NIM",
                "NamaMahasiswa",
                "Alamat",
                "JurusanID",
                "tanggalLahir",
            ]);
            callback();
        });
    };
    Mahasiswa.prototype.find = function (id, callback) {
        config_1.pool.all("".concat((0, config_1.Select)("mahasiswa"), " ").concat((0, config_1.Join)([{ jurusan: "JurusanID" }, { mahasiswa: "JurusanID" }], "left"), " ").concat((0, config_1.Where)({ NIM: id })), { $NIM: id }, function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            (0, helpers_1.getTable)(rows, [
                "NIM",
                "NamaMahasiswa",
                "Alamat",
                "JurusanID",
                "tanggalLahir",
                "NamaJurusan",
            ]);
            callback();
        });
    };
    Mahasiswa.prototype.add = function (value, callback) {
        config_1.pool.run((0, config_1.Insert)("mahasiswa", ["NIM", "NamaMahasiswa", "Alamat", "JurusanID", "tanggalLahir"], value), function (err) {
            if (err)
                (0, helpers_1.handleError)(err);
            console.log("Data Mahasiswa Baru Berhasil Ditambahkan.");
            callback();
        });
    };
    Mahasiswa.prototype.remove = function (id, callback) {
        config_1.pool.all("".concat((0, config_1.Select)("mahasiswa"), " ").concat((0, config_1.Where)({ NIM: id })), { $NIM: id }, function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            if (rows.length > 0) {
                config_1.pool.run("".concat((0, config_1.Delete)("mahasiswa"), " ").concat((0, config_1.Where)({ NIM: id })), { $NIM: id }, function (err) {
                    if (err)
                        (0, helpers_1.handleError)(err);
                    callback(true, id);
                });
                return;
            }
            callback(false, id);
        });
    };
    return Mahasiswa;
}());
exports["default"] = Mahasiswa;
