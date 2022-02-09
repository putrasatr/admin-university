import * as Table from "cli-table3";

export function getTable(data: [], head: string[]) {
  let tableColumn: string[] = [];
  let table = new Table({
    head,
    colWidths: head.map(() => 20),
  });
  data.forEach((item, i) => {
    head.forEach((key: string) => {
      tableColumn.push(item[key]);
    });
    table.push(tableColumn);
    tableColumn = [];
  });
  console.log("\n" + table.toString());
}
export function handleError(err: string) {
  console.log(err);
  process.exit(1);
}
