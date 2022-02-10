import { Interface } from "readline";
import { garis } from "constants/index";
import Mahasiswa from "services/control/mahasiswa";

export function tambahMahasiswa(
  rl: Interface,
  mahasiswa: Mahasiswa,
  callback: Function
) {
  console.log(`${garis}\nLengkapi data di bawah ini:\n`);
  rl.question("NIM:", (NIM) => {
    rl.question("NAMA:", (NAMA) => {
      rl.question("Alamat:", (Alamat) => {
        rl.question("ID Jurusan:", (IDJurusan) => {
          rl.question(
            "\nFormat tanggal lahir: YYYY-MM-DD\nContoh : 2002-12-30\nTanggal Lahir:",
            (tgl) => {
              mahasiswa.add([NIM, NAMA, Alamat, IDJurusan, tgl], callback);
            }
          );
        });
      });
    });
  });
}

export function hapusMurid(
  rl: Interface,
  mahasiswa: Mahasiswa,
  callback: Function
) {
  rl.question("masukkan NIM mahasiswa yang akan dihapus:", (NIM) => {
    mahasiswa.remove(NIM, callback);
  });
}
