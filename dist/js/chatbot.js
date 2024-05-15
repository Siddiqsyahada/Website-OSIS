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

// // Darkmode toggle
// const darkToggle = document.querySelector('#dark-toggle');
// const html = document.querySelector('html');
// const svgElement = document.getElementById('wave');
// var pathElement = svgElement.getElementsByTagName('path')[0];
// const body = document.getElementById('body') 


// darkToggle.addEventListener('click', function () {
//   if (darkToggle.checked) {
//     html.classList.add('dark');
//     localStorage.theme = 'dark';
//     pathElement.setAttribute('fill', '#0F172A'); 
//     body.classList.add('bg-slate-800')
//   } else {
//     html.classList.remove('dark');
//     localStorage.theme = 'light';
//     pathElement.setAttribute('fill', '#CBD5E1'); 
//     body.classList.remove('bg-slate-800')
//   }
// });

// // pindahkan posisi toggle sesuai mode
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   darkToggle.checked = true;
//   pathElement.setAttribute('fill', '#0F172A');
//   body.classList.add('bg-slate-800')
// } else {
//   darkToggle.checked = false;
//   body.classList.remove('bg-slate-800')
// }

var DataNomorHP = {
  "adri": "62895618785787",
  "fadhli": "6282391145456",
  "luthfi": "6281371792144",
  "arga": "6282173241784",
  "zikra": "6281371857590",
  "azdra": "6282316968969",
  "azzura": "6282389834396",
  "abi": "6282268647109",
  "chayara": "6285263285986",
  "dea": "6282288511432",
  "rere": "62895360799904",
  "devina": "6282386433761",
  "diffa": "6283841518993",
  "gusti": "628126815664",
  "kheisya": "6283179312482",
  "hanny": "6289636844347",
  "hansbri": "6285156924300",
  "kayla": "6288270933797",
  "keyla": "62895359530951",
  "karin": "6281268046546",
  "sylla": "6282170743123",
  "rozi": "083133293518",
  "mozart": "083134990378",
  "muti": "6281268121507",
  "naila": "6282386649642",
  "naumi": "6289527251243",
  "nazma": "6287895656088",
  "nessha": "6281275784598",
  "nisa": "6289529258596",
  "aini": "6283184197596",
  "niel": "6282185930625",
  "ayni": "6283121972512",
  "wulan": "6283164134072",
  "refal": "6282172467639",
  "reva": "6281349739780",
  "riva": "6289524452002",
  "satria": "6289508824280",
  "siddiq": "62895602585445",
  "thania": "6283195935556",
  "vildo": "62895603736115",
  "violin" : "6283895982380"
};


const chatbotElement = document.getElementById("chatbot");
const userInputElement = document.getElementById("userInput");
const sendButtonElement = document.getElementById("sendButton");


sendButtonElement.addEventListener("click", function () {
  const userMessage = userInputElement.value;
  processUserMessage(userMessage);
  userInputElement.value = "";
});

userInputElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const userMessage = event.target.value;
    processUserMessage(userMessage);
    event.target.value = "";
  }
});

