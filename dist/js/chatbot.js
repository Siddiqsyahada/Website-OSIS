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
const ApiKey = "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"


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
  if (message.toLowerCase().includes("*")) {
    showBotMessage("Halo! Ada yang bisa saya bantu?");
  }
  else if (message.toLowerCase().includes("pesan") && message.toLowerCase().includes('/')) {
    const messageArray = message.split(' ')  
    const TokenFonnte = "V6rzVmfP4p8Xt8U8QxiP";
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
  }
}


async function processChatGPT(prompt) {
  const API_URL = "https://api.openai.com/v1/chat/completions";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${ApiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: "You are an assistant named Vero, you were specially designed as a Chatbot for SMA Kartika 1-5 Padang. You were created by a person named Siddiq Insan Syahada" }, { role: "user", content: prompt }],
      max_tokens: 300,
      temperature: 0.2,
      n: 1,
      stop: null
    })
  };

  try {
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    console.log(data.choices[0]['message']['content']);
    showBotMessage(data.choices[0]['message']['content'])
  } catch (error) {
    console.error(error);
  }
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
        <span>${message}</span>
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

