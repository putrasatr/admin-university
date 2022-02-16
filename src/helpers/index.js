"use strict";
exports.__esModule = true;
exports.handleError = exports.getTable = void 0;
var Table = require("cli-table3");
function getTable(data, head) {
    var tableColumn = [];
    var table = new Table({
        head: head,
        colWidths: head.map(function () { return 20; })
    });
    data.forEach(function (item, i) {
        head.forEach(function (key) {
            tableColumn.push(item[key]);
        });
        table.push(tableColumn);
        tableColumn = [];
    });
    console.log("\n" + table.toString());
}
exports.getTable = getTable;
function handleError(err) {
    console.log(err);
    process.exit(1);
}
exports.handleError = handleError;
