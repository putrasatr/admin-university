"use strict";
exports.__esModule = true;
var config_1 = require("../../config");
var helpers_1 = require("../../helpers");
var MataKuliah = /** @class */ (function () {
    function MataKuliah() {
    }
    MataKuliah.prototype.list = function (callback) {
        config_1.pool.all((0, config_1.Select)("mataKuliah"), function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            (0, helpers_1.getTable)(rows, ["MatkulID", "NamaMatkul", "SKS", "DosenID"]);
            callback();
        });
    };
    MataKuliah.prototype.find = function (id, callback) {
        config_1.pool.all("".concat((0, config_1.Select)("mataKuliah"), " ").concat((0, config_1.Where)({ MatkulID: id })), { $MatkulID: id }, function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            (0, helpers_1.getTable)(rows, ["MatkulID", "NamaMatkul", "SKS", "DosenID"]);
            callback();
        });
    };
    MataKuliah.prototype.add = function (value, callback) {
        config_1.pool.run((0, config_1.Insert)("mataKuliah", ["MatkulID", "NamaMatkul", "SKS", "DosenID"], value), function (err) {
            if (err)
                (0, helpers_1.handleError)(err);
            console.log("Data MataKuliah Baru Berhasil Ditambahkan.");
            callback();
        });
    };
    MataKuliah.prototype.remove = function (id, callback) {
        config_1.pool.all("".concat((0, config_1.Select)("mataKuliah"), " ").concat((0, config_1.Where)({ MatkulID: id })), { $MatkulID: id }, function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            if (rows.length > 0) {
                config_1.pool.run("".concat((0, config_1.Delete)("mataKuliah"), " ").concat((0, config_1.Where)({ MatkulID: id })), { $MatkulID: id }, function (err) {
                    if (err)
                        (0, helpers_1.handleError)(err);
                    callback(true, id);
                });
                return;
            }
            callback(false, id);
        });
    };
    return MataKuliah;
}());
exports["default"] = MataKuliah;
