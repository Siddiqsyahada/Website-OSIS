export function panggilGenerateBiodataDariNama(nama){
  const biodataMap = {
    "AdriyansyahNugraha" : ["Adriyansyah Nugraha", "Adri", "xe5", "Sekbid 7", "Padang/24 Januari 2008", "pengusaha", "gurun laweh nanxx", "adrynsnn", "62895618785787"],
    "Alfadhli" : ["Alfadhli", "Fadhli", "XE9", "Komisi B", "Padang/19 Februari 2008", "Polisi", "Tanjung aua nan xx", "alfadhli_02", "6282391145456"],
    "AntarunAsadyLuthfi": ["Antarun Asady Luthfi", "Luthfi", "Xl mipa 4", "Ketua Osis", "Padang/11 Mei 2006", "AAL", "Pengambiran, jln, berlian raya no 8", "Anntrun_Luth", "6281371792144"],
    "ArgaAvrinaldi": ["Arga Avrinaldi", "Arga", "XE9", "Sekbid 3", "Padang/13 April 2008", "TNI/POLISI", "Kampung jua.tarantang kaki pendakian RT01 RW02", "Argavrinaldi", "6282173241784"],
    "ArthaulZikra": ["Arthaul Zikra", "Zikra", "XE10", "Sekbid 7", "Padang/05 April 2008", "Pengusaha", "Simp watas pisang no 33", "Zikzik08", "6281371857590"],
    "AzdraAqqilah": ["Azdra Aqqilah", "Azdra", "XI MIPA 2", "Sekretaris Osis 2", "Solok/18 September 2006", "polwan", "Simpang haru", "azdraaqqilah", "6282316968969"],
    "AzzuraRathuLiona": ["Azzura Rathu Liona", "Zura", "XI IPA 5", "Sekretaris MPK", "Padang/21 November 2007", "dokterr", "jln by pass pampangan", "azzurarth", "6282389834396"],
    "BharataAbisena": ["Bharata Abisena", "Abi", "XI MIPA3", "Wakil Ketua Osis 1", "Padang/29 Juni 2006", "apotker", "JL.Banuaran Kec.Lubeg", "abisnabrhata_", "6282268647109"],
    "ChayaraBalqisQanita": ["Chayara Balqis Qanita", "Yara", "X E4", "Sekbid 8", "Pekanbaru/26 November 2007", "psikiater", "Jln. Azizi perum cendana andalas blok d no 1", "chayarals", "6285263285986"],
    "DeaAdelia": ["Dea Adelia", "Dea", "Xe3", "Sekbid 1", "Padang/18 Desember 2007", "Menjadi Orang sukses", "Teluk Nibung", "Deaaa_adeliiaa", "6282288511432"],
    "DestiJuliaRevani": ["Desti Julia Revani", "Rere", "XE ENAM 6", "Sekbid 8", "Palembang/23 Juli 2009", "TNI", "gaung", "rrvastt", "62895360799904"],
    "DevinaMaphilindo": ["Devina Maphilindo", "Devin", "XE7", "Sekbid 6", "Padang/23 Januari 2008", "dokter/kowad", "perum Andalusia blok A/13, Tarantang, Lubuk Kilangan, kota Padang", "devinlstn", "6282386433761"],
    "DiffaFirmaSuri": ["Diffa Firma Suri", "Dipa", "XE9", "Sekbid 10", "Padang/2 Desember 2007", "Dokter", "komp.nuasa indah", "diffafirmaa", "6283841518993"],
    "GustiHandriAshary": ["Gusti Handri Ashary", "Gusti", "X.E2", "Sekbid 4", "Padang/2 Agustus 2007", "Akmil/dokter", "Jln.dr.m.hatta", "Hennnz._888", "628126815664"],
    "HalifaKheisyaPutri": ["Halifa Kheisya Putri", "Kheisya", "X E 9", "Sekbid 4", "Padang/14 Juli 2008", "kowad", "Jalan andalas no 70/e", "kheisyaa_putrii", "6283179312482"],
    "HannyPirhadi": ["Hanny Pirhadi", "Hanny", "XI MIPA 3", "Wakil Ketua MPK", "Padang/19 November 2007", "Pengusaha kaya raya", "banuaran", "hnnyprhdiii", "6289636844347"],
    "HansbriNovara": ["Hansbri Novara", "Hansbri", "XI MIPA 2", "Ketua MPK", "Padang/05 September 2007", "Brimob", "Komplek polamas blok i no 6", "exonebriii", "6285156924300"],
    "KaylaSaskiaAnanda": ["Kayla Saskia Ananda", "Kayla", "XI IPS 2", "Wakil Ketua Osis 2", "Tembilahan/12 September 2006", "Pengusaha", "Jl.Simpang haru 1 no 20", "kaylasskia_", "6288270933797"],
    "KeylaAndikaFitri": ["Keyla Andika Fitri", "Keyla", "XE8", "Sekbid 4", "Padang/12 Agustus 2008", "POLWAN", "JL.KAMPUNG BATU", "keylaandkftr_", "62895359530951"],
    "Khairunnisa": ["Khairunnisa", "Karin", "Xl ips 2", "Humas", "Padang/17 Agustus 2006", "Kaya", "Sungai beremas", "kayyiiiin_", "6281268046546"],
    "Khaisylla": ["Khaisylla", "Sylla", "X e 5", "Sekbid 2", "Padang/27 Juni 2008", "Menjadi seorang PNS", "Bukit Gado-Gado", "Khaisylla", "6282170743123"],
    "M.FachrurRoziNst": ["M. Fachrur Rozi Nst", "Rozi", "X E10", "Komisi C", "Sei Bamban/10 November 2007", "TNI AD", "Asrama TNI AD TARANDAM", "m.roziii10", "6283133293518"],
    "MozartMarchelloElshie": ["Mozart Marchello Elshie", "Mozart", "XE7", "Sekbid 6", "Padang/15 Maret 2008", "Abdi negara", "Jln dr sutomo no 7", "mozartmarchello", "62883134990378"],
    "MutiaraNaswa": ["Mutiara Naswa", "Muti", "XI MIPA 6", "Bendahara MPK", "Simpang Bt. Hampar/21 Januari 2023", "perawat", "teluk nibung", "sement4araaa", "6281268121507"],
    "NailaKhalifahAzzahra": ["Naila Khalifah Azzahra", "Naila", "xe5", "Sekbid 2", "Padang/26 April 2008", "perawat", "bukit karan", "nanaiii.laa_", "6282386649642"],
    "NaumiAmeliaFitza": ["Naumi Amelia Fitza", "Naumi", "XE.5", "Sekbid 5", "Padang/25 Desember 2007", "Polwan dan perawat", "Lubuk ipuh", "Naumiaf_25", "6289527251243"],
    "NazmaArdiaPutri": ["Nazma Ardia Putri", "Nazma", "XI MIPA 4", "Bendahara Osis 1", "Padang/07 Juni 2007", "Psikologi", "Perum.marinir angkatan laut blok D/10 Padang", "nzmrdiaapt_", "6287895656088"],
    "NesshaAdriani": ["Nessha Adriani", "Nessha", "XE 5", "Sekbid 1", "Padang/10 November 2007", "psikologi", "teluk nibung gates nan xx", "nsshadrianii", "6281275784598"],
    "NisaNurulFauziah": ["Nisa Nurul Fauziah", "Nisa", "XE9", "Komisi A", "Alahan Panjang/07 April 2007", "Kowad", "Jalan parpatih no 7", "Nisanurul916", "6289529258596"],
    "NurAiniZahiraMahdi": ["Nur'aini Zahira Mahdi", "Aini", "XI IPA 6", "Bendahara Osis 2", "Padang/31 Oktober 2006", "Dokter", "Jln Pila Tarok", "aini_zahira__", "6283184197596"],
    "PnielZebua": ["Pniel Zebua", "Niel", "XE8", "Komisi C", "Padang/16 Mei 2008", "Buzzer", "Jl. Seberang Palinggam no. 35", "pniel_zebuaa", "6282185930625"],
    "QuratulAyni": ["Quratul Ayni", "Ayni", "xe5", "Sekbid 9", "Padang/17 Desember 2007", "psikolog", "jl.bypass", "qrtlay_ql", "6283132967557"],
    "RahmaWulandari": ["Rahma Wulandari", "Wulan", "XI IIS 4", "Sekbid 10", "Padang/26 September 2007", "Pebisnis", "Jl. Palembang no.13A, Gaung, Teluk Bayur.", "waelndm", "6283164134072"],
    "RefaldiPrianata": ["Refaldi Prianata", "Refal", "XI MIPA 6", "Komisi A", "Padang/10 Mei 2007", "Menjadi Orang sukses", "JLN PAGAMBIRAN", "faaall_07", "6282172467639"],
    "RevalinaPutriAdrisia": ["Revalina Putri Adrisia", "Reva", "XI MIPA 6", "Sekretaris Osis 1", "Padang/20 Januari 2007", "Pengusaha", "Jl.ranah dalam 1 no 10", "revaalinapa", "6281349739780"],
    "RivaKeisyaEffendy": ["Riva Keisya Effendy", "Riva", "XE7", "Sekbid 3", "Padang/29 Maret 2008", "Polwan", "Parak Laweh pondok citra indovila B.14", "Rvakyy", "6289524452002"],
    "SatriaElson": ["Satria Elson", "Satria", "11 mipa 3", "Komisi B", "Padang/4 Oktober 2006", "Pengusaha", "Assrama tni parak pisang blok bb3", "Sat3ya_ell", "6289508824280"],
    "SiddiqInsanSyahada": ["Siddiq Insan Syahada", "Siddiq", "XE3", "Sekbid 9", "Padang/03 Januari 2008", "Software Engginer (Programer)", "Jalan berok 1 no.10f", "Siddiq_i_s", "62895602585445"],
    "ThaniaAnggrainiSandra": ["Thania Anggraini Sandra", "Thania", "XE6", "Sekbid 5", "Padang/28 Agustus 2007", "Apoteker", "Nuansa gria thp 2 no E11", "Xytann3", "6283195935556"],
    "VildoDegra": ["Vildo Degra", "Vildo", "XE7", "Sekbid 3", "Padang/26 Maret 2008", "TNI AL", "Jl ganting 3 no.18", "vdodga", "62895603736115"],
    "RidhoAmirsyah": ["Ridho Amirsyah", "Coach", "-", "Pembina", "Padang/12 Agustus 1987", "-", "Perumahan Cendana Mata Air Tahap II", "ridhoamirsyah", "6282386893443"],
    "FazzatulHusna": ["Fazzatul Husna", "Fat", "-", "Pembina", "Padang/7 Maret 1983", "-", "Blk. Asrama PHB no 4B", "fazzatulhusna", "6281266363690"],
    "Yuniarti": ["Yuniarti", "Yuni", "-", "Pembina", "Padang/16 Juni 1963", "-", "Cendana Parak kopi blok e 8", "yuniartiys1606", "6281266363690"],
  };

  const dataBiodata = biodataMap[nama];

  if(dataBiodata){
    const biodata = generateBiodata(...dataBiodata);
    console.log(...dataBiodata)
    return biodata
  } else {
    console.log("Nama tidak ditemukan dalam daftar biodata."); // Nama tidak ditemukan
  }
}



