import { pool, Select, Where, Insert, Delete, Join } from "../../config";
import { handleError, getTable } from "../../helpers";

export default class Mahasiswa {
  list(callback: Function) {
    pool.all(Select("mahasiswa"), (err: string, rows: []) => {
      if (err) handleError(err);
      getTable(rows, [
        "NIM",
        "NamaMahasiswa",
        "Alamat",
        "JurusanID",
        "tanggalLahir",
      ]);
      callback();
    });
  }
  find(id: string, callback: Function) {
    pool.all(
      `${Select("mahasiswa")} ${Join(
        [{ jurusan: "JurusanID" }, { mahasiswa: "JurusanID" }],
        "left"
      )} ${Where({ NIM: id })}`,
      { $NIM: id },
      (err: string, rows: []) => {
        if (err) handleError(err);
        getTable(rows, [
          "NIM",
          "NamaMahasiswa",
          "Alamat",
          "JurusanID",
          "tanggalLahir",
          "NamaJurusan",
        ]);
        callback();
      }
    );
  }
  add(value: string[], callback: Function) {
    pool.run(
      Insert(
        "mahasiswa",
        ["NIM", "NamaMahasiswa", "Alamat", "JurusanID", "tanggalLahir"],
        value
      ),
      (err: string) => {
        if (err) handleError(err);
        console.log("Data Mahasiswa Baru Berhasil Ditambahkan.");
        callback();
      }
    );
  }
  remove(id: string, callback: Function) {
    pool.all(
      `${Select("mahasiswa")} ${Where({ NIM: id })}`,
      { $NIM: id },
      (err: string, rows) => {
        if (err) handleError(err);
        if (rows.length > 0) {
          pool.run(
            `${Delete("mahasiswa")} ${Where({ NIM: id })}`,
            { $NIM: id },
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
