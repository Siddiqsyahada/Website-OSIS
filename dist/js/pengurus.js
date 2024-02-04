


// Data pengurus
const dataPengurus = [
  { nama: "Hansbri Novara", panggilan: "Hansbri", kelas: "XI MIPA 2", jabatan: "Ketua MPK",nomorHp:"6285156924300" },
  { nama: "Hanny Pirhadi", panggilan: "Hanny", kelas: "XI MIPA 3", jabatan: "Wakil Ketua MPK",nomorHp:"6289636844347" },
  { nama: "Azzura Rathu Liona", panggilan: "Zura", kelas: "XI IPA 5", jabatan: "Sekretaris MPK",nomorHp:"6282389834396" },
  { nama: "Mutiara Naswa", panggilan: "Muti", kelas: "XI MIPA 6", jabatan: "Bendahara MPK",nomorHp:"6281268121507" },
  { nama: "Refaldi Prianata", panggilan: "Refal", kelas: "XI MIPA 6", jabatan: "Komisi A",nomorHp:"6282172467639" },
  { nama: "Nisa Nurul Fauziah", panggilan: "Nisa", kelas: "XE9", jabatan: "Komisi A",nomorHp:"6289529258596" },
  { nama: "Satria Elson", panggilan: "Satria", kelas: "11 mipa 3", jabatan: "Komisi B",nomorHp:"6289508824280" },
  { nama: "Alfadhli", panggilan: "Fadhli", kelas: "XE9", jabatan: "Komisi B",nomorHp: "6282391145456" },
  { nama: "Pniel Zebua", panggilan: "Niel", kelas: "XE8", jabatan: "Komisi C",nomorHp:"6282185930625" },
  { nama: "M. Fachrur Rozi Nst", panggilan: "Rozi", kelas: "X E10", jabatan: "Komisi C",nomorHp:"6283133293518" },
  { nama: "Antarun Asady Luthfi", panggilan: "Luthfi", kelas: "Xl mipa 4", jabatan: "Ketua Osis",nomorHp: "6281371792144"},
  { nama: "Bharata Abisena", panggilan: "Abi", kelas: "XI MIPA3", jabatan: "Wakil Ketua Osis 1",nomorHp:"6282268647109" },
  { nama: "Kayla Saskia Ananda", panggilan: "Kayla", kelas: "XI IPS 2", jabatan: "Wakil Ketua Osis 2",nomorHp:"6288270933797" },
  { nama: "Revalina Putri Adrisia", panggilan: "Reva", kelas: "XI MIPA 6", jabatan: "Sekretaris Osis 1",nomorHp:"6281349739780" },
  { nama: "Azdra Aqqilah", panggilan: "Azdra", kelas: "XI MIPA 2", jabatan: "Sekretaris Osis 2",nomorHp:"6282316968969" },
  { nama: "Nazma Ardia Putri", panggilan: "Nazma", kelas: "XI MIPA 4", jabatan: "Bendahara Osis 1",nomorHp:"6287895656088" },
  { nama: "Nur'aini Zahira Mahdi", panggilan: "Aini", kelas: "XI IPA 6", jabatan: "Bendahara Osis 2",nomorHp:"6283184197596" },
  { nama: "Khairunnisa", panggilan: "Karin", kelas: "Xl ips 2", jabatan: "Humas",nomorHp:"6281268046546" },
  { nama: "Dea Adelia", panggilan: "Dea", kelas: "Xe3", jabatan: "Sekbid 1",nomorHp:"6282288511432" },
  { nama: "Nessha Adriani", panggilan: "Nessha", kelas: "XE 5", jabatan: "Sekbid 1",nomorHp:"6281275784598" },
  { nama: "Khaisylla", panggilan: "Sylla", kelas: "X e 5", jabatan: "Sekbid 2",nomorHp:"6282170743123" },
  { nama: "Naila Khalifah Azzahra", panggilan: "Naila", kelas: "xe5", jabatan: "Sekbid 2",nomorHp:"6282386649642" },
  { nama: "Arga Avrinaldi", panggilan: "Arga", kelas: "XE9", jabatan: "Sekbid 3",nomorHp:"6282173241784" },
  { nama: "Riva Keisya Effendy", panggilan: "Riva", kelas: "XE7", jabatan: "Sekbid 3",nomorHp:"6289524452002" },
  { nama: "Vildo Degra", panggilan: "Vildo", kelas: "XE7", jabatan: "Sekbid 3",nomorHp:"62895603736115" },
  { nama: "Gusti Handri Ashary", panggilan: "Gusti", kelas: "X.E2", jabatan: "Sekbid 4",nomorHp:"628126815664" },
  { nama: "Halifa Kheisya Putri", panggilan: "Kheisya", kelas: "X E 9", jabatan: "Sekbid 4",nomorHp:"6283179312482" },
  { nama: "Keyla Andika Fitri", panggilan: "Keyla", kelas: "XE8", jabatan: "Sekbid 4",nomorHp:"62895359530951" },
  { nama: "Naumi Amelia Fitza", panggilan: "Naumi", kelas: "XE.5", jabatan: "Sekbid 5",nomorHp:"6289527251243" },
  { nama: "Thania Anggraini ", panggilan: "Thania", kelas: "XE6", jabatan: "Sekbid 5",nomorHp:"6283195935556" },
  { nama: "Devina Maphilindo", panggilan: "Devin", kelas: "XE7", jabatan: "Sekbid 6",nomorHp:"6282386433761" },
  { nama: "Mozart Marchello E", panggilan: "Mozart", kelas: "XE7", jabatan: "Sekbid 6",nomorHp:"62883134990378" },
  { nama: "Adriyansyah Nugraha", panggilan: "Adri", kelas: "xe5", jabatan: "Sekbid 7",nomorHp:"62895618785787" },
  { nama: "Arthaul Zikra", panggilan: "Zikra", kelas: "XE10", jabatan: "Sekbid 7",nomorHp:"6281371857590" },
  { nama: "Desti Julia Revani", panggilan: "Rere", kelas: "XE ENAM 6", jabatan: "Sekbid 8",nomorHp:"62895360799904" },
  { nama: "Chayara Balqis Q", panggilan: "Yara", kelas: "XE4", jabatan: "Sekbid 8",nomorHp:"6285263285986" },
  { nama: "Siddiq Insan Syahada", panggilan: "Siddiq", kelas: "XE3", jabatan: "Sekbid 9",nomorHp:"62895602585445" },
  { nama: "Quratul Ayni", panggilan: "Ayni", kelas: "xe5", jabatan: "Sekbid 9",nomorHp:"6283132967557" },
  { nama: "Diffa Firma Suri", panggilan: "Dipa", kelas: "XE9", jabatan: "Sekbid 10",nomorHp:"6283841518993" },
  { nama: "Rahma Wulandari", panggilan: "Wulan", kelas: "XI IIS 4", jabatan: "Sekbid 10",nomorHp:"6283164134072" },
];


