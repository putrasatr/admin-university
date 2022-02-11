import { Interface } from "readline";
import MataKuliah from "../../services/control/mataKuliah";
import { garis } from "../../constants";

export function findMataKuliah(
  rl: Interface,
  mataKuliah: MataKuliah,
  callback: Function
) {
  console.log(garis);
  rl.question(`Masukan ID:`, (ID) => {
    mataKuliah.find(ID, callback);
  });
}
