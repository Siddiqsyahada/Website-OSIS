// fetch('', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ "timestamp":"26/12/2023 23:50:51", "nama": "John ", "komentar": "Komentar baru yang ingin ditambahkan" })
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Data komentar terbaru:', data);
// })
// .catch(error => {
//   console.error('Error:', error);
// });


const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.use(express.json());

app.post('/api/data', async (req, res) => {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzWcCPQEx80wJNDNaeADOUzFU_639-https://script.google.com/macros/s/AKfycbwMKNn9rBnrJHu3EKDxa2luK8wB__uaVV5_Mt4S6Rzi7jIRLRc2MOmAsYkHfbf-qEw/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

