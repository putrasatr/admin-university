import Jurusan from "../../services/control/jurusan";
import { garis } from "../../constants";
import { rl } from "../../services/readline";

export function findJurusan(jurusan: Jurusan, callback: Function) {
  console.log(garis);
  rl.question(`Masukan ID:`, (ID) => {
    jurusan.find(ID, callback);
  });
}
