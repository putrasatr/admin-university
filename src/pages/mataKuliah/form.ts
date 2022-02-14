import { Interface } from "readline";
import MataKuliah from "../../services/control/mataKuliah";
import { garis } from "../../constants";
import { rl } from "../../services/readline";

export function tambahMataKuliah(mataKuliah: MataKuliah, callback: Function) {
  console.log(`${garis}\nLengkapi data di bawah ini:\n`);
  rl.question("ID Mata Kuliah:", (MatkulID) => {
    rl.question("Nama Mata Kuliah:", (NAMA) => {
      rl.question("Jumlah SKS:", (SKS) => {
        rl.question("ID Dosen:", (DosenID) => {
          mataKuliah.add([MatkulID, NAMA, SKS, DosenID], callback);
        });
      });
    });
  });
}

export function hapusMataKuliah(mataKuliah: MataKuliah, callback: Function) {
  rl.question("masukkan ID Mata Kuliah yang akan dihapus:", (ID) => {
    mataKuliah.remove(ID, callback);
  });
}
