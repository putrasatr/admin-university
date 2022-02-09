import * as sqlite3 from "sqlite3";

class DbConnect {
  pool = new sqlite3.Database("./UPI.db");

  Select(q: string) {
    if (q.includes(",")) return `SELECT ${q}`;
    return `SELECT * FROM ${q}`;
  }

  Insert(table: string, c: string[], v: string[]) {
    return `INSERT INTO ${table}(${c.join(",")}) VALUES (${v.map(
      (item) => `'${item}'`
    )})`;
  }
  Where(o: object) {
    let i = 0;
    let s = "WHERE ";
    for (const k in o) {
      if (i) s += ` AND ${k} = $${k}`;
      else s += `${k} = $${k}`;

      i++;
    }
    return s;
  }

  Delete(table: string) {
    return `DELETE FROM ${table}`;
  }

  Join(a: any, op: string) {
    let s = `${op} JOIN `;
    a.forEach((i: any, idx: number) => {
      if (idx)
        for (const k in i) {
          s += ` = ${k}.${i[k]}`;
        }
      else
        for (const k in i) {
          s += `${k} ON ${k}.${i[k]}`;
        }
    });
    return s;
  }

  isConnect() {
    console.log("You've connect to database UPI");
  }
}
const newDB = new DbConnect();

export const pool = newDB.pool;

export const Select = newDB.Select;

export const Where = newDB.Where;

export const Insert = newDB.Insert;

export const Delete = newDB.Delete;

export const Join = newDB.Join;

export const isConnect = newDB.isConnect;

export default newDB;
