"use strict";
exports.__esModule = true;
var config_1 = require("../../config");
var helpers_1 = require("../../helpers");
var Users = /** @class */ (function () {
    function Users() {
    }
    Users.prototype.checkUsername = function (input, found, notFound) {
        config_1.pool.all("".concat((0, config_1.Select)("userName"), " ").concat((0, config_1.Where)({ Username: input })), { $Username: input }, function (err, rows) {
            if (err)
                (0, helpers_1.handleError)(err);
            if (rows.length > 0) {
                found(rows[0]);
            }
            else {
                console.log("Username tidak ditemukan");
                notFound();
            }
        });
    };
    return Users;
}());
exports["default"] = Users;
