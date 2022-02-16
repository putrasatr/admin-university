"use strict";
exports.__esModule = true;
var config_1 = require("../../config");
var helpers_1 = require("../../helpers");
var Dosen = /** @class */ (function () {
    function Dosen() {
    }
    Dosen.prototype.list = function (callback) {
        config_1.pool.all((0, config_1.Select)("dosen"), function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            (0, helpers_1.getTable)(rows, ["DosenID", "Nama"]);
            callback();
        });
    };
    Dosen.prototype.find = function (id, callback) {
        config_1.pool.all("".concat((0, config_1.Select)("dosen"), " ").concat((0, config_1.Where)({ DosenID: id })), { $DosenID: id }, function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            (0, helpers_1.getTable)(rows, ["DosenID", "Nama"]);
            callback();
        });
    };
    Dosen.prototype.add = function (value, callback) {
        config_1.pool.run((0, config_1.Insert)("dosen", ["DosenID", "Nama"], value), function (err) {
            if (err)
                (0, helpers_1.handleError)(err);
            console.log("Data Dosen Baru Berhasil Ditambahkan.");
            callback();
        });
    };
    Dosen.prototype.remove = function (id, callback) {
        config_1.pool.all("".concat((0, config_1.Select)("dosen"), " ").concat((0, config_1.Where)({ DosenID: id })), { $DosenID: id }, function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            if (rows.length > 0) {
                config_1.pool.run("".concat((0, config_1.Delete)("dosen"), " ").concat((0, config_1.Where)({ DosenID: id })), { $DosenID: id }, function (err) {
                    if (err)
                        (0, helpers_1.handleError)(err);
                    callback(true, id);
                });
                return;
            }
            callback(false, id);
        });
    };
    return Dosen;
}());
exports["default"] = Dosen;
