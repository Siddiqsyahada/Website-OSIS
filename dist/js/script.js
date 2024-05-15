// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

var lebarLayar = window.innerWidth;

var gambarKetos = document.getElementById('ketos')
var gambarWaketos = document.getElementById('waketos')


if (lebarLayar > 1024){
  gambarKetos.setAttribute('width', '800px');
  gambarWaketos.setAttribute('width', '800px');
}
if (lebarLayar > 768) {
  gambarKetos.setAttribute('width', '550px');
  gambarWaketos.setAttribute('width', '550px');
} else {
  gambarKetos.setAttribute('width', '300px');
  gambarWaketos.setAttribute('width', '300px');
}

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
const svgElement = document.getElementById('wave');
var pathElement = svgElement.getElementsByTagName('path')[0];
const body = document.getElementById('body') 


darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
    pathElement.setAttribute('fill', '#0F172A'); 
    body.classList.add('bg-slate-800')
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
    pathElement.setAttribute('fill', '#CBD5E1'); 
    body.classList.remove('bg-slate-800')
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
  pathElement.setAttribute('fill', '#0F172A');
  body.classList.add('bg-slate-800')
} else {
  darkToggle.checked = false;
  body.classList.remove('bg-slate-800')
}


function seeMore() {
  const seeMoreButton = document.querySelector("#seeMoreButton");
  const sekbid = document.querySelector('#sekbid');

  if (seeMoreButton.innerHTML === "Lebih Sedikit") {
    if (sekbid) {
      for (let i = 4; i <= 10; i++) {
      const currentSekbid = document.getElementById('sekbid' + i);
      if (currentSekbid) {
      currentSekbid.remove();}
}
    }
    seeMoreButton.innerHTML = "Lebih banyak"; // Mengubah teks tombol menjadi "Lebih banyak" ketika div telah dihapus
  } else {
    seeMoreButton.innerHTML = "Lebih Sedikit";
    console.log('Tombol berhasil ditekan');

  function createSekbid(id, judul, deskripsi,picture) {
  const sekbid = document.createElement('div');
  sekbid.id = `sekbid${id}`;
  sekbid.classList = "w-full px-4 lg:w-1/2 xl:w-1/3";
  sekbid.innerHTML = `<h4 class="mb-2 block text-center text-xl font-semibold text-dark hover:text-primary dark:text-white">sekbid ${id}</h4>
  <div class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
  <img src="https://source.unsplash.com/360x200?${picture}" alt="Programming" class="w-full" />
  <div class="py-4 px-6">
  <h3><a href="#" class="mb-2 block text-center text-sm md:text-lg font-semibold text-dark hover:text-primary dark:text-white">${judul}</a></h3>
  <p class="mb-6 text-base font-medium text-secondary">${deskripsi}</p>
  <div class="w-full justify-center flex">
    <a href="./sekbid/sekbid${id}.html" class="rounded-lg  bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80">Baca Selengkapnya</a>
  </div>
  </div>
  </div>`;
  sekbid.setAttribute('data-aos', 'fade-up');
  sekbid.setAttribute('data-aos-duration', '1500');
  return sekbid;
}

  sekbid.appendChild(createSekbid(4, "Prestasi Akademik,Seni Dan Atau Olahraga", "Isi konten baru Anda di sini.","study+School"));
  sekbid.appendChild(createSekbid(5, "Demokrasi,HAM,Pendidikan Politik,Lingkungan Hidup,Kepekaan Dan Toleransi Sosial", "Isi konten baru Anda di sini.",'Democracy'));
  sekbid.appendChild(createSekbid(6, "Kreatifitas,Keterampilan Dan Kewirausahaan", "Isi konten baru Anda di sini.","entrepreneurship"));
  sekbid.appendChild(createSekbid(7, "Kualitas Jasmani,Kesehatan Dan Gizi", "Isi konten baru Anda di sini.","sport+school"));
  sekbid.appendChild(createSekbid(8, "Sastra Dan Budaya", "Isi konten baru Anda di sini.","culture"));
  sekbid.appendChild(createSekbid(9, "Teknologi Informasi Dan Komunikasi", "Isi konten baru Anda di sini.",'Programing'));
  sekbid.appendChild(createSekbid(10, "Komunikasi Dalam Bahasa Inggris", "Isi konten baru Anda di sini.","english+learning"));

  }
};

function goBack() {
  window.location.href = "../pengurus.html";
}

function goToBeranda() {
  window.location.href = "../index.html";
}

const tabelProker = document.getElementById('tabelProker')

