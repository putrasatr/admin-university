"use strict";
exports.__esModule = true;
var config_1 = require("../../config");
var helpers_1 = require("../../helpers");
var Jurusan = /** @class */ (function () {
    function Jurusan() {
    }
    Jurusan.prototype.list = function (callback) {
        config_1.pool.all((0, config_1.Select)("jurusan"), function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            (0, helpers_1.getTable)(rows, ["JurusanID", "NamaJurusan"]);
            callback();
        });
    };
    Jurusan.prototype.find = function (id, callback) {
        config_1.pool.all("".concat((0, config_1.Select)("jurusan"), " ").concat((0, config_1.Where)({ JurusanID: id })), { $JurusanID: id }, function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            (0, helpers_1.getTable)(rows, ["JurusanID", "NamaJurusan"]);
            callback();
        });
    };
    Jurusan.prototype.add = function (value, callback) {
        config_1.pool.run((0, config_1.Insert)("jurusan", ["JurusanID", "NamaJurusan"], value), function (err) {
            if (err)
                (0, helpers_1.handleError)(err);
            console.log("Data Jurusan Baru Berhasil Ditambahkan.");
            callback();
        });
    };
    Jurusan.prototype.remove = function (id, callback) {
        config_1.pool.all("".concat((0, config_1.Select)("jurusan"), " ").concat((0, config_1.Where)({ JurusanID: id })), { $JurusanID: id }, function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            if (rows.length > 0) {
                config_1.pool.run("".concat((0, config_1.Delete)("jurusan"), " ").concat((0, config_1.Where)({ JurusanID: id })), { $JurusanID: id }, function (err) {
                    if (err)
                        (0, helpers_1.handleError)(err);
                    callback(true, id);
                });
                return;
            }
            callback(false, id);
        });
    };
    return Jurusan;
}());
exports["default"] = Jurusan;