// Fungsi untuk menampilkan kartu pengurus
function tampilkanKartuPengurus(dataPengurus,MPKatauOSIS) {
  const containerKartu = document.getElementById("containerKartu" + MPKatauOSIS);
  
  let i = 0
  let batasData

  if (MPKatauOSIS == "Mpk"){
    i = 0
    batasData = 10
  }else if (MPKatauOSIS == "IntiOsis"){
    i = 10
    batasData = 18
  }else if (MPKatauOSIS == "AnggotaOsis"){
    i = 18
    batasData = 40
  }

  // Buat kartu untuk setiap data pengurus
  for (i; i < batasData; i++) {
    const pengurus = dataPengurus[i];
    const biodataLink = dataPengurus[i].nama.replace(/\s+/g, '')

    // Buat elemen kartu baru
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("flex", "lg:w-1/3", "p-4", "lg:m-2", "lg:border-solid", "lg:border-slate-400", "rounded-lg", "lg:bg-slate-300", "lg:border-4", "lg:p-7");

    // Buat struktur HTML untuk kartu pengurus
    cardDiv.innerHTML = `
      <div class="border-solid rounded-md justify-center border-4 border-primary">
        <img class="w-[140px] h-40 flex justify-center rounded-md bg-cover" src="./pengurusOsis/fotoPengurus/${pengurus.panggilan}.jpg" alt="Foto ${pengurus.panggilan}">
      </div>
      <div class="w-full h-full">
        <div class="p-3 items-center flex-row">
          <p><span class="text-md font-semibold">Nama : </span> ${pengurus.nama}</p>
          <p><span class="text-md font-semibold">Panggilan: </span>${pengurus.panggilan}</p>
          <p><span class="text-md font-semibold">Kelas: </span>${pengurus.kelas}</p>
          <p><span class="text-md font-semibold">Jabatan: </span>${pengurus.jabatan}</p>
      </div>
      <div class="flex ml-1 items-center justify-between gap-4">
        <button type="button" class="w-1/2 px-4 py-2 text-base bg-white border-2 rounded-lg text-grey-500 hover:bg-gray-200">
          <a href="https://wa.me/${pengurus.nomorHp}" class="w-full h-full block">
            Chat
          </a>
        </button>
    <button type="button" class="w-1/2 px-4 py-2 text-base text-white bg-primary border rounded-lg hover:bg-blue-400">
          <a href="./pengurusOsis/${biodataLink}.html">Biodata</a>
        </button>
        </div>
      </div>`;

    // Tambahkan kartu ke dalam container kartu
    containerKartu.appendChild(cardDiv);
    console.log(pengurus)
  }
}

tampilkanKartuPengurus(dataPengurus,"Mpk");
tampilkanKartuPengurus(dataPengurus,"IntiOsis");
tampilkanKartuPengurus(dataPengurus,"AnggotaOsis");


