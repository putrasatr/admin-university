import { Interface } from "readline";
import { garis } from "constants/index";
// import jurusanMenu from "./jurusan/index.js";
import mahasiswaMenu from "../mahasiswa";
// import dosenMenu from "./dosen/index.js";
// import mataKuliahMenu from "./mataKuliah/index.js";
// import kontrakMenu from "./kontrak/index.js";

export default function mainMenu(rl: Interface) {
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
        mahasiswaMenu(rl);
        break;
      // case "2":
      //   jurusanMenu(rl);
      //   break;
      // case "3":
      //   dosenMenu(rl);
      //   break;
      // case "4":
      //   mataKuliahMenu(rl);
      //   break;
      // case "5":
      //   kontrakMenu(rl);
      //   break;
      // case "6":
      //   mainLogin(rl);
      //   break;

      default:
        console.log("\nMasukan nomor yang sesuai!!\n");
        mainMenu(rl);
        break;
    }
  });
}
