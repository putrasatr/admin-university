export const garis = "=============================================";
export const greetingSentence = `
Welcome to Universitas Ngoding Indonesia
Jl Ngebul No. 666`;
export const menuView = (menu: string) => {
  console.log(`\nSilahkan pilih opsi dibawah ini
    [1] Daftar ${menu}
    [2] Cari ${menu}
    [3] Tambah ${menu}
    [4] Hapus ${menu}
    [5] Kembali\n${garis}`);
};
