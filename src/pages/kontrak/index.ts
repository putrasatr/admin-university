import { Interface } from "readline";
import { menuView } from "../../constants";
import KontrakTable from "../../services/control/kontrak";
import { rl } from "../../services/readline";
import mainMenu from "../main-menu";
import { hapusKontrak, tambahKontrak } from "./form";
import { findKontrak } from "./list";

export default function kontrakMenu() {
  const kontrak = new KontrakTable();
  menuView("Kontrak");
  rl.question("masukan salah satu no. dari opsi diatas:", (input) => {
    switch (input.trim()) {
      case "1":
        kontrak.list(() => {
          kontrakMenu();
        });
        break;
      case "2":
        findKontrak(kontrak, () => kontrakMenu());
        break;
      case "3":
        tambahKontrak(kontrak, () => kontrakMenu());
        break;
      case "4":
        hapusKontrak(kontrak, (res: boolean, id: string) => {
          console.log("\n");
          if (res) {
            console.log(`Kontrak dengan NIM : ${id} berhasil di hapus.`);
          } else {
            console.log(`Kontrak dengan NIM : ${id} tidak terdaftar`);
          }
          kontrakMenu();
        });
        break;
      case "5":
        mainMenu();
        break;
      default:
        console.log("\nMasukan nomor yang sesuai!!\n");
        kontrakMenu();
        break;
    }
  });
}