tabelProker.innerHTML = `
<table id="myTable" class="lg:min-w-full w-full px-2 dark:bg-dark bg-white shadow-md rounded-lg overflow">
      <thead class="bg-blue-500 text-white">
        <tr>
          <th class="py-2 border text-center dark:text-white px-4">Program</th>
          <th class="py-2 border text-center dark:text-white px-4">Waktu</th>
          <th class="py-2 border text-center dark:text-white px-4">Sekbid</th>
          <th class="py-2 border text-center dark:text-white px-2">Status</th>
        </tr>
      </thead>
      <tbody class="text-gray-700" >
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">mengadakan kultum</td>
          <td class="py-3 border text-center dark:text-white px-4">2x Sebulan</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 1</td>
          <td class="py-3 border text-center dark:text-white px-2">✅</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Penggalangan Dana</td>
          <td class="py-3 border text-center dark:text-white px-4">Eksidentil</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 1</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Perayaan Hari Besar Islam</td>
          <td class="py-3 border text-center dark:text-white px-4">Eksidentil</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 1</td>
          <td class="py-3 border text-center dark:text-white px-2">✅</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Lomba Bernuansa Islam</td>
          <td class="py-3 border text-center dark:text-white px-4">Class   Meeting</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 1</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Halal Bihalal Menyambut Bulan Ramadhan</td>
          <td class="py-3 border text-center dark:text-white px-4">Maret</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 1</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Bank Sampah</td>
          <td class="py-3 border text-center dark:text-white px-4">1x Sebulan</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 2</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Pameran Kreativitas Dari Barang Bekas Berkolaborasi Dengan Sekbid 6</td>
          <td class="py-3 border text-center dark:text-white px-4">Desember</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 2</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Lomba Video Kreatif Tentang Sumbang Duo Baleh</td>
          <td class="py-3 border text-center dark:text-white px-4">Class    Meeting</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 2</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Poster Kato Nan Ampek</td>
          <td class="py-3 border text-center dark:text-white px-4">Eksidentil</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 2</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Melaksanakan Upacara Bendera</td>
          <td class="py-3 border text-center dark:text-white px-4">Setiap Senin</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 3</td>
          <td class="py-3 border text-center dark:text-white px-2">✅</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Melaksanakan Upacara Setiap Hari Besar Indonesia</td>
          <td class="py-3 border text-center dark:text-white px-4">Eksidentil</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 3</td>
          <td class="py-3 border text-center dark:text-white px-2">✅</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Menyanyikan Lagu Indonesia Raya Sebelum Memulai PBM</td>
          <td class="py-3 border text-center dark:text-white px-4">Setiap Hari</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 3</td>
          <td class="py-3 border text-center dark:text-white px-2">✅</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Lomba LTUB</td>
          <td class="py-3 border text-center dark:text-white px-4">Eksidentil</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 3</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Gelanggang</td>
          <td class="py-3 border text-center dark:text-white px-4">Eksidentil</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 4</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Class Meeting</td>
          <td class="py-3 border text-center dark:text-white px-4">Mei/Juni</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 4</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Lomba 17 Agustus</td>
          <td class="py-3 border text-center dark:text-white px-4">17    Agustus</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 4</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Pensi Kelas 12</td>
          <td class="py-3 border text-center dark:text-white px-4">11 November 2023</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 4</td>
          <td class="py-3 border text-center dark:text-white px-2">✅</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Perpisahan Kelas 12</td>
          <td class="py-3 border text-center dark:text-white px-4">April</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 4</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">LDK</td>
          <td class="py-3 border text-center dark:text-white px-4">January</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 5</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Menerapkan Adiwiyata</td>
          <td class="py-3 border text-center dark:text-white px-4">Desember</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 5</td>
          <td class="py-3 border text-center dark:text-white px-2">✅</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Promosi Sekolah</td>
          <td class="py-3 border text-center dark:text-white px-4">Februari</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 5</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">MPLS</td>
          <td class="py-3 border text-center dark:text-white px-4">Juli</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 5</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Membuat Bazar Saat Event Pensi Kelas 12</td>
          <td class="py-3 border text-center dark:text-white px-4">11 November 2023</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 6</td>
          <td class="py-3 border text-center dark:text-white px-2">✅</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Bazar Hasil Karya Siswa</td>
          <td class="py-3 border text-center dark:text-white px-4">November</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 6</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Lomba Kreativitas Bertema Hari Pramuka</td>
          <td class="py-3 border text-center dark:text-white px-4">14 Agustus</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 6</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Membawa Bekal Dari Rumah</td>
          <td class="py-3 border text-center dark:text-white px-4">November</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 7</td>
          <td class="py-3 border text-center dark:text-white px-2">✅</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Video Pola Hidup Sehat</td>
          <td class="py-3 border text-center dark:text-white px-4">Eksidentil</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 7</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Menyukseskan Class Meeting</td>
          <td class="py-3 border text-center dark:text-white px-4">Juni/July</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 7</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Senam Sehat Jasmani</td>
          <td class="py-3 border text-center dark:text-white px-4">1x Sebulan</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 7</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Bunkasai</td>
          <td class="py-3 border text-center dark:text-white px-4">Eksidentil</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 8</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Sehari Beradat Minang</td>
          <td class="py-3 border text-center dark:text-white px-4">July</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 8</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Pensi Kelas 12</td>
          <td class="py-3 border text-center dark:text-white px-4">11 November 2023</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 8</td>
          <td class="py-3 border text-center dark:text-white px-2">✅</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Membuat Website Mpk Osis</td>
          <td class="py-3 border text-center dark:text-white px-4">Januari</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 9</td>
          <td class="py-3 border text-center dark:text-white px-2">✅</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Membuat Kartika Tv</td>
          <td class="py-3 border text-center dark:text-white px-4">November</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 9</td>
          <td class="py-3 border text-center dark:text-white px-2">✅</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Berkolaborasi Dengan Sekbid Lain Dalam Bidang TIK</td>
          <td class="py-3 border text-center dark:text-white px-4">Fleksibel</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 9</td>
          <td class="py-3 border text-center dark:text-white px-2">✅</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Mengadakan Lomba Story Telling</td>
          <td class="py-3 border text-center dark:text-white px-4">Class    Meeting</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 10</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Poster Tentang Hari Besar Dalam Bahasa Inggris</td>
          <td class="py-3 border text-center dark:text-white px-4">Eksidentil</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 10</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <tr>
          <td class="py-3 border text-center dark:text-white px-4">Protokol Berbahasa Inggris Saat Kultum</td>
          <td class="py-3 border text-center dark:text-white px-4">Februari</td>
          <td class="py-3 border text-center dark:text-white px-4">Sekbid 10</td>
          <td class="py-3 border text-center dark:text-white px-2">-</td>
        </tr>
        <!-- Tambahkan baris lain di sini -->
      </tbody>
    </table>`