async function processUserMessage(message) {
  showUserMessage(message);
  // Proses pesan pengguna dan berikan respons
  // Contoh sederhana:
  if (message.toLowerCase().includes("pesan") && message.toLowerCase().includes('/')) {
    const messageArray = message.split(' ')  
    const TokenFonnte = "V6rzVmfP4p8Xt8U8QxiP"
    console.log(messageArray[1])
    const pesan = message.match(/(["'])(?:(?=(\\?))\2.)*?\1/g);
      const url = "https://api.fonnte.com/send";
      const options = {
        method: "POST",
        headers: {
          "Authorization": TokenFonnte,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          target: DataNomorHP[messageArray[1]],
          message: `
          Halo, ${messageArray[1]}!

          Aku punya kabar seru untukmu:
          
          "${pesan}"
          
          Dari mana asal pesan ini? Kamu pasti penasaran! Nah, seseorang telah mengirimkan pesan khusus untukmu melalui Vero di website OSIS/MPK SMA Kartika 1-5 Padang.
          
          Bukalah segera pesannya dan biarkan aku tahu bagaimana reaksimu! Pesan ini mungkin membawa kabar baik atau sekadar ingin mengirimkan semangat untukmu. Semoga harimu semakin cerah dengan pesan ini!
          `
        })
      };
    
      fetch(url, options)
        .then(response => response.json())
        .then(data => console.log(data)) // Anda dapat melakukan sesuatu dengan respon di sini
        .catch(error => console.error('Error:', error)); // Tangani kesalahan jika ada
  } else {
    processChatGPT(message)
    sendToBotTelegram(message)
  }
}


async function processChatGPT(prompt) {
  var sekarang = new Date();
  var jam = sekarang.getHours();
  var menit = sekarang.getMinutes();
  var detik = sekarang.getSeconds();
  var tanggal = sekarang.getDate();
  var bulan = sekarang.getMonth() + 1;
  var tahun = sekarang.getFullYear();
  var waktu = jam + ':' + menit + ':' + detik;
  var tanggalFormat = tanggal + '/' + bulan + '/' + tahun;
  var waktuDanTanggal = waktu + ' ' + tanggalFormat;

  const API_KEY = "AIzaSyBpYnIfQH4Z0DxGwf5DO1splbZ1pHg4q7M";

fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + API_KEY, {
  redirect: "follow",
    method: 'POST',
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  body: JSON.stringify({
    "contents": [
      {
        "role": "user",
        "parts": [
          {
            "text": "Your name is Vero, a chatbot that is very friendly and approachable. You were created by Siddiq Insan Syahada for SMA Kartika 1-5 Padang. You were designed to provide information about SMA Kartika and the student council (OSIS) of SMA Kartika. Please ensure that if I or the user request any data about SMA Kartika or the student council, you provide valid data without adding any additional information. Only provide information that aligns with the existing data. You are still in the development stage, so errors may occur, but most importantly, you are Vero. Remember that!"
          }
        ]
      },
      {
        "role": "model",
        "parts": [
          {
            "text": "ok"
          }
        ]
      },
      {
        "role": "user",
        "parts": [
          {
            "text": "If asked to tell about Siddiq, then this is Siddiq's biodata: Siddiq is a student of SMA Kartika 1-5 Padang. He created this website, which is the student council's website aimed at providing information to the public about SMA Kartika's student council and also developed Vero as an assistant chatbot for this website."
          }
        ]
      },
      {
        "role": "model",
        "parts": [
          {
            "text": "ok"
          }
        ]
      },
      {
        "role": "user",
        "parts": [
          {
            "text": "ingat informasi ini:Pembina osis sma kartika 1-5 padang ada 3 orang yaitu Ridho Amirsyah,Yuniarti dan fazzatul husna,S.Pd.mereka berperan untuk membimbing jalannya osis di sma kartika dengan baik"
          }
        ]
      },
      {
        "role": "model",
        "parts": [
          {
            "text": "baik,saya akan mengingatnya"
          }
        ]
      },
      {
        "role": "user",
        "parts": [
          {
            "text": "Apa saja Sekbid atau seksi bidang dalam osis?Sekbid 1 :Keimanan Dan Ketakwaan Terhadap Tuhan Yang Maha Esa,Sekbid 2 :Budi Pekerti Luhur/Akhlak Mulia.Sekbid 3: Kepribadian Unggul,Wawasan Kebangsaan,Dan Bela Negara.Sekbid 4:Prestasi Akademik,Seni Dan Atau Olahraga.Sekbid 5:Demokrasi,HAM,Pendidikan Politik,Lingkungan Hidup,Kepekaan Dan Toleransi Sosial.Sekbid 6 :Kreatifitas,Keterampilan Dan Kewirausahaan.Sekbid 7 :Kualitas Jasmani,Kesehatan Dan Gizi.Sekbid 8 :Sastra Dan Budaya,Sekbid 9 :Teknologi Informasi Dan Komunikasi.Sekbid 10 :Komunikasi Dalam Bahasa Inggris.tolong di ingat informasi ini dan berikan datanya kepada saya jika saya bertanya"
          }
        ]
      },
      {
        "role": "model",
        "parts": [
          {
            "text": "ok"
          }
        ]
      },
      {
        "role": "user",
        "parts": [
          {
            "text": ` ingatklah informasi ini untuk memberikan saya data yang valid.berikan sata yang valid
            1.YETTI, S. Pd	Kepala Sekolah	Geografi	 
            2	ZULHAN RANGKUTI, S. Hum	Waka. Kurikulum	Pend. Agama Islam	 
            3	YORI ALFAJRA YUSRA, S. ThI, S. Pd	Waka. Kesiswaan	Pend. Alquran	 
            4	NOFRIANDI, S. SosI, S. PdI	Waka. Humas	Pend. Agama Islam	 
            5	FIRDAUS EFENDI, S. ST	Waka. Sarana	Seni Budaya	 
            6	Dra. ICE HENDRIANI	Waka. Kesiswaan	Bahasa Indonesia	Pens. Juni 2021
            7	YUSTITIS	Guru Mata Pelajaran	Bahasa Indonesia	Pens. Juni 2021
            8	YUSNIDAR, S. Pd	Guru Mata Pelajaran	Geografi	 
            9	YURNI ELITA	Guru Mata Pelajaran	Bimbingan Konseling	 
            10	ARNIDA , S. Pd	Guru Mata Pelajaran	Bahasa Indonesia	 
            11	Dra. GUSNIMAR	Guru Mata Pelajaran	Matematika	 
            12	FIZWARITA, S. Pd	Guru Mata Pelajaran	Kimia	 
            13	IRDA PRAWATI, S. Pd	Guru Mata Pelajaran	Matematika	 
            14	LUSY HELFRIZA, S. Pd	Guru Mata Pelajaran	Seni Budaya	Pens. Des 2021
            15	Dra. SYAMDESWITA	Guru Mata Pelajaran	Ekonomi	 
            16	MAIDARNI, S. Pd	Guru Mata Pelajaran	Biologi	 
            17	Dra. DASNIMAR	Guru Mata Pelajaran	Bahasa Indonesia	 
            18	MELWIDA RAHMAWATI, S. Pd	Guru Mata Pelajaran	Sosiologi	 
            19	Dra. YUNIARTI	Guru Mata Pelajaran	Seni Budaya	 
            20	SALMA, S. Pd	Guru Mata Pelajaran	Kimia	 
            21	ASWERIA DENI, S. Pd	Guru Mata Pelajaran	Bahasa Inggris	 
            22	Dra. ARNITA	Guru Mata Pelajaran	Ekonomi	 
            23	JASLIDA, S Pd	Guru Mata Pelajaran	Sejarah	 
            24	NOVIA ELVIRA, S. Pd	Guru Mata Pelajaran	Matematika	 
            25	LINDRA HERNENY, S. Pd	Guru Mata Pelajaran	Sosiologi	 
            26	MUHARNIF, S. Pd	Guru Mata Pelajaran	Sejarah	 
            27	HANAFIAH, MA	Guru Mata Pelajaran	Pend. Agama Islam	 
            28	ERWITA, S. Pd	Guru Mata Pelajaran	Bahasa Inggris	 
            29	EMIJONIWATI, S. Pd	Guru Mata Pelajaran	Kewarganegaraan	 
            30	YUINDRA YUNIR, S. Pd	Guru Mata Pelajaran	Bahasa Indonesia	Pind. SMA Adabiah Des19
            31	NURSUSI, S. Pd	Guru Mata Pelajaran	Seni Budaya	P3K SMAN Tarusan Jul22
            32	ADFITRIANI, S. Pd	Guru Mata Pelajaran	Kewarganegaraan	 
            33	VERA OCTAVIA, ST	Guru Mata Pelajaran	Kimia	 
            34	DEWI FARIDA, S. Si	Guru Mata Pelajaran	Matematika	 
            35	EMA SASMITA, S. Pd	Guru Mata Pelajaran	Bahasa Inggris	 
            36	MELIA DEVIKA, S. Pd	Guru Mata Pelajaran	Ekonomi	 
            37	FAZZATUL HUSNA, S. Pd	Guru Mata Pelajaran	Geografi	 
            38	HANDRIKO EFENDI, S. Si, M. Pd	Guru Mata Pelajaran	Penjaskes	 
            39	FEEBY MARISA, S. Pd	Guru Mata Pelajaran	Bahasa Inggris	 
            40	AINIL MARDHIYYAH, S. Pd	Guru Mata Pelajaran	Keterampilan	 
            41	YUSMAIROZAWATI, S. Pd	Guru Mata Pelajaran	Bimbingan Konseling	P3K SMAN Tarusan Jul22
            42	DELVAWITA, S. PdI	Guru Mata Pelajaran	Fisika	 
            43	REYSA MARDIAH MASRI, S. Hum	Guru Mata Pelajaran	Bahasa Jepang	 
            44	WAHYU ELFIATNI, S. Pd	Guru Mata Pelajaran	Bahasa Inggris	 
            45	ATHALIA, S. Pd	Guru Mata Pelajaran	Bahasa Indonesia	 
            46	BOBBY NURFIRMAN ARIF, M. Pd	Guru Mata Pelajaran	Biologi	 
            47	YESI AFRIANI, S. Pd	Guru Mata Pelajaran	Biologi	 
            48	VIKA TANTRI, S. Pd	Guru Mata Pelajaran	Bimbingan Konseling	P3K SMAN Tarusan Jul22
            49	ADE PUTRA AFRIZAL, M. Kom	Guru Mata Pelajaran	TIK	 
            50	YOSMADETI, S. Pd	Guru Mata Pelajaran	Fisika	 
            51	HERMANTO, M. Pd	Guru Mata Pelajaran	Matematika	Pind. SMAN1 Kinali Des20
            52	RIDHO AMIRSYAH, S. Pd	Guru Mata Pelajaran	Penjaskes	 
            53	SURYA HADI PUTRA, S. Pd	Guru Mata Pelajaran	Bimbingan Konseling	P3K SMAN2 Bayang Jul22
            54	ADENAN SYAHPUTRA A, S. Pd	Guru Mata Pelajaran	Sejarah	 
            55	WIDYA OKTARIZA, S. Hum	Guru Mata Pelajaran	Bahasa Jepang	 
            56	ROLI MAIZENDRA, M. Pd	Guru Mata Pelajaran	Matematika	 
            57	ISMI NILMAN, S. PdI, M. Pd	Guru Mata Pelajaran	Sejarah	 
            58	MILA MULIANA, S. Kom	Guru Mata Pelajaran	TIK	 
            59	ROLA DEFITA SARI, S. Pd	Guru Mata Pelajaran	Bimbingan Konseling	Jul 22 –
            60	DEBY CHINTIA HIDAYAT, S. Pd	Guru Mata Pelajaran	Bimbingan Konseling	Jul 22 –
            61	RAHMAT FAJRI AS-SYAUQI, S. PdI, Kons	Guru Mata Pelajaran	Bimbingan Konseling	Jul 22 –`
          }
        ]
      },
      {
        "role": "model",
        "parts": [
          {
            "text":"ok"
          }
        ]
      },
      {
        "role": "user",
        "parts": [
          {
            "text": "Sejarah Sma kartika 1-5 Padang"
          }
        ]
      },
      {
        "role": "model",
        "parts": [
          {
            "text": `SMA 17 Agustus Padang didirikan oleh Yayasan Kesejahteraan KODAM III/17 Agustus (Yasebang Dam III/17 Agustus) pada tanggal 12 Januari 1979 dengan gedung belajar di atas Komplek Pertokoan Wisma Penyalur Padang dengan jumlah local yang ada yaitu 3 lokal.

            Latar belakang didirikannya SMA 17 Agustus ini adalah untuk menampung anak ABRI yang tidak dapat diterima oleh sekolah negeri dan juga ikut serta dalam membantu pemerintah dalam bidang pendidikan. Saat berdirinya SMA ini Yayasan Kesejahteraan Kodam III/17 Agustus diketuai oleh Bapak Letnan Kolonel CIN Wahidin serta Kepala SMA Bapak Drs. Nurdin Nauman BA.
            
            Setelah 2 tahun menggunakan lokasi di atas komplek pertokoan wisma penyalur atas perintah Bapak Panglima Kodam III/17 Agustus maka untuk lokasi pembangunan gedung SMA didirikan Tanah di belakang Komplek Perumahan Dodiklat Simpang Haru yang ketika itu masih berupa ladang dan kolam penghuni asrama tersebut.
            
            Maka di atas tanah inilah SMA 17 Agustus berangsur membangun gedungnya sampai berjumlah 10 lokal belajar ditambah 1 Komplek Gedung Tata Usaha dan ruangan Majelis Guru. Setelah bangunan selesai maka sertifikat tanah langsung diurus atas nama SMA 17 Agustus.
            
            Dan pada tahun 1986 dengan terjadinya Likwidasi Kodam III/17 Agustus maka Yayasan Kesejahteraan Kodam III/17 Agustus berubah menjadi Yayasan Wirasakti 17 Agustus dan Ketua Yayasan Wirasakti 17 Agustus masih tetap di pegang oleh Bapak Letkol Wahidin dan Kepala SMA masih tetap dipegang oleh Bapak Drs. Nurdin Nauman.
            
            Pada Maret 1989 Bapak Drs. Nurdin Nauman meninggal dunia dan sementara jabatan Kepala SMA dijabat oleh Bapak Letkol Wahidin dengan pelaksana harian Bapak Erman B. Sc. Setelah 6 bulan berlangsung maka jabatan kepala SMA 17 Agustus diserahkan kepala Bapak Erman B. Sc.
            
            Pada bulan Desember 1991 Bapak Letkol Wahidin meninggal dunia dan yayasan Wirasakti 17 Agustus dipegang oleh Bapak Mayor Sudiro yang ketika itu menjabat sebagai Sekretaris Yayasan. Pada pertengahan Maret 1992 Yayasan Wirasakti meleburkan diri dan SMA 17 Agustus diserahkan ke Yayasan Tunas Kartika Cabang Sumatera Barat yang saat itu diketahui oleh  Soewarno Adiwijoyo.
            
            Dengan berpindahnya Yayasan pengelola dari Yayasan Wirasakti 17 Agustus ke Yayasan Tunas Kartika maka atas perintah Bapak Danrem 032 Wirabraja Bapak Kolonel INF Soewarno Adiwijoyo Gedung belajar SMA 17 Agustus dipindahkan dari gedung lama ke gedung bekas Dodiklat dengan mengadakan renovasi gedung untuk bisa ditempati sebagai gedung belajar. Maka muali Tahun Ajaran 1992/1993 SMA 17 Agustus Padang telah berada di gedung Jalan Dr. Sutomo No. 4 C Padang di Simpang Haru.
            
            Pada Tahun 1997 Yayasan Kartika Jaya Cabang Korem 032 Perwakilan I Daerah Bukit Barisan tanggal 16 April 1997 Nomor: B/18/IV/1997/Set, tentang permohonan izin perubahan nama SMA Swasta 17 Agustus menjadi SMU Swasta Kartika I-5 Padang. Permohonan ini di setujui oleh Kepala Kantor Wilayah Depdikbud Provinsi Sumatera Barat Nomor: Kpts.0275.08.MN.1997 yang ditandatangani oleh Drs. Basri AS, MM yang ditetapkan di Padang Pada April 1997.
            
            Pada tahun 1997 berdirilah SMP dan STM, setelah itu tahun 2000 dibuka lagi SMEA.
            
            Kepala Sekolah SMA Kartika I-5 Padang dari masa ke masa:
            
            No	Nama	Lama Masa Jabatan
            1	Drs. Nurdin Nauman	1979	s/d	1989
            2	Letkol H. Wahidin	1989	s/d	1990
            3	Erman, B. Sc	1990	s/d	2001
            4	Drs. Erman Siswadi, M. Si	2001	s/d	2008
            5	Dra. Nurjannah	2008	s/d	2011
            6	Yetti, S. Pd	2011	s/d	Sekarang`
          }
        ]
      },
      {
        "role": "user",
        "parts": [
          {
            "text": `Berikut adalah data pengurus mpk osis sesuai dengan data dan fakta yang ada.tolong di ingat dan jika diminta untuk menceritakan dan memberi tahukan salah satu biodata pengurus mpk osis maka kamu berika data sesuai yang telah saya berikan dan jangan di lebih-lebihkan dan jangan mengarang-ngarang.tolong ingat data ini:
            biodata = {
              "AdriyansyahNugraha" : ["Adriyansyah Nugraha", "Adri", "xe5", "Sekbid 7", "Padang/24 Januari 2008", "pengusaha", "gurun laweh nanxx", "adrynsnn", "62895618785787"],
              "Alfadhli" : ["Alfadhli", "Fadhli", "XE9", "Komisi B", "Padang/19 Februari 2008", "Polisi", "Tanjung aua nan xx", "alfadhli_02", "6282391145456"],
              "AntarunAsadyLuthfi": ["Antarun Asady Luthfi", "Luthfi", "Xl mipa 4", "Ketua Osis", "Padang/11 Mei 2006", "AAL", "Pengambiran, jln, berlian raya no 8", "Antarun_Luthfi", "6281371792144"],
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
              "NailaKhalifah Azzahra": ["Naila Khalifah Azzahra", "Naila", "xe5", "Sekbid 2", "Padang/26 April 2008", "perawat", "bukit karan", "nanaiii.laa_", "6282386649642"],
              "NaumiAmeliaFitza": ["Naumi Amelia Fitza", "Naumi", "XE.5", "Sekbid 5", "Padang/25 Desember 2007", "Polwan dan perawat", "Lubuk ipuh", "Naumiaf_25", "6289527251243"],
              "NazmaArdiaPutri": ["Nazma Ardia Putri", "Nazma", "XI MIPA 4", "Bendahara Osis 1", "Padang/07 Juni 2007", "Psikologi", "Perum.marinir angkatan laut blok D/10 Padang", "nzmrdiaapt_", "6287895656088"],
              "NesshaAdriani": ["Nessha Adriani", "Nessha", "XE 5", "Sekbid 1", "Padang/10 November 2007", "psikologi", "teluk nibung gates nan xx", "nsshadrianii", "6281275784598"],
              "NisaNurulFauziah": ["Nisa Nurul Fauziah", "Nisa", "XE9", "Komisi A", "Alahan Panjang/07 April 2007", "Kowad", "Jalan parpatih no 7", "Nisanurul916", "6289529258596"],
              "NurAiniZahiraMahdi": ["Nur'aini Zahira Mahdi", "Aini", "XI IPA 6", "Bendahara Osis 2", "Padang/31 Oktober 2006", "Dokter", "Jln Pila Tarok", "aini_zahira__", "6283184197596"],
              "PnielZebua": ["Pniel Zebua", "Niel", "XE8", "Komisi C", "Padang/16 Mei 2008", "Buzzer", "Jl. Seberang Palinggam no. 35", "pniel_zebuaa", "6282185930625"],
              "QuratulAyni": ["Quratul Ayni", "Ayni", "XE5", "Sekbid 9", "Padang/17 Desember 2007", "psikolog", "jl.bypass", "qrtlay_ql", "6283132967557"],
              "RahmaWulandari": ["Rahma Wulandari", "Wulan", "XI IIS 4", "Sekbid 10", "Padang/26 September 2007", "Pebisnis", "Jl. Palembang no.13A, Gaung, Teluk Bayur.", "waelndm", "6283164134072"],
              "RefaldiPrianata": ["Refaldi Prianata", "Refal", "XI MIPA 6", "Komisi A", "Padang/10 Mei 2007", "Menjadi Orang sukses", "JLN PAGAMBIRAN", "faaall_07", "6282172467639"],
              "RevalinaPutriAdrisia": ["Revalina Putri Adrisia", "Reva", "XI MIPA 6", "Sekretaris Osis 1", "Padang/20 Januari 2007", "Pengusaha", "Jl.ranah dalam 1 no 10", "revaalinapa", "6281349739780"],
              "RivaKeisyaEffendy": ["Riva Keisya Effendy", "Riva", "XE7", "Sekbid 3", "Padang/29 Maret 2008", "Polwan", "Parak Laweh pondok citra indovila B.14", "Rvakyy", "6289524452002"],
              "SatriaElson": ["Satria Elson", "Satria", "11 mipa 3", "Komisi B", "Padang/4 Oktober 2006", "Pengusaha", "Assrama tni parak pisang blok bb3", "Sat3ya_ell", "6289508824280"],
              "SiddiqInsanSyahada": ["Siddiq Insan Syahada", "Siddiq", "XE3", "Sekbid 9", "Padang/03 Januari 2008", "Software Engginer (Programer)", "Jalan berok 1 no.10f", "Siddiq_i_s", "62895602585445"],
              "ThaniaAnggrainiSandra": ["Thania Anggraini Sandra", "Thania", "XE6", "Sekbid 5", "Padang/28 Agustus 2007", "Apoteker", "Nuansa gria thp 2 no E11", "Xytann3", "6283195935556"],
              "VildoDegra": ["Vildo Degra", "Vildo", "XE7", "Sekbid 3", "Padang/26 Maret 2008", "TNI AL", "Jl ganting 3 no.18", "vdodga", "62895603736115"],
            };
            kalau kamu diminta biodata salah satu pengurus mpk osis maka kamu jangan memberikan informasi yang salah,fokuslah pada data.dan jangan memberikan data ekstrakulikuler yang di ikuti oleh pengurus mpk osis`
          }
        ]
      },
      {
        "role": "model",
        "parts": [
          {
            "text": "ok"
          }
        ]
      },
      {
        "role": "user",
        "parts": [
          {
            "text": `Struktur kepengurusan MPK OSIS 
            adalah:
            1. Adriyansyah Nugraha - Sekbid 7
            2. Alfadhli - Komisi B
            3. Antarun Asady Luthfi - Ketua Osis
            4. Arga Avrinaldi - Sekbid 3
            5. Arthaul Zikra - Sekbid 7
            6. Azdra Aqqilah - Sekretaris Osis 2
            7. Azzura Rathu Liona - Sekretaris MPK
            8. Bharata Abisena - Wakil Ketua Osis 1
            9. Chayara Balqis Qanita - Sekbid 8
            10. Dea Adelia - Sekbid 1
            11. Desti Julia Revani - Sekbid 8
            12. Devina Maphilindo - Sekbid 6
            13. Diffa Firma Suri - Sekbid 10
            14. Gusti Handri Ashary - Sekbid 4
            15. Halifa Kheisya Putri - Sekbid 4
            16. Hanny Pirhadi - Wakil Ketua MPK
            17. Hansbri Novara - Ketua MPK
            18. Kayla Saskia Ananda - Wakil Ketua Osis 2
            19. Keyla Andika Fitri - Sekbid 4
            20. Khairunnisa - Humas
            21. Khaisylla - Sekbid 2
            22. M. Fachrur Rozi Nst - Komisi C
            23. Mozart Marchello Elshie - Sekbid 6
            24. Mutiara Naswa - Bendahara MPK
            25. Naila Khalifah Azzahra - Sekbid 2
            26. Naumi Amelia Fitza - Sekbid 5
            27. Nazma Ardia Putri - Bendahara Osis 1
            28. Nessha Adriani - Sekbid 1
            29. Nisa Nurul Fauziah - Komisi A
            30. Nur'aini Zahira Mahdi - Bendahara Osis 2
            31. Pniel Zebua - Komisi C
            32. Quratul Ayni - Sekbid 9
            33. Rahma Wulandari - Sekbid 10
            34. Refaldi Prianata - Komisi A
            35. Revalina Putri Adrisia - Sekretaris Osis 1
            36. Riva Keisya Effendy - Sekbid 3
            37. Satria Elson - Komisi B
            38. Siddiq Insan Syahada - Sekbid 9
            39. Thania Anggraini Sandra - Sekbid 5
            40. Vildo Degra - Sekbid 3
            
            Tolong di ingat informasi ini.nama ditas telash dilantik dan sudah sah menjadi pengurus mpk dan osis pada tanggal 23 Oktober 2023 oleh kepala sekolah yang disaksikan oleh siswa dan dilaksanakan di lapangan sekolah`
          }
        ]
      },
      {
        "role": "model",
        "parts": [
          {
            "text": "ok"
          }
        ]
      },
      {
        "role": "user",
        "parts": [
          {
            "text": prompt
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
      stopSequences: []
    },
    safetySettings: [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
    ]
  }),
})
.then(response => response.json())
.then(data => {
  console.log('Response:', data.candidates[0].content.parts[0].text);
  const respon = data.candidates[0].content.parts[0].text
  showBotMessage(respon)
  fetch('https://script.google.com/macros/s/AKfycbzvMO5BZX_8a1tBHxVg_q8bn9rP60LWKkZxPo0Uh_HCpIaUUXbLSVflDTZFp3LP9EY/exec', {
    redirect: "follow",
    method: 'POST',
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    mode:"no-cors",
    body: JSON.stringify({ "timestamp":waktuDanTanggal, "nama": "user", "prompt": prompt,"respons": respon })
  }).then(response => response.json()).then(data => {
    console.log('Data komentar terbaru:', data);
  })
  .catch(error => {
    console.error('Error:', error)
  });
})
.catch(error => {
  console.error('Error:', error);
});

}

function sendToBotTelegram(text){
  fetch('https://api.telegram.org/bot6725187049:AAGhX3hlsKZOBL113OpPkWfVc-OzkCSdpqI/sendMessage', {
    redirect: "follow",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: -4155828511,
      text: text,
    }),
  }).then(response => response.json()).then(data => {
    console.log('response', data);
  })
  .catch(error => {
    console.error('Error:', error)
  })
}



function showUserMessage(message) {
  const userMessageElement = document.createElement("div");
  userMessageElement.classList.add(
    "flex",
    "font-roboto",
    "items-end",
    "mb-4", "w-full","justify-end", "p-4"
  );
  userMessageElement.innerHTML = `
    <div class="flex w-max-1/2 items-center justify-end">
      <span class="text-xs text-gray-400">${getCurrentTime()}</span>
      <div class="bg-blue-500 text-white rounded-lg p-3 ml-2">
        <span>${message}</span>
      </div>
    </div>
  `;
  chatbotElement.appendChild(userMessageElement);
}

function showBotMessage(message) {
  const botMessageElement = document.createElement("div");
  botMessageElement.classList.add(
    "flex",
    "items-start",
    "mb-4",
    "pl-5",
    "animate-fade-in-left"
  );
  botMessageElement.innerHTML = `
    <div class="flex items-center" data-aos="fade-up">
      <div class="bg-gray-300 rounded-lg p-3 mr-2">
        <span style="white-space: pre-line;">${message}</span>
      </div>
      <span class="text-xs text-gray-400">${getCurrentTime()}</span>
    </div>
  `;
  chatbotElement.appendChild(botMessageElement);
}

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

