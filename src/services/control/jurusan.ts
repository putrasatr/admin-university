import { pool, Select, Where, Insert, Delete } from "../../config";
import { handleError, getTable } from "../../helpers";

export default class Jurusan {
  list(callback: Function) {
    pool.all(Select("jurusan"), (err: string, rows: []) => {
      if (err) handleError(err);
      getTable(rows, ["JurusanID", "NamaJurusan"]);
      callback();
    });
  }
  find(id: string, callback: Function) {
    pool.all(
      `${Select("jurusan")} ${Where({ JurusanID: id })}`,
      { $JurusanID: id },
      (err: string, rows: []) => {
        if (err) handleError(err);
        getTable(rows, ["JurusanID", "NamaJurusan"]);
        callback();
      }
    );
  }
  add(value: string[], callback: Function) {
    pool.run(
      Insert("jurusan", ["JurusanID", "NamaJurusan"], value),
      (err: string) => {
        if (err) handleError(err);
        console.log("Data Jurusan Baru Berhasil Ditambahkan.");
        callback();
      }
    );
  }
  remove(id: string, callback: Function) {
    pool.all(
      `${Select("jurusan")} ${Where({ JurusanID: id })}`,
      { $JurusanID: id },
      (err: string, rows: []) => {
        if (err) handleError(err);
        if (rows.length > 0) {
          pool.run(
            `${Delete("jurusan")} ${Where({ JurusanID: id })}`,
            { $JurusanID: id },
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
