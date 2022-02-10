import { Interface } from "readline";
import { garis } from "constants/index";
import MahasiswaTable from "services/control/mahasiswa";

export function findMahasiswa(
  rl: Interface,
  mahasiswa: MahasiswaTable,
  callback: Function
) {
  console.log(garis);
  rl.question(`Masukan NIM:`, (NIM) => {
    mahasiswa.find(NIM, callback);
  });
}
