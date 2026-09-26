const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
  'https://kotasatuproperti.com/wp-content/uploads/2024/09/scott-graham-5fNmWej4tAA-unsplash-1-1-1024x683.jpg',
  'https://kotasatuproperti.com/wp-content/uploads/2024/09/Web_Linea_TheAmaya.png',
  'https://kotasatuproperti.com/wp-content/uploads/2024/09/Web_Alysa_TheAmaya.png',
  'https://kotasatuproperti.com/wp-content/uploads/2024/09/Web_Foresta_TheAmaya.png',
  'https://kotasatuproperti.com/wp-content/uploads/2025/08/7.png',
  'https://kotasatuproperti.com/wp-content/uploads/2025/08/8.png',
  'https://kotasatuproperti.com/wp-content/uploads/2025/08/9.png',
  'https://kotasatuproperti.com/wp-content/uploads/2025/08/4.png',
  'https://kotasatuproperti.com/wp-content/uploads/2025/08/5.png',
  'https://kotasatuproperti.com/wp-content/uploads/2025/08/6.png',
  'https://kotasatuproperti.com/wp-content/uploads/2021/04/Web_Award-copy_KSP.jpg',
  'https://kotasatuproperti.com/wp-content/uploads/2021/04/Web_Award_1_KSP.jpg',
  'https://kotasatuproperti.com/wp-content/uploads/2021/04/Web_Award_2_KSP.jpg',
  'https://kotasatuproperti.com/wp-content/uploads/2021/04/Web_Award_3_KSP.jpg',
  'https://kotasatuproperti.com/wp-content/uploads/2021/04/Web_Award_KSP.jpg',
  'https://kotasatuproperti.com/wp-content/uploads/2026/09/Kota-Satu-24-September-2024.webp',
  'https://kotasatuproperti.com/wp-content/uploads/2025/07/Kota-Satu-24-September-2024-1.png',
  'https://kotasatuproperti.com/wp-content/uploads/2025/07/Kota-Satu-24-September-2024-2.png',
  'https://kotasatuproperti.com/wp-content/uploads/2025/07/Kota-Satu-24-September-2024-3.png',
  'https://kotasatuproperti.com/wp-content/uploads/2025/07/Kota-Satu-24-September-2024-4.png',
  'https://kotasatuproperti.com/wp-content/uploads/2025/07/Kota-Satu-24-September-2024-5.png'
];

const targetDir = path.join(__dirname, 'public', 'images');
fs.mkdirSync(targetDir, { recursive: true });

function download(url) {
  return new Promise((resolve) => {
    const filename = path.basename(url);
    const dest = path.join(targetDir, filename);
    const file = fs.createWriteStream(dest);
    
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.warn(`Skip ${filename}: HTTP ${res.statusCode}`);
        return resolve();
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`Downloaded ${filename}`);
          resolve();
        });
      });
    }).on('error', (err) => {
      console.warn(`Error ${filename}: ${err.message}`);
      resolve();
    });
  });
}

async function run() {
  for (const u of urls) {
    await download(u);
  }
  console.log('All downloads finished!');
}

run();
