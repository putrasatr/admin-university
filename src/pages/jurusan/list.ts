import { Interface } from "readline";
import Jurusan from "../../services/control/jurusan";
import { garis } from "../../constants";

export function findJurusan(
  rl: Interface,
  jurusan: Jurusan,
  callback: Function
) {
  console.log(garis);
  rl.question(`Masukan ID:`, (ID) => {
    jurusan.find(ID, callback);
  });
}
