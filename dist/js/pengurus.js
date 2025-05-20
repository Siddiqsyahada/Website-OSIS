


// Data pengurus
const dataPengurus = [
  { nama: "Rendy Budiman", panggilan: "Buren", kelas: "9", jabatan: "Pembina OSIS 1", instagram: "rendyburen" },
  { nama: "Fazzatul Husna", panggilan: "-", kelas: "-", jabatan: "Pembina OSIS 2", instagram: "-" },
  { nama: "Yuniarti", panggilan: "-", kelas: "-", jabatan: "Pembina OSIS 3", instagram: "-" },
  { nama: "Adriyansyah Nugraha", panggilan: "Adri", kelas: "XI.F1", jabatan: "Ketua MPK", instagram: "Adrynsnn" },
  { nama: "Vildo Degra", panggilan: "Vildo", kelas: "XI.F4", jabatan: "Wakil Ketua MPK", instagram: "Vdodga_" },
  { nama: "Naila Khalifah Azzahra", panggilan: "Naila", kelas: "XI.F5", jabatan: "Sekretaris MPK", instagram: "nnaiii.laa_" },
  { nama: "Quratul Ayni", panggilan: "Ayni", kelas: "XI.F3", jabatan: "Bendahara MPK", instagram: "qrtl.ay" },
  { nama: "Abil Raydhatul Efendi", panggilan: "Abil", kelas: "X.E2", jabatan: "Komisi A", instagram: "abilfyuu" },
  { nama: "Salsa Novita", panggilan: "Salsa", kelas: "X.E2", jabatan: "Komisi A", instagram: "sasabc71" },
  { nama: "Fadhlurrahman Raaif", panggilan: "Raaif", kelas: "X.E2", jabatan: "Komisi B", instagram: "Fadhlurrahmanraaif55" },
  { nama: "Syabila Fitri", panggilan: "billa", kelas: "X.E4", jabatan: "Komisi B", instagram: "sbilafitri_" },
  { nama: "Syalwa Puti Sikumbang", panggilan: "Syalwa", kelas: "X.E10", jabatan: "Komisi C", instagram: "syalwawwa" },
  { nama: "Zura Humaira", panggilan: "Zura", kelas: "X.E3", jabatan: "Komisi C", instagram: "--" },
  { nama: "Siddiq Insan Syahada", panggilan: "Siddiq", kelas: "XI.F4", jabatan: "Ketua OSIS", instagram: "siddiq_i_s" },
  { nama: "Pniel Zebua", panggilan: "Niel", kelas: "XI.F5", jabatan: "Wakil Ketua OSIS 1", instagram: "nyelzbw" },
  { nama: "Arthaul Zikra", panggilan: "Zikra", kelas: "XI.F5", jabatan: "Wakil Ketua OSIS 2", instagram: "zikzik08" },
  { nama: "Riva Keisya Effendy", panggilan: "Riva", kelas: "XI.F9", jabatan: "Sekretaris OSIS 1", instagram: "Rvakyy" },
  { nama: "Diffa Firma Suri", panggilan: "Dipaa", kelas: "XI.F5", jabatan: "Sekretaris OSIS 2", instagram: "diffafirmaa" },
  { nama: "Nessha Adriani", panggilan: "nessha ", kelas: "XI.F5", jabatan: "Bendahara OSIS 1", instagram: "nesshaadrianii" },
  { nama: "chayara Balqis Qanita", panggilan: "chayara", kelas: "XI.F6", jabatan: "Bendahara OSIS 2", instagram: "chayarals" },
  { nama: "Mozart Marchello Elshie", panggilan: "Mozart", kelas: "XI.F9", jabatan: "Humas", instagram: "mozartmarchello" },
  { nama: "Arifa Rasyidah", panggilan: "Arifa", kelas: "X.E3", jabatan: "Dokumentasi 1", instagram: "rfha_rasydh " },
  { nama: "Syifa Salsabilla", panggilan: "Syifa ", kelas: "X.E2", jabatan: "Dokumentasi 2", instagram: "Faassyiii_" },
  { nama: "Syifa Henivauline", panggilan: "Syifa ", kelas: "X.E9", jabatan: "Sekbid 1", instagram: "syifahenivauline" },
  { nama: "Rizki Heryunda Agilfi", panggilan: "Rizki", kelas: "X.E3", jabatan: "Sekbid 1", instagram: "--" },
  { nama: "Raffa Zevio", panggilan: "Raffa", kelas: "X.E1", jabatan: "Sekbid 2", instagram: "raffa_zvio" },
  { nama: "Kartika Candra Kirana", panggilan: "Kartika", kelas: "X.E10", jabatan: "Sekbid 2", instagram: "kartikaaa.candra" },
  { nama: "Cinta Fadila Putri", panggilan: "cinta", kelas: "XI.F5", jabatan: "Sekbid 3", instagram: "cntafdlh_" },
  { nama: "Rayhan Ramadhan", panggilan: "Ray", kelas: "X.E3", jabatan: "Sekbid 3", instagram: "ray.rmdh20" },
  { nama: "Muhammad Fauzi", panggilan: "Fauzi", kelas: "X.E8", jabatan: "Sekbid 4", instagram: "fauxii10" },
  { nama: "Melani Siska Rahayu", panggilan: "melani", kelas: "X.E7", jabatan: "Sekbid 4", instagram: "melanisiska32" },
  { nama: "Raditya Zaki Riandi", panggilan: "Radit", kelas: "X.E8", jabatan: "Sekbid 5", instagram: "snr_shark" },
  { nama: "Naila Insani Basir", panggilan: "Naila", kelas: "X.E2", jabatan: "Sekbid 5", instagram: "naylainsanii_" },
  { nama: "Nayla Dwi Putri", panggilan: "Nanayy", kelas: "X.E10", jabatan: "Sekbid 6", instagram: "Nyladwiptr__" },
  { nama: "Andhika Dwi Amnur", panggilan: "Dhika", kelas: "X.E9", jabatan: "Sekbid 6", instagram: "dhika_dwiamnur" },
  { nama: "Alfar Manda Putri", panggilan: "Manda", kelas: "X.E3", jabatan: "Sekbid 7", instagram: "alfarmandaa" },
  { nama: "Chesa Amanda", panggilan: "chesa", kelas: "X.E4", jabatan: "Sekbid 7", instagram: "" },
  { nama: "Thafza Antika Pratama", panggilan: "Azha", kelas: "X.E3", jabatan: "Sekbid 8", instagram: "Siantikaxd" },
  { nama: "Salima Ramadani", panggilan: "Salima", kelas: "X.E7", jabatan: "Sekbid 8", instagram: "Its_salimaa" },
  { nama: "Muhammad Fahcri", panggilan: "Fahri", kelas: "X.E9", jabatan: "Sekbid 9", instagram: "muhammad_fahri_ryy" },
  { nama: "Oriana Callysta Idham", panggilan: "Orin", kelas: "XI.F4", jabatan: "Sekbid 9", instagram: "orianacally" },
  { nama: "Novelia Fienka", panggilan: "Velia", kelas: "X.E3", jabatan: "Sekbid 10", instagram: "veliaa281" },
  { nama: "Gusti Handri Ashary", panggilan: "Gusti", kelas: "XI.F5", jabatan: "Sekbid 10", instagram: "hndriiashary._" },
];


