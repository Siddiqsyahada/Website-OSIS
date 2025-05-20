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
  const API_KEY = "AIzaSyDG-3dGu-bvyAyuPZpW4J6laYBbTG65TPU";
  fetch('../dist/data/data.txt')
    .then(response => response.text())
    .then(customInstruction => {
      fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + API_KEY,
        {
          redirect: "follow",
          method: 'POST',
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            "contents": [
              {
                "role": "user",
                "parts": [{ "text": customInstruction }]
              },
              {
                "role": "user",
                "parts": [{ "text": prompt }]
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
        }
      )
        .then(response => response.json())
        .then(data => {
          console.log('Response:', data.candidates[0].content.parts[0].text);
          const respon = data.candidates[0].content.parts[0].text;
          showBotMessage(respon);

          fetch(
            'https://script.google.com/macros/s/AKfycbzvMO5BZX_8a1tBHxVg_q8bn9rP60LWKkZxPo0Uh_HCpIaUUXbLSVflDTZFp3LP9EY/exec',
            {
              redirect: "follow",
              method: 'POST',
              headers: {
                "Content-Type": "text/plain;charset=utf-8",
              },
              mode: "no-cors",
              body: JSON.stringify({
                "timestamp": waktuDanTanggal,
                "nama": "user",
                "prompt": prompt,
                "respons": respon
              })
            }
          )
            .then(response => response.json())
            .then(data => {
              console.log('Data komentar terbaru:', data);
            })
            .catch(error => {
              console.error('Error:', error);
            });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    })
    .catch(error => {
      console.error("Gagal ambil data:", error);
    });
}


// function sendToBotTelegram(text){
//   fetch('https://api.telegram.org/bot6725187049:AAGhX3hlsKZOBL113OpPkWfVc-OzkCSdpqI/sendMessage', {
//     redirect: "follow",
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       chat_id: -4155828511,
//       text: text,
//     }),
//   }).then(response => response.json()).then(data => {
//     console.log('response', data);
//   })
//   .catch(error => {
//     console.error('Error:', error)
//   })
// }



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

