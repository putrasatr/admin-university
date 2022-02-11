import { Interface } from "readline";
import Dosen from "../../services/control/dosen";
import { garis } from "../../constants";

export function tambahDosen(rl: Interface, dosen: Dosen, callback: Function) {
  console.log(`${garis}\nLengkapi data di bawah ini:\n`);
  rl.question("ID Dosen:", (IDDosen) => {
    rl.question("NAMA:", (NAMA) => {
      dosen.add([IDDosen, NAMA], callback);
    });
  });
}

export function hapusDosen(rl: Interface, dosen: Dosen, callback: Function) {
  rl.question("masukkan ID dosen yang akan dihapus:", (ID) => {
    dosen.remove(Number(ID), callback);
  });
}