function filterTable() {
  const filter = document.getElementById("filter").value;
  const table = document.getElementById("myTable");
  const rows = table.rows;

  const filterArray = filter.split(' ')

  if (filter === "default") {
    // Jika filter default, tampilkan semua barisj
    for (let i = 1; i < rows.length; i++) {
      rows[i].style.display = "";
    }
  } else if (filterArray[0] === '✅') {
    // Filter berdasarkan Sekbid 1
    const filterValue = filter;

    for (let i = 1; i < rows.length; i++) {
      const cellValue = rows[i].getElementsByTagName("td")[3].textContent.trim();
      if (cellValue !== filterValue) {
        rows[i].style.display = "none";
      } else {
        rows[i].style.display = "";
      }
    }
  } else if (filterArray[0] === "-") {
    // Filter berdasarkan Sekbid 1

    const filterValue = filter;

    for (let i = 1; i < rows.length; i++) {
      const cellValue = rows[i].getElementsByTagName("td")[3].textContent.trim();
      if (cellValue !== filterValue) {
        rows[i].style.display = "none";
      } else {
        rows[i].style.display = "";
      }
    }
  } else if (filterArray[0] === "Sekbid") {
    // Filter berdasarkan Sekbid 1
    const filterValue = filter;

    for (let i = 1; i < rows.length; i++) {
      const cellValue = rows[i].getElementsByTagName("td")[2].textContent.trim();
      if (cellValue !== filterValue) {
        rows[i].style.display = "none";
      } else {
        rows[i].style.display = "";
      }
    }
  } 
}

function ubahKelas(selectedValue) {
  // Dapatkan nilai kelas yang dipilih
  const kelas = selectedValue;
  console.log(kelas)

  // Kirim nilai kelas ke dalam formulir sebagai nilai tersembunyi (hidden input)
  const hiddenInput = document.createElement("input");
  hiddenInput.setAttribute("type", "hidden");
  hiddenInput.setAttribute("name", "kelas");
  hiddenInput.setAttribute("value", kelas);
  hiddenInput.setAttribute("required", "");
  hiddenInput.setAttribute("id", "kelas"); 

  // Sisipkan input tersembunyi ke dalam form
  const form = document.querySelector("form");
  form.appendChild(hiddenInput);
}