// Fungsi untuk menampilkan kartu pengurus
const kategoriPengurus = {
  Pembina: ["Pembina OSIS 1", "Pembina OSIS 2", "Pembina OSIS 3"],
  Mpk: ["Ketua MPK", "Wakil Ketua MPK", "Sekretaris MPK", "Bendahara MPK", "Komisi A", "Komisi B", "Komisi C"],
  IntiOsis: ["Ketua OSIS", "Wakil Ketua OSIS 1", "Wakil Ketua OSIS 2", "Sekretaris OSIS 1", "Sekretaris OSIS 2", "Bendahara OSIS 1", "Bendahara OSIS 2", "Humas","Dokumentasi 1","Dokumentasi 2"],
  AnggotaOsis: ["Sekbid 1", "Sekbid 2", "Sekbid 3", "Sekbid 4", "Sekbid 5", "Sekbid 6", "Sekbid 7", "Sekbid 8", "Sekbid 9", "Sekbid 10"]
};

function tampilkanKartuPengurus(dataPengurus, jabatan) {
  const containerKartu = document.getElementById("containerKartu" + jabatan);
  const jabatanList = kategoriPengurus[jabatan];

  const pengurusFiltered = dataPengurus.filter(p => jabatanList.includes(p.jabatan));

  pengurusFiltered.forEach(pengurus => {
    const biodataLink = pengurus.nama.replace(/\s+/g, '');

    const cardDiv = document.createElement("div");
    cardDiv.className = "flex lg:w-1/3 p-4 lg:m-2 lg:border-solid lg:border-slate-400 rounded-lg lg:bg-slate-300 lg:border-4 lg:p-7";

    cardDiv.innerHTML = `
      <div class="border-solid rounded-md justify-center border-4 border-primary">
        <img class="w-[180px] h-40 flex justify-center rounded-md bg-cover" src="./dist/img/fotoPengurus/${pengurus.nama}.jpg" alt="Foto ${pengurus.nama}">
      </div>
      <div class="w-full h-full">
        <div class="p-3 items-center flex-row">
          <p><span class="text-md font-semibold">Nama: </span> ${pengurus.nama}</p>
          <p><span class="text-md font-semibold">Panggilan: </span> ${pengurus.panggilan}</p>
          <p><span class="text-md font-semibold">Kelas: </span> ${pengurus.kelas}</p>
          <p><span class="text-md font-semibold">Jabatan: </span> ${pengurus.jabatan}</p>
        </div>
        <div class="flex ml-1 items-center justify-between gap-4">
         <!-- <button type="button" class="w-1/2 px-4 py-2 text-base bg-white border-2 rounded-lg text-grey-500 hover:bg-gray-200">
            <a href="https://wa.me/${pengurus.nomorHp}" class="w-full h-full block">IG</a>
          </button> -->
          <button type="button" class="w-1/2 px-4 py-2 text-base text-white bg-primary border rounded-lg hover:bg-blue-400">
            <a href="./pengurusOsis/${biodataLink}.html">Biodata</a>
          </button>
        </div>
      </div>
    `;

    containerKartu.appendChild(cardDiv);
  });
}

// Pemanggilan fungsi
tampilkanKartuPengurus(dataPengurus, "Pembina");
tampilkanKartuPengurus(dataPengurus, "Mpk");
tampilkanKartuPengurus(dataPengurus, "IntiOsis");
tampilkanKartuPengurus(dataPengurus, "AnggotaOsis");

