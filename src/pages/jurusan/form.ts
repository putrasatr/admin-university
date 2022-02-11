import { Interface } from "readline";
import Jurusan from "../../services/control/jurusan";
import { garis } from "../../constants";

export function tambahJurusan(
  rl: Interface,
  jurusan: Jurusan,
  callback: Function
) {
  console.log(`${garis}\nLengkapi data di bawah ini:\n`);
  rl.question("ID Jurusan:", (IDJurusan) => {
    rl.question("NAMA:", (NAMA) => {
      jurusan.add([IDJurusan, NAMA], callback);
    });
  });
}

export function hapusJurusan(
  rl: Interface,
  jurusan: Jurusan,
  callback: Function
) {
  rl.question("masukkan ID jurusan yang akan dihapus:", (ID) => {
    jurusan.remove(ID, callback);
  });
}