document.getElementById("btnKirim").addEventListener("click", async function() {
  // Menampilkan efek loading
  document.getElementById("loading").classList.remove("hidden");

  var kelas = document.getElementById("kelas").value;
  var pesan = document.getElementById("KritikanDanPesan").value;
  var waktuSekarang = new Date();

  var tanggal = waktuSekarang.getDate();
  var bulan = waktuSekarang.getMonth() + 1; // Perlu ditambah 1 karena bulan dimulai dari 0 (Januari)
  var tahun = waktuSekarang.getFullYear();
  var jam = waktuSekarang.getHours();
  var menit = waktuSekarang.getMinutes();
  var detik = waktuSekarang.getSeconds();

  // Memformat ke dalam string dengan format yang diinginkan
  var timestamp = tanggal + '/' + bulan + '/' + tahun + ' ' + jam + ':' + menit + ':' + detik;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    mode: "no-cors",
    body: JSON.stringify({ "timestamp": timestamp, "kelas": kelas, "pesan": pesan })
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxtZcco1ry8lPpBNkN_1KYiK9xKArEiqKn5repF1uAOAdkjqgPoWaW_4Enf8oI-UmYH/exec', options);
    const data = await response.json();
    console.log('Data Pesan terbaru:', data);
  } catch (error) {
    console.error('Error:', error);
    // Menyembunyikan efek loading jika terjadi kesalahan
    document.getElementById("loading").classList.add("hidden");
  }
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("KritikanDanPesan").value = "";
  document.getElementById("kelas").value = "Default";

  swal("Succes", "Pesan Anda Berhasil Terkirim.Terimakasih Telah Memberikan Masukan :)", "success");
});


function tambahKomentar(nama, tanggal, komentar) {
  var daftarKomentar = document.getElementById("daftarKomentar");
  var artikelKomentar = document.createElement("article");
  artikelKomentar.classList.add("p-6", "text-base", "bg-white", "rounded-lg", "dark:bg-gray-900", "border-t", "border-gray-200", "dark:border-gray-700", "mb-3");

  var footer = document.createElement("footer");
  footer.classList.add("flex", "justify-between", "items-center", "mb-2");

  var divInfo = document.createElement("div");
  divInfo.classList.add("flex", "items-center");

  var imgProfil = document.createElement("img");
  imgProfil.classList.add("mr-2", "w-6", "h-6", "rounded-full");
  imgProfil.setAttribute("src", "https://img.icons8.com/fluency/96/user-male-circle--v1.png");
  imgProfil.setAttribute("alt", nama);

  var pNama = document.createElement("p");
  pNama.classList.add("inline-flex", "items-center", "mr-3", "text-sm", "text-gray-900", "dark:text-white", "font-semibold");
  pNama.textContent = nama;

  var pTanggal = document.createElement("p");
  pTanggal.classList.add("text-sm", "text-gray-600", "dark:text-gray-400");
  pTanggal.innerHTML = `<time pubdate datetime="${tanggal}">${tanggal}</time>`;

  divInfo.appendChild(imgProfil);
  divInfo.appendChild(pNama);
  divInfo.appendChild(pTanggal);

  // Dropdown button (tanpa ikon Reply)
  var dropdownButton = document.createElement("button");
  dropdownButton.setAttribute("id", "dropdownCommentButton" + Math.floor(Math.random() * 1000)); // Untuk id unik
  dropdownButton.setAttribute("data-dropdown-toggle", "dropdownComment" + Math.floor(Math.random() * 1000)); // Untuk id unik
  dropdownButton.classList.add("inline-flex", "items-center", "p-2", "text-sm", "font-medium", "text-center", "text-gray-500", "dark:text-gray-400", "bg-white", "rounded-lg", "hover:bg-gray-100", "focus:ring-4", "focus:outline-none", "focus:ring-gray-50", "dark:bg-gray-900", "dark:hover:bg-gray-700", "dark:focus:ring-gray-600");
  dropdownButton.setAttribute("type", "button");

  // Dropdown menu (tanpa ikon Reply)
  var dropdownMenu = document.createElement("div");
  dropdownMenu.setAttribute("id", "dropdownComment" + Math.floor(Math.random() * 1000)); // Untuk id unik
  dropdownMenu.classList.add("hidden", "z-10", "w-36", "bg-white", "rounded", "divide-y", "divide-gray-100", "shadow", "dark:bg-gray-700", "dark:divide-gray-600");

  var ulDropdown = document.createElement("ul");
  ulDropdown.classList.add("py-1", "text-sm", "text-gray-700", "dark:text-gray-200");

  var liEdit = document.createElement("li");
  var aEdit = document.createElement("a");
  aEdit.setAttribute("href", "#");
  aEdit.classList.add("block", "py-2", "px-4", "hover:bg-gray-100", "dark:hover:bg-gray-600", "dark:hover:text-white");
  aEdit.textContent = "Edit";
  liEdit.appendChild(aEdit);

  var liRemove = document.createElement("li");
  var aRemove = document.createElement("a");
  aRemove.setAttribute("href", "#");
  aRemove.classList.add("block", "py-2", "px-4", "hover:bg-gray-100", "dark:hover:bg-gray-600", "dark:hover:text-white");
  aRemove.textContent = "Remove";
  liRemove.appendChild(aRemove);

  var liReport = document.createElement("li");
  var aReport = document.createElement("a");
  aReport.setAttribute("href", "#");
  aReport.classList.add("block", "py-2", "px-4", "hover:bg-gray-100", "dark:hover:bg-gray-600", "dark:hover:text-white");
  aReport.textContent = "Report";
  liReport.appendChild(aReport);

  ulDropdown.appendChild(liEdit);
  ulDropdown.appendChild(liRemove);
  ulDropdown.appendChild(liReport);

  dropdownMenu.appendChild(ulDropdown);

  footer.appendChild(divInfo);
  footer.appendChild(dropdownButton);
  footer.appendChild(dropdownMenu);

  var pKomentar = document.createElement("p");
  pKomentar.classList.add("text-gray-500", "dark:text-gray-400");
  pKomentar.textContent = komentar;

  var divAction = document.createElement("div");
  divAction.classList.add("flex", "items-center", "mt-4", "space-x-4");

  // var btnReply = document.createElement("button");
  // btnReply.setAttribute("type", "button");
  // btnReply.classList.add("flex", "items-center", "text-sm", "text-gray-500", "hover:underline", "dark:text-gray-400", "font-medium");
  // btnReply.textContent = "Balas";

  // divAction.appendChild(btnReply);

  artikelKomentar.appendChild(footer);
  artikelKomentar.appendChild(pKomentar);
  artikelKomentar.appendChild(divAction);

  daftarKomentar.appendChild(artikelKomentar);
}

