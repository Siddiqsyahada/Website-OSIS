export function panggilGenerateBiodataDariNama(nama){
  const biodataMap = {
    "RendyBudiman" : ["Rendy Budiman", "-", "-", "Pembina OSIS", "-", "-", "-"],
    "FazzatulHusna" : ["Fazzatul Husna", "-", "-", "Pembina OSIS", "-", "-", "-"],
    "Yuniarti" : ["Yuniarti", "-", "-", "Pembina OSIS", "-", "-", "-"],
    "AdriyansyahNugraha" : ["Adriyansyah Nugraha", "Adri", "XI.F1", "Ketua MPK", "padang/24 Januari 2008", "Pengusaha ", "Adrynsnn"],
    "VildoDegra" : ["Vildo Degra", "Vildo", "XI.F4", "Wakil Ketua MPK", "Padang/26 Maret 2008", "TNI AL", "Vdodga_"],
    "NailaKhalifahAzzahra" : ["Naila Khalifah Azzahra", "Naila", "XI.F5", "Sekretaris MPK", "padang/26 April 2008", "Sukses", "nnaiii.laa_"],
    "QuratulAyni" : ["Quratul Ayni", "Ayni", "XI.F3", "Bendahara MPK", "18 desember 2007", "Pengusaha Sukses", "qrtl.ay"],
    "AbilRaydhatulEfendi" : ["Abil Raydhatul Efendi", "Abil", "X.E2", "Komisi A", "Padang/22 February 2009", "Dokter", "abilfyuu"],
    "SalsaNovita" : ["Salsa Novita", "Salsa", "X.E2", "Komisi A", "Padang/07 November 2009", "Dokter", "sasabc71"],
    "FadhlurrahmanRaaif" : ["Fadhlurrahman Raaif", "Raaif", "X.E2", "Komisi B", "Padang/09 Agustus 2009", "Dokter", "Fadhlurrahmanraaif55"],
    "SyabilaFitri" : ["Syabila Fitri", "billa", "X.E4", "Komisi B", "Padang/17 agustus 2009", "KOWAL", "sbilafitri_"],
    "SyalwaPutiSikumbang" : ["Syalwa Puti Sikumbang", "Syalwa", "X.E10", "Komisi C", "Riau/24 Oktober 2008", "Diplomat", "syalwawwa"],
    "ZuraHumaira" : ["Zura Humaira", "Zura", "X.E3", "Komisi C", "-", "--", "--"],
    "SiddiqInsanSyahada" : ["Siddiq Insan Syahada", "Siddiq", "XI.F4", "Ketua OSIS", "Padang/3 Januari 2008", "Software Enggineer", "siddiq_i_s"],
    "PnielZebua" : ["Pniel Zebua", "Niel", "XI.F5", "Wakil Ketua OSIS 1", "Padang/16 Mei 2008", "Buzzer", "nyelzbw"],
    "ArthaulZikra" : ["Arthaul Zikra", "Zikra", "XI.F5", "Wakil Ketua OSIS 2", "Padang/05 April 2008", "Bos muda", "zikzik08"],
    "RivaKeisyaEffendy" : ["Riva Keisya Effendy", "Riva", "XI.F9", "Sekretaris OSIS 1", "Padang/29 Maret 2008", "Kaya 7 Turunan", "Rvakyy"],
    "DiffaFirmaSuri" : ["Diffa Firma Suri", "Dipaa", "XI.F5", "Sekretaris OSIS 2", "Padang/2 Desember 2007", "Dokter ", "diffafirmaa"],
    "NesshaAdriani" : ["Nessha Adriani", "nessha ", "XI.F5", "Bendahara OSIS 1", "padang, 10 November 2007", "Psikolog ", "nesshaadrianii"],
    "chayaraBalqisQanita" : ["chayara Balqis Qanita", "chayara", "XI.F6", "Bendahara OSIS 2", "pekanbaru/26 November 2007", "wanita karir", "chayarals"],
    "MozartMarchelloElshie" : ["Mozart Marchello Elshie", "Mozart", "XI.F9", "Humas", "Padang/15 Maret 2008", "Abdi Negara ", "mozartmarchello"],
    "SyifaSalsabilla" : ["Syifa Salsabilla", "Syifa ", "X.E2", "Dokumentasi 1", "Padang/06 Maret 2009", "Miliader", "Faassyiii_"],
    "ArifaRasyidah" : ["Arifa Rasyidah", "Arifa", "X.E3", "Dokumentasi 2", "Sidikalang/28 November 2008", "Multidisciplinary Engineer", "rfha_rasydh "],
    "SyifaHenivauline" : ["Syifa Henivauline", "Syifa ", "X.E9", "Sekbid 1", "Padang/23 April 2009", "POLWAN", "syifahenivauline"],
    "RizkiHeryundaAgilfi" : ["Rizki Heryunda Agilfi", "Rizki", "X.E3", "Sekbid 1", "-", "--", "--"],
    "RaffaZevio" : ["Raffa Zevio", "Raffa", "X.E1", "Sekbid 2", "Padang/15 Maret 2009", "Orang Sukses", "raffa_zvio"],
    "KartikaCandraKirana" : ["Kartika Candra Kirana", "Kartika", "X.E10", "Sekbid 2", "BENGKULU /07 Oktober 2008", "KELILING ANGKASA", "kartikaaa.candra"],
    "CintaFadilaPutri" : ["Cinta Fadila Putri", "cinta", "XI.F5", "Sekbid 3", "pujarahayu/01 Agustus 2007", "-IPDN.-polwan -dokpol -", "cntafdlh_"],
    "RayhanRamadhan" : ["Rayhan Ramadhan", "Ray", "X.E3", "Sekbid 3", "Lubuk Pinang/20 September 2008", "AKMIL", "ray.rmdh20"],
    "MuhammadFauzi" : ["Muhammad Fauzi", "Fauzi", "X.E8", "Sekbid 4", "Padang/15 Oktober 2008", "Akpol atau relawan PMI Sumbar", "fauxii10"],
    "MelaniSiskaRahayu" : ["Melani Siska Rahayu", "melani", "X.E7", "Sekbid 4", "padang/07 Mei 2008", "Polwan ", "melanisiska32"],
    "RadityaZakiRiandi" : ["Raditya Zaki Riandi", "Radit", "X.E8", "Sekbid 5", "Padang/1 November 2008", "Masinis", "snr_shark"],
    "NailaInsaniBasir" : ["Naila Insani Basir", "Naila", "X.E2", "Sekbid 5", "lubuk basung  /5 november 2008", "CEO", "naylainsanii_"],
    "NaylaDwiPutri" : ["Nayla Dwi Putri", "Nanayy", "X.E10", "Sekbid 6", "Padang/15 Mei 2009", "Abdi Negara ", "Nyladwiptr__"],
    "AndhikaDwiAmnur" : ["Andhika Dwi Amnur", "Dhika", "X.E9", "Sekbid 6", "Padang/11 November 2008", "Marinir", "dhika_dwiamnur"],
    "AlfarMandaPutri" : ["Alfar Manda Putri", "Manda", "X.E3", "Sekbid 7", "Pekanbaru/20 Januari 2009", "a successful businesswoman & psychologist", "alfarmandaa"],
    "ChesaAmanda" : ["Chesa Amanda", "chesa", "X.E4", "Sekbid 7", "-", "--", ""],
    "ThafzaAntikaPratama" : ["Thafza Antika Pratama", "Azha", "X.E3", "Sekbid 8", "Padang/ 12 Oktober 2009", "Animator dan penulis ", "Siantikaxd"],
    "SalimaRamadani" : ["Salima Ramadani", "Salima", "X.E7", "Sekbid 8", "Padang/31 Agustus 2009", "Jadi Volunteer ", "Its_salimaa"],
    "MuhammadFahcri" : ["Muhammad Fahcri", "Fahri", "X.E9", "Sekbid 9", "Padang/29 Desember 2008", "Polisi militer ", "muhammad_fahri_ryy"],
    "OrianaCallystaIdham" : ["Oriana Callysta Idham", "Orin", "XI.F4", "Sekbid 9", "Pekanbaru/23 April 2008", "Jadi orang kaya", "orianacally"],
    "NoveliaFienka" : ["Novelia Fienka", "Velia", "X.E3", "Sekbid 10", "Padang/28 November 2009", "Dokter", "veliaa281"],
    "GustiHandriAshary" : ["Gusti Handri Ashary", "Gusti", "XI.F5", "Sekbid 10", "Padang/2 Agustus 2007", "Akmil/Dokter", "hndriiashary._"],
  };

  const dataBiodata = biodataMap[nama];

  if(dataBiodata){
    const biodata = generateBiodata(...dataBiodata);
    return biodata
  } else {
    console.log("Nama tidak ditemukan dalam daftar biodata."); // Nama tidak ditemukan
  }
}



function generateBiodata(namaLengkap,panggilan,kelas,jabatan,tanggalLahir,citaCita,usernameIg) {
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
            <img class="w-48 h-64 flex justify-center rounded-md object-cover" src="../dist/img/fotoPengurus/${namaLengkap}.jpg" alt="Foto ${namaLengkap}">
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
                <p><span class="font-semibold">Cita-cita: </span>${citaCita}</p>
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
            <div class="items-center flex justify-center gap-2 lg:hidden">
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
              <!-- <div>
                <div class="w-full flex justify-center mt-5">
                  <a class="hover:border-primary" href="https://wa.me/"><img width="48" height="48" src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="whatsapp--v1"/></a>
                </div> -->
                </div>
                </div>
                <p class="font-semibold items-center mt-2 block lg:hidden text-shadow-xs underline text-center">@${usernameIg}</p>
        </div>
    </div>
    </div>

    <!-- Footer Start -->
    <footer class="bg-dark pb-8 bottom-0">
      <div class="container"> 
        <div class="w-full border-t border-slate-700 pt-8">
          <p class="text-center text-xs font-medium text-slate-500">
          Copyright © Osis Sma Kartika. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    <!-- Footer End -->`
}


