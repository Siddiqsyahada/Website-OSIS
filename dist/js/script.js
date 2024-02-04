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
    <a href="#" class="rounded-lg  bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80">Baca Selengkapnya</a>
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
          <td class="py-3 border text-center dark:text-white px-4">Kapanpun</td>
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
    // Jika filter default, tampilkan semua baris
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