document.getElementById("formKomentar").addEventListener("submit", function(event) {
  event.preventDefault();

  var komentar = document.getElementById("comment").value;
  var nama = document.getElementById("nama").value
  var sekarang = new Date();
  var waktu = sekarang.getHours() + ':' + sekarang.getMinutes();
  var tanggal = sekarang.getDate() + '/' + (sekarang.getMonth() + 1);
  var waktuDanTanggal = waktu + ' ' + tanggal;
  // Tambahkan komentar ke dalam daftar komentar
  fetch('https://script.google.com/macros/s/AKfycbyo3zbwv6I6LzlFljb6gw6btvh_AK1Q88xaNXzpmMoFU3Xaa1akNW7NCmKhM9ccY2A/exec', {
    redirect: "follow",
    method: 'POST',
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    mode:"no-cors",
    body: JSON.stringify({ "timestamp":waktuDanTanggal, "nama": nama, "komentar": komentar })
  }).then(response => response.json()).then(data => {
    console.log('Data komentar terbaru:', data);
    swal("Succes", "Komentar Anda Berhasil Ditambahkan", "success");
    tambahKomentar(nama, tanggal, komentar);
  })
  .catch(error => {                   
    console.error('Error:', error);
    swal("Succes", "Komentar Anda Berhasil Ditambahkan", "success");
    tambahKomentar(nama, tanggal, komentar);
    let jumlahComment = document.getElementById('jumlahComment').textContent;
    jumlahComment = parseInt(jumlahComment) + 1;
    jumlahComment = jumlahComment.toString();
    document.getElementById("jumlahComment").textContent = jumlahComment

  });
  
  // Reset nilai input komentar
  document.getElementById("comment").value = "";
  document.getElementById('nama').value = ""
});

fetch('https://script.google.com/macros/s/AKfycbyo3zbwv6I6LzlFljb6gw6btvh_AK1Q88xaNXzpmMoFU3Xaa1akNW7NCmKhM9ccY2A/exec', {
  redirect: "follow",
  method: 'GET',
  headers: {
    "Content-Type": "text/plain;charset=utf-8",
  },
})
.then(response => response.json())
.then(data => {

  if (data.length > 20) {
    for (let i = data.length - 1; i >= data.length - 20; i--) {
      tambahKomentar(data[i].Nama, data[i].Timestamp, data[i].Komentar);
    }
  }
  else {
    for (let i = data.length - 1; i >= 0; i--) {
      tambahKomentar(data[i].Nama, data[i].Timestamp, data[i].Komentar);
    }
  }

  document.getElementById('jumlahComment').textContent = data.length
})
.catch(error => {
  console.error('Error:', error);
});

