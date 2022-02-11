import { pool, Select, Where, Insert, Delete } from "../../config";
import { handleError, getTable } from "../../helpers";

export default class Dosen {
  list(callback: Function) {
    pool.all(Select("dosen"), (err: string, rows: []) => {
      if (err) handleError(err);
      getTable(rows, ["DosenID", "Nama"]);
      callback();
    });
  }
  find(id: number, callback: Function) {
    pool.all(
      `${Select("dosen")} ${Where({ DosenID: id })}`,
      { $DosenID: id },
      (err: string, rows: []) => {
        if (err) handleError(err);
        getTable(rows, ["DosenID", "Nama"]);
        callback();
      }
    );
  }
  add(value: string[], callback: Function) {
    pool.run(Insert("dosen", ["DosenID", "Nama"], value), (err: string) => {
      if (err) handleError(err);
      console.log("Data Dosen Baru Berhasil Ditambahkan.");
      callback();
    });
  }
  remove(id: number, callback: Function) {
    pool.all(
      `${Select("dosen")} ${Where({ DosenID: id })}`,
      { $DosenID: id },
      (err: string, rows) => {
        if (err) handleError(err);
        if (rows.length > 0) {
          pool.run(
            `${Delete("dosen")} ${Where({ DosenID: id })}`,
            { $DosenID: id },
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
