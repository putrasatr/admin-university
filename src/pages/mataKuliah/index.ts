import { Interface } from "readline";
import { menuView } from "../../constants";
import MataKuliahTable from "../../services/control/mataKuliah";
import mainMenu from "../main-menu";
import { hapusMataKuliah, tambahMataKuliah } from "./form";
import { findMataKuliah } from "./list";

export default function matakuliahMenu(rl: Interface) {
  const matakuliah = new MataKuliahTable();
  menuView("Mata Kuliah");
  rl.question("masukan salah satu no. dari opsi diatas:", (input) => {
    switch (input.trim()) {
      case "1":
        matakuliah.list(() => {
          matakuliahMenu(rl);
        });
        break;
      case "2":
        findMataKuliah(rl, matakuliah, () => matakuliahMenu(rl));
        break;
      case "3":
        tambahMataKuliah(rl, matakuliah, () => matakuliahMenu(rl));
        break;
      case "4":
        hapusMataKuliah(rl, matakuliah, (res: boolean, id: string) => {
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
          matakuliahMenu(rl);
        });
        break;
      case "5":
        mainMenu(rl);
        break;
      default:
        console.log("\nMasukan nomor yang sesuai!!\n");
        matakuliahMenu(rl);
        break;
    }
  });
}
