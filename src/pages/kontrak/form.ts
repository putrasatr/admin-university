import { Interface } from "readline";
import Kontrak from "../../services/control/kontrak";
import { garis } from "../../constants";
import { rl } from "../../services/readline";

export function tambahKontrak(kontrak: Kontrak, callback: Function) {
  console.log(`${garis}\nLengkapi data di bawah ini:\n`);
  rl.question("NIM:", (NIM) => {
    rl.question("ID Mata Kuliah:", (MatkulID) => {
      rl.question("Jumlah SKS:", (SKS) => {
        rl.question("Nilai:", (Nilai) => {
          rl.question("ID Dosen:", (DosenID) => {
            kontrak.add([NIM, MatkulID, SKS, Nilai, DosenID], callback);
          });
        });
      });
    });
  });
}

export function hapusKontrak(kontrak: Kontrak, callback: Function) {
  rl.question("masukkan ID Mata Kuliah yang akan dihapus:", (ID) => {
    kontrak.remove(ID, callback);
  });
}
