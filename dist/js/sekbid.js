function createCarousel(sectionId, title, images) {
  const container = document.getElementById(sectionId);
  const carouselHTML = `
      <div class="bg-white mb-8 rounded-lg shadow-lg overflow-hidden" data-aos="fade-right">
        <!-- Slick carousel -->
        <div class="slick-carousel">
            ${images.map(img => `
                <div>
                    <img src="${img}" alt="Dokumentasi Program Kerja" class="w-full h-64 object-cover">
                </div>`).join('')}
        </div>
        <!-- Deskripsi Dokumentasi -->
        <div class="p-4">
            <p class="text-lg font-semibold mb-2">${title}</p>
        </div>
      </div>
  `;
  container.innerHTML += carouselHTML;
}


// main.js

// main.js

// Mengambil data dari data.json menggunakan fetch
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Lakukan sesuatu dengan data yang diambil
    console.log(data.sekbid4.nama); // Output: ["Gusti Handri Ashary", "Keyla Andika Fitri", "Halifah Keisya Putri"]
    console.log(data.sekbid4.programKerja[1]); // Output: ["Pentas Seni Dan Perpisahan Kelas 12", "Terlaksana"]
    console.log(data.sekbid4.fotoAnggota); // Output: ["../pengurusOsis/fotoPengurus/Gusti.jpg", "../pengurusOsis/fotoPengurus/Keyla.jpg", "../pengurusOsis/fotoPengurus/Kheisya.jpg"]
    
    // Contoh menampilkan nama anggota sekbid
    data.sekbid4.nama.forEach((name, index) => {
      console.log(`Nama Anggota ${index + 1}: ${name}`);
    });
  })
  .catch(error => console.error('Error:', error));
