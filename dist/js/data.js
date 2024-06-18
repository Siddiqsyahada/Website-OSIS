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
    { nama: "Nessha Adriani", panggilan: "Nessha", kelas: "XE5", jabatan: "Sekbid 1",nomorHp:"6281275784598" },
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
    { nama: "Desti Julia Revani", panggilan: "Rere", kelas: "XE6", jabatan: "Sekbid 8",nomorHp:"62895360799904" },
    { nama: "Chayara Balqis Q", panggilan: "Yara", kelas: "XE4", jabatan: "Sekbid 8",nomorHp:"6285263285986" },
    { nama: "Siddiq Insan Syahada", panggilan: "Siddiq", kelas: "XE3", jabatan: "Sekbid 9",nomorHp:"62895602585445" },
    { nama: "Quratul Ayni", panggilan: "Ayni", kelas: "xe5", jabatan: "Sekbid 9",nomorHp:"6283132967557" },
    { nama: "Diffa Firma Suri", panggilan: "Dipa", kelas: "XE9", jabatan: "Sekbid 10",nomorHp:"6283841518993" },
    { nama: "Rahma Wulandari", panggilan: "Wulan", kelas: "XI IIS 4", jabatan: "Sekbid 10",nomorHp:"6283164134072" },
  ];




// Membuat objek sekbid1
let sekbid1 = {
    nama: ["nessha adriani", "dea adelia"],
    programKerja: {
        program1: "Program Kerja 1",
        program2: "Program Kerja 2",
        program3: "Program Kerja 3"
    }
};

// Membuat objek sekbid2
let sekbid2 = {
    nama: ["budi santoso", "andi firmansyah"],
    programKerja: {
        program1: "Program Kerja A",
        program2: "Program Kerja B",
        program3: "Program Kerja C"
    }
};

// Membuat objek sekbid3
let sekbid3 = {
    nama: ["rani widyastuti", "siti khadijah"],
    programKerja: {
        program1: "Program Kerja X",
        program2: "Program Kerja Y",
        program3: "Program Kerja Z"
    }
};

let sekbid4 = {
    nama: ["Gusti Handri Ashary", "Keyla Andika Fitri","Halifah keisya Putri"],
    programKerja: {
        program1: ["Pentas Seni Dan Perpisahan Kelas 12","Terlaksana"],
        program2: ["ClassMeeting","Belum Terlaksana"],
        program3: ["17 Agustus","Belum Terlaksana"],
        program4: ["Gelanggang","Belum Terlaksana"]
    }
};
let sekbid5 = {
    nama: ["rani widyastuti", "siti khadijah"],
    programKerja: {
        program1: "Program Kerja X",
        program2: "Program Kerja Y",
        program3: "Program Kerja Z"
    }
};
let sekbid6 = {
    nama: ["rani widyastuti", "siti khadijah"],
    programKerja: {
        program1: "Program Kerja X",
        program2: "Program Kerja Y",
        program3: "Program Kerja Z"
    }
};
let sekbid7 = {
    nama: ["rani widyastuti", "siti khadijah"],
    programKerja: {
        program1: "Program Kerja X",
        program2: "Program Kerja Y",
        program3: "Program Kerja Z"
    }
};
let sekbid8 = {
    nama: ["rani widyastuti", "siti khadijah"],
    programKerja: {
        program1: "Program Kerja X",
        program2: "Program Kerja Y",
        program3: "Program Kerja Z"
    }
};
let sekbid9 = {
    nama: ["rani widyastuti", "siti khadijah"],
    programKerja: {
        program1: "Program Kerja X",
        program2: "Program Kerja Y",
        program3: "Program Kerja Z"
    }
};
let sekbid10 = {
    nama: ["rani widyastuti", "siti khadijah"],
    programKerja: {
        program1: "Program Kerja X",
        program2: "Program Kerja Y",
        program3: "Program Kerja Z"
    }
};

export default sekbid4;

