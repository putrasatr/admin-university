import { Interface } from "readline";
import Kontrak from "../../services/control/kontrak";
import { garis } from "../../constants/";

export function findKontrak(
  rl: Interface,
  kontrak: Kontrak,
  callback: Function
) {
  console.log(garis);
  rl.question(`Masukan ID:`, (ID) => {
    kontrak.find(ID, callback);
  });
}
