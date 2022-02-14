import { Interface } from "readline";
import Dosen from "../../services/control/dosen";
import { garis } from "../../constants";
import { rl } from "../../services/readline";

export function tambahDosen(dosen: Dosen, callback: Function) {
  console.log(`${garis}\nLengkapi data di bawah ini:\n`);
  rl.question("ID Dosen:", (IDDosen) => {
    rl.question("NAMA:", (NAMA) => {
      dosen.add([IDDosen, NAMA], callback);
    });
  });
}

export function hapusDosen(dosen: Dosen, callback: Function) {
  rl.question("masukkan ID dosen yang akan dihapus:", (ID) => {
    dosen.remove(Number(ID), callback);
  });
}
