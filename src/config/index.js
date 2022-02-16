"use strict";
exports.__esModule = true;
exports.isConnect = exports.Join = exports.Delete = exports.Insert = exports.Where = exports.Select = exports.pool = void 0;
var sqlite3 = require("sqlite3");
var DbConnect = /** @class */ (function () {
    function DbConnect() {
        this.pool = new sqlite3.Database("./UPI.db");
    }
    DbConnect.prototype.Select = function (q) {
        if (q.includes(","))
            return "SELECT ".concat(q);
        return "SELECT * FROM ".concat(q);
    };
    DbConnect.prototype.Insert = function (table, c, v) {
        return "INSERT INTO ".concat(table, "(").concat(c.join(","), ") VALUES (").concat(v.map(function (item) { return "'".concat(item, "'"); }), ")");
    };
    DbConnect.prototype.Where = function (o) {
        var i = 0;
        var s = "WHERE ";
        for (var k in o) {
            if (i)
                s += " AND ".concat(k, " = $").concat(k);
            else
                s += "".concat(k, " = $").concat(k);
            i++;
        }
        return s;
    };
    DbConnect.prototype.Delete = function (table) {
        return "DELETE FROM ".concat(table);
    };
    DbConnect.prototype.Join = function (a, op) {
        var s = "".concat(op, " JOIN ");
        a.forEach(function (i, idx) {
            if (idx)
                for (var k in i) {
                    s += " = ".concat(k, ".").concat(i[k]);
                }
            else
                for (var k in i) {
                    s += "".concat(k, " ON ").concat(k, ".").concat(i[k]);
                }
        });
        return s;
    };
    DbConnect.prototype.isConnect = function () {
        console.log("You've connect to database UPI");
    };
    return DbConnect;
}());
var newDB = new DbConnect();
exports.pool = newDB.pool;
exports.Select = newDB.Select;
exports.Where = newDB.Where;
exports.Insert = newDB.Insert;
exports.Delete = newDB.Delete;
exports.Join = newDB.Join;
exports.isConnect = newDB.isConnect;
exports["default"] = newDB;
