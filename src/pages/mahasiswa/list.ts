import { Interface } from "readline";
import { garis } from "../../constants";
import MahasiswaTable from "../../services/control/mahasiswa";
import { rl } from "../../services/readline";

export function findMahasiswa(mahasiswa: MahasiswaTable, callback: Function) {
  console.log(garis);
  rl.question(`Masukan NIM:`, (NIM) => {
    mahasiswa.find(NIM, callback);
  });
}
