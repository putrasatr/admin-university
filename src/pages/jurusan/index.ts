import { menuView } from "../../constants";
import JurusanTable from "../../services/control/jurusan";
import { rl } from "../../services/readline";
import mainMenu from "../main-menu";
import { hapusJurusan, tambahJurusan } from "./form";
import { findJurusan } from "./list";

export default function jurusanMenu() {
  const jurusan = new JurusanTable();
  menuView("Jurusan");
  rl.question("masukan salah satu no. dari opsi diatas:", (input) => {
    switch (input.trim()) {
      case "1":
        jurusan.list(() => {
          jurusanMenu();
        });
        break;
      case "2":
        findJurusan(jurusan, () => jurusanMenu());
        break;
      case "3":
        tambahJurusan(jurusan, () => jurusanMenu());
        break;
      case "4":
        hapusJurusan(jurusan, (res: boolean, id: string) => {
          console.log("\n");
          if (res) {
            console.log(`Jurusan dengan ID Jurusan : ${id} berhasil di hapus.`);
          } else {
            console.log(`Jurusan dengan ID Jurusan : ${id} tidak terdaftar`);
          }
          jurusanMenu();
        });
        break;
      case "5":
        mainMenu();
        break;
      default:
        console.log("\nMasukan nomor yang sesuai!!\n");
        jurusanMenu();
        break;
    }
  });
}
