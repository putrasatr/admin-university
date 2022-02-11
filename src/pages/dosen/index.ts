import { Interface } from "readline";
import { menuView } from "../../constants/index.js";
import DosenTable from "../../services/control/dosen.js";
import mainMenu from "../main-menu";
import { hapusDosen, tambahDosen } from "./form";
import { findDosen } from "./list";

export default function dosenMenu(rl: Interface) {
  const dosen = new DosenTable();
  menuView("Dosen");
  rl.question("masukan salah satu no. dari opsi diatas:", (input) => {
    switch (input.trim()) {
      case "1":
        dosen.list(() => {
          dosenMenu(rl);
        });
        break;
      case "2":
        findDosen(rl, dosen, () => dosenMenu(rl));
        break;
      case "3":
        tambahDosen(rl, dosen, () => dosenMenu(rl));
        break;
      case "4":
        hapusDosen(rl, dosen, (res: Boolean, id: number) => {
          console.log("\n");
          if (res) {
            console.log(`Dosen dengan ID Dosen : ${id} berhasil di hapus.`);
          } else {
            console.log(`Dosen dengan ID Dosen : ${id} tidak terdaftar`);
          }
          dosenMenu(rl);
        });
        break;
      case "5":
        mainMenu(rl);
        break;
      default:
        console.log("\nMasukan nomor yang sesuai!!\n");
        dosenMenu(rl);
        break;
    }
  });
}
