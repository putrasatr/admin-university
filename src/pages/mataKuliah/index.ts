import { menuView } from "../../constants";
import MataKuliahTable from "../../services/control/mataKuliah";
import { rl } from "../../services/readline";
import mainMenu from "../main-menu";
import { hapusMataKuliah, tambahMataKuliah } from "./form";
import { findMataKuliah } from "./list";

export default function matakuliahMenu() {
  const matakuliah = new MataKuliahTable();
  menuView("Mata Kuliah");
  rl.question("masukan salah satu no. dari opsi diatas:", (input) => {
    switch (input.trim()) {
      case "1":
        matakuliah.list(() => {
          matakuliahMenu();
        });
        break;
      case "2":
        findMataKuliah(matakuliah, () => matakuliahMenu());
        break;
      case "3":
        tambahMataKuliah(matakuliah, () => matakuliahMenu());
        break;
      case "4":
        hapusMataKuliah(matakuliah, (res: boolean, id: string) => {
          console.log("\n");
          if (res) {
            console.log(
              `Mata Kuliah dengan ID Mata Kuliah : ${id} berhasil di hapus.`
            );
          } else {
            console.log(
              `Mata Kuliah dengan ID Mata Kuliah : ${id} tidak terdaftar`
            );
          }
          matakuliahMenu();
        });
        break;
      case "5":
        mainMenu();
        break;
      default:
        console.log("\nMasukan nomor yang sesuai!!\n");
        matakuliahMenu();
        break;
    }
  });
}
