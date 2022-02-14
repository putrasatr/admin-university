import { Interface } from "readline";
import MataKuliah from "../../services/control/mataKuliah";
import { garis } from "../../constants";
import { rl } from "../../services/readline";

export function findMataKuliah(mataKuliah: MataKuliah, callback: Function) {
  console.log(garis);
  rl.question(`Masukan ID:`, (ID) => {
    mataKuliah.find(ID, callback);
  });
}
