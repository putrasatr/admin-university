import { Interface } from "readline";
import { menuView } from "../../constants";
import MahasiswaTable from "../../services/control/mahasiswa";
import mainMenu from "../main-menu";
import { hapusMurid, tambahMahasiswa } from "./form";
import { findMahasiswa } from "./list";
import { rl } from "../../services/readline";

export default function mahasiswaMenu() {
  const mahasiswa = new MahasiswaTable();
  menuView("Mahasiswa");
  rl.question("masukan salah satu no. dari opsi diatas: ", (mhs) => {
    switch (mhs) {
      case "1":
        mahasiswa.list(() => {
          mahasiswaMenu();
        });
        break;
      case "2":
        findMahasiswa(mahasiswa, () => mahasiswaMenu());
        break;
      case "3":
        tambahMahasiswa(mahasiswa, () => mahasiswaMenu());
        break;
      case "4":
        hapusMurid(mahasiswa, (isSuccess: Boolean, id: string) => {
          console.log("\n");
          if (isSuccess) {
            console.log(
              `Mahasiswa dengan ID Mahasiswa : ${id} berhasil di hapus.`
            );
          } else {
            console.log(
              `Mahasiswa dengan ID Mahasiswa : ${id} tidak terdaftar`
            );
          }
          mahasiswaMenu();
        });
        break;
      case "5":
        mainMenu();
        break;
      default:
        console.log("\nMasukan nomor yang sesuai!!\n");
        mahasiswaMenu();
        break;
    }
  });
}
