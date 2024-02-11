fetch('https://script.google.com/macros/s/AKfycbyo3zbwv6I6LzlFljb6gw6btvh_AK1Q88xaNXzpmMoFU3Xaa1akNW7NCmKhM9ccY2A/exec', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ "timestamp":"26/12/2023 23:50:51", "kelas": "11", "pesan": "komeentar baru yang ingin ditambahkan" })
})
.then(response => response.json())
.then(data => {
  console.log('Data komentar terbaru:', data);
})
.catch(error => {
  console.error('Error:', error);
});