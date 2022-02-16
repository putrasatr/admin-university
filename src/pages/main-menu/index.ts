import { rl } from "../../services/readline";
import { garis } from "../../constants";
import jurusanMenu from "../jurusan";
import mahasiswaMenu from "../mahasiswa";
import dosenMenu from "../dosen";
import mataKuliahMenu from "../mataKuliah";
import kontrakMenu from "../kontrak";
import mainLogin from "../../pages";

export default function mainMenu() {
  console.log(`Silahkan pilih opsi dibawah ini
[1] Mahasiswa
[2] Jurusan
[3] Dosen
[4] Mata Kuliah
[5] Kontrak
[6] Keluar
${garis}`);
  rl.question("Masukan salah satu no. dari opsi diatas:", (Masukan) => {
    switch (Masukan.trim().toLowerCase()) {
      case "1":
        mahasiswaMenu();
        break;
      case "2":
        jurusanMenu();
        break;
      case "3":
        dosenMenu();
        break;
      case "4":
        mataKuliahMenu();
        break;
      case "5":
        kontrakMenu();
        break;
      case "6":
        mainLogin();
        break;
      default:
        console.log("\nMasukan nomor yang sesuai!!\n");
        mainMenu();
        break;
    }
  });
}
