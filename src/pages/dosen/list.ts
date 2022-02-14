import { Interface } from "readline";
import Dosen from "../../services/control/dosen";
import { garis } from "../../constants";
import { rl } from "../../services/readline";

export function findDosen(dosen: Dosen, callback: Function) {
  console.log(garis);
  rl.question(`Masukan ID:`, (ID) => {
    dosen.find(Number(ID), callback);
  });
}
