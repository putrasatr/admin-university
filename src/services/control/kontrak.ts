import { pool, Select, Where, Insert, Delete, Join } from "../../config";
import { handleError, getTable } from "../../helpers";

export default class Kontrak {
  list(callback: Function) {
    pool.all(Select("daftarNilai"), (err: string, rows: []) => {
      if (err) handleError(err);
      getTable(rows, ["NIM", "MatkulID", "SKS", "Nilai", "DosenID"]);
      callback();
    });
  }
  find(id: string, callback: Function) {
    pool.all(
      `
          ${Select(
            "mahasiswa.NIM,NamaMahasiswa,mataKuliah.MatkulID,NamaMatkul,daftarNilai.Nilai FROM mahasiswa"
          )} 
          ${Join([{ daftarNilai: "NIM" }, { mahasiswa: "NIM" }], "left")} 
          ${Join(
            [{ mataKuliah: "MatkulID" }, { daftarNilai: "MatkulID" }],
            "left"
          )} 
          WHERE daftarNilai.MatkulID = $MatkulID`,
      { $MatkulID: id },
      (err: string, rows: []) => {
        if (err) handleError(err);
        getTable(rows, [
          "NIM",
          "NamaMahasiswa",
          "MatkulID",
          "NamaMatkul",
          "Nilai",
        ]);
        callback();
      }
    );
  }
  add(value: string[], callback: Function) {
    pool.run(
      Insert(
        "daftarNilai",
        ["NIM", "MatkulID", "SKS", "Nilai", "DosenID"],
        value
      ),
      (err: string) => {
        if (err) handleError(err);
        console.log("Data Kontrak Baru Berhasil Ditambahkan.");
        callback();
      }
    );
  }
  remove(id: string, callback: Function) {
    pool.all(
      `${Select("daftarNilai")} ${Where({ KontrakID: id })}`,
      { $KontrakID: id },
      (err: string, rows: []) => {
        if (err) handleError(err);
        if (rows.length > 0) {
          pool.run(
            `${Delete("daftarNilai")} ${Where({ KontrakID: id })}`,
            { $KontrakID: id },
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
