import { menuView } from "../../constants";
import DosenTable from "../../services/control/dosen";
import { rl } from "../../services/readline";
import mainMenu from "../main-menu";
import { hapusDosen, tambahDosen } from "./form";
import { findDosen } from "./list";

export default function dosenMenu() {
  const dosen = new DosenTable();
  menuView("Dosen");
  rl.question("masukan salah satu no. dari opsi diatas:", (input) => {
    switch (input.trim()) {
      case "1":
        dosen.list(() => {
          dosenMenu();
        });
        break;
      case "2":
        findDosen(dosen, () => dosenMenu());
        break;
      case "3":
        tambahDosen(dosen, () => dosenMenu());
        break;
      case "4":
        hapusDosen(dosen, (res: Boolean, id: number) => {
          console.log("\n");
          if (res) {
            console.log(`Dosen dengan ID Dosen : ${id} berhasil di hapus.`);
          } else {
            console.log(`Dosen dengan ID Dosen : ${id} tidak terdaftar`);
          }
          dosenMenu();
        });
        break;
      case "5":
        mainMenu();
        break;
      default:
        console.log("\nMasukan nomor yang sesuai!!\n");
        dosenMenu();
        break;
    }
  });
}
