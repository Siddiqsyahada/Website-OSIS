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


$(document).ready(function() {
    $('#to-top').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 'slow');
    });
  });



// Fungsi untuk menghasilkan elemen gambar dengan urutan angka
function generateImages(judul,count, title) {
    let images = '';
    for (let i = 1; i <= count; i++) {
        images += `<div class="rounded-lg overflow-hidden mx-2 border-primary border-2">
                        <img src="./gallery/${judul}/photo/${i}.jpg" alt="${title} Foto ${i}" loading="lazy" class="w-full h-56 object-cover">
                    </div>`;
    }
    return images;
}

// pelantikan mpk osis
const pelantikanMobile = document.getElementById('pelantikanMobile')
const pelantikanDekstop = document.getElementById('pelantikanDesktop')

pelantikanMobile.innerHTML = generateImages('pelantikan',30, 'Kegiatan 1');
pelantikanDekstop.innerHTML = generateImages('pelantikan',30, 'Kegiatan 1');

// pensi kelas 12
const pensiMobile = document.getElementById('pensiMobile')
const pensiDekstop = document.getElementById('pensiDesktop')

pensiMobile.innerHTML = generateImages('pensi',30, 'Kegiatan 1');
pensiDekstop.innerHTML = generateImages('pensi',30, 'Kegiatan 1');

// hari guru nasional
const hariguruMobile = document.getElementById('hariguruMobile')
const hariguruDekstop = document.getElementById('hariguruDesktop')

hariguruMobile.innerHTML = generateImages('hariguru',30, 'Kegiatan 1');
hariguruDekstop.innerHTML = generateImages('hariguru',30, 'Kegiatan 1');