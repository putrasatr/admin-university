import { Interface } from "readline";
import { menuView } from "../../constants";
import JurusanTable from "../../services/control/jurusan";
import mainMenu from "../main-menu";
import { hapusJurusan, tambahJurusan } from "./form";
import { findJurusan } from "./list";

export default function jurusanMenu(rl: Interface) {
  const jurusan = new JurusanTable();
  menuView("Jurusan");
  rl.question("masukan salah satu no. dari opsi diatas:", (input) => {
    switch (input.trim()) {
      case "1":
        jurusan.list(() => {
          jurusanMenu(rl);
        });
        break;
      case "2":
        findJurusan(rl, jurusan, () => jurusanMenu(rl));
        break;
      case "3":
        tambahJurusan(rl, jurusan, () => jurusanMenu(rl));
        break;
      case "4":
        hapusJurusan(rl, jurusan, (res: boolean, id: string) => {
          console.log("\n");
          if (res) {
            console.log(`Jurusan dengan ID Jurusan : ${id} berhasil di hapus.`);
          } else {
            console.log(`Jurusan dengan ID Jurusan : ${id} tidak terdaftar`);
          }
          jurusanMenu(rl);
        });
        break;
      case "5":
        mainMenu(rl);
        break;
      default:
        console.log("\nMasukan nomor yang sesuai!!\n");
        jurusanMenu(rl);
        break;
    }
  });
}