function generateBiodata(namaLengkap,panggilan,kelas,jabatan,tanggalLahir,citaCita,alamat,usernameIg,nomorHP) {
  return `
    <!-- section Data Pengurus -->
    <div class=" lg:bg-slate-100 bg-slate-100 flex items-center justify-center mt-24 h-screen">
      <button onclick="goBack()" class="top-24 mt-3 absolute left-4 bg-white p-3 rounded-full shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div class="bg-slate-100 lg:bg-white pt-14 rounded-md lg:shadow-md flex justify-center items-center flex-wrap space-x-6 md:scale-110 pb-6 lg:p-6">
        <div class="flex-shrink-0 ">
          <div class="border-solid rounded-md border-4 border-primary ">
            <img class="w-48 h-64 flex justify-center rounded-md object-cover" src="./fotoPengurus/${panggilan}.jpg" alt="Foto ${panggilan}">
          </div>   
          <div class="items-center flex-col justify-center hidden lg:block">
              <div class="w-full flex items-center mt-1 justify-center">
                <a
                  href="https://www.instagram.com/${usernameIg}/"
                  target="_blank"
                  class="mr-3 flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <img class="rounded-md" src="../dist/img/logo/instagram.png">
                </a>
                <p class="font-semibold text-center">${usernameIg}</p>
              </div>
            </div>
        </div>
        <div>
            <h2 id="typedText" class="md:text-3xl text-2xl text-center font-extrabold text-gray-800 mt-3">${namaLengkap}</h2>
            <p class="md:text-3xl text-2xl text-center font-sans text-slate-600 mb-3">${jabatan}</p>
            <div class="border-b border-2 border-primary mb-3"></div>
            <div class="space-y-1">
                <p><span class="font-semibold">Nama: </span>${namaLengkap}</p>
                <p><span class="font-semibold">Panggilan: </span>${panggilan}</p>
                <p><span class="font-semibold">Kelas: </span>${kelas}</p>
                <p><span id="tanggalLahir" class="font-semibold">Tempat/Tgl Lahir: </span>${tanggalLahir}</p>
                <p><span class="font-semibold">Alamat: </span>${alamat}</p>
                <p><span class="font-semibold">Cita-cita: </span>${citaCita}</p>
                <p><span class="font-semibold">No. HP: </span>${nomorHP}</p>
            </div>
            <div class="w-full p-2 mt-4 bg-blue-100 rounded-lg dark:bg-white">
            <div class="flex items-center justify-center text-xs text-black font-bold dark:text-black">
                <p class="flex flex-col text-xs">
                  Hitung Mundur Ulang Tahun
                    <span id="hitungmundur" class="font-bold justify-center flex mt-1 text-gray-500 dark:text-indigo-500">
                    
                    </span>
                </p>
            </div>
            </div>
            <div class="items-center flex justify-center gap-12 lg:hidden">
              <div>
                <div class="w-full flex justify-center mt-5">
                  <a
                    href="https://www.instagram.com/${usernameIg}/"
                    target="_blank"
                    class="mr-3 flex h-9 w-9 items-center justify-center rounded-lg border text-slate-30 hover:text-white"
                    >
                    <title>Instagram</title>
                    <img width="100" height="100" src="../dist/img/logo/instagramIcon.png" alt="instagram-new"/>
                  </a>
                </div>
              </div>
              <div>
                <div class="w-full flex justify-center mt-5">
                  <a class="hover:border-primary" href="https://wa.me/${nomorHP}"><img width="48" height="48" src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="whatsapp--v1"/></a>
                </div>
              </div>
            </div>
        </div>
    </div>
    </div>

    <!-- Footer Start -->
    <footer class="bg-dark pb-8 bottom-0">
      <div class="container"> 
        <div class="w-full border-t border-slate-700 pt-8">
          <p class="text-center text-xs font-medium text-slate-500">
          Copyright © 2024 Osis Sma Kartika. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    <!-- Footer End -->`
}



// function updateCountdown(tanggalLahir) {

//   const targetDate = new Date( tanggalLahir + 'T00:00:00').getTime();

//   const now = new Date().getTime();
//   const distance = targetDate - now;

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById('hitungmundur').innerHTML = `
//     ${days} Hari ${hours}:${minutes}:${seconds}
//   `;
// }

