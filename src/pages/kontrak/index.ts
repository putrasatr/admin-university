import { Interface } from "readline";
import { menuView } from "../../constants";
import KontrakTable from "../../services/control/kontrak";
import mainMenu from "../main-menu";
import { hapusKontrak, tambahKontrak } from "./form";
import { findKontrak } from "./list";

export default function kontrakMenu(rl: Interface) {
  const kontrak = new KontrakTable();
  menuView("Kontrak");
  rl.question("masukan salah satu no. dari opsi diatas:", (input) => {
    switch (input.trim()) {
      case "1":
        kontrak.list(() => {
          kontrakMenu(rl);
        });
        break;
      case "2":
        findKontrak(rl, kontrak, () => kontrakMenu(rl));
        break;
      case "3":
        tambahKontrak(rl, kontrak, () => kontrakMenu(rl));
        break;
      case "4":
        hapusKontrak(rl, kontrak, (res: boolean, id: string) => {
          console.log("\n");
          if (res) {
            console.log(`Kontrak dengan NIM : ${id} berhasil di hapus.`);
          } else {
            console.log(`Kontrak dengan NIM : ${id} tidak terdaftar`);
          }
          kontrakMenu(rl);
        });
        break;
      case "5":
        mainMenu(rl);
        break;
      default:
        console.log("\nMasukan nomor yang sesuai!!\n");
        kontrakMenu(rl);
        break;
    }
  });
}
