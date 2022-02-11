import { pool, Select, Where, Insert, Delete } from "../../config";
import { handleError, getTable } from "../../helpers";

export default class MataKuliah {
  list(callback: Function) {
    pool.all(Select("mataKuliah"), (err: string, rows: []) => {
      if (err) handleError(err);
      getTable(rows, ["MatkulID", "NamaMatkul", "SKS", "DosenID"]);
      callback();
    });
  }
  find(id: string, callback: Function) {
    pool.all(
      `${Select("mataKuliah")} ${Where({ MatkulID: id })}`,
      { $MatkulID: id },
      (err: string, rows: []) => {
        if (err) handleError(err);
        getTable(rows, ["MatkulID", "NamaMatkul", "SKS", "DosenID"]);
        callback();
      }
    );
  }
  add(value: string[], callback: Function) {
    pool.run(
      Insert("mataKuliah", ["MatkulID", "NamaMatkul", "SKS", "DosenID"], value),
      (err: string) => {
        if (err) handleError(err);
        console.log("Data MataKuliah Baru Berhasil Ditambahkan.");
        callback();
      }
    );
  }
  remove(id: string, callback: Function) {
    pool.all(
      `${Select("mataKuliah")} ${Where({ MatkulID: id })}`,
      { $MatkulID: id },
      (err: string, rows: []) => {
        if (err) handleError(err);
        if (rows.length > 0) {
          pool.run(
            `${Delete("mataKuliah")} ${Where({ MatkulID: id })}`,
            { $MatkulID: id },
            (err: string) => {
              if (err) handleError(err);
              callback(true, id);
            }
          );
          return;
        }
        callback(false, id);
      }
    );
  }
}
