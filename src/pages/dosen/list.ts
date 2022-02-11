import { Interface } from "readline";
import Dosen from "services/control/dosen.js";
import { garis } from "../../constants/index.js";

export function findDosen(rl: Interface, dosen: Dosen, callback: Function) {
  console.log(garis);
  rl.question(`Masukan ID:`, (ID) => {
    dosen.find(Number(ID), callback);
  });
}
