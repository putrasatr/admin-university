import { Interface } from "readline";
import { menuView } from "../../constants";
import MahasiswaTable from "../../services/control/mahasiswa";
import mainMenu from "../main-menu";
import { hapusMurid, tambahMahasiswa } from "./form";
import { findMahasiswa } from "./list";

export default function mahasiswaMenu(rl: Interface) {
  const mahasiswa = new MahasiswaTable();
  menuView("Mahasiswa");
  rl.question("masukan salah satu no. dari opsi diatas: ", (mhs) => {
    switch (mhs) {
      case "1":
        mahasiswa.list(() => {
          mahasiswaMenu(rl);
        });
        break;
      case "2":
        findMahasiswa(rl, mahasiswa, () => mahasiswaMenu(rl));
        break;
      case "3":
        tambahMahasiswa(rl, mahasiswa, () => mahasiswaMenu(rl));
        break;
      case "4":
        hapusMurid(rl, mahasiswa, (isSuccess: Boolean, id: string) => {
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
          mahasiswaMenu(rl);
        });
        break;
      case "5":
        mainMenu(rl);
        break;
      default:
        console.log("\nMasukan nomor yang sesuai!!\n");
        mahasiswaMenu(rl);
        break;
    }
  });
}
