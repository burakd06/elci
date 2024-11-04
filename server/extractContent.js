import puppeteer from 'puppeteer';
import fs from 'fs';

async function extractContent(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
  } catch (error) {
    console.error(`Error navigating to ${url}:`, error);
    await browser.close();
    return null; // Hata durumunda null döndür
  }

  // İçeriği al
  const content = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('h2, p'));
    return elements.map(element => element.textContent);
  });

  await browser.close();

  return { url, content }; // URL ve içeriği bir nesne olarak döndür
}

// Birden fazla URL
const urls = [
  'http://localhost:3001/',
  'http://localhost:3001/company/about',
  'http://localhost:3001/company/contact',
  'http://localhost:3001/company/blog',
  'http://localhost:3001/company/İnsanKaynaklari',
  'http://localhost:3001/company/e-mustahsil',
  'http://localhost:3001/company/e-fatura',
  'http://localhost:3001/company/e-arsivfatura',
  'http://localhost:3001/company/e-irsaliye',
  'http://localhost:3001/company/e-serbestmeslekmakbuzu',
  'http://localhost:3001/company/e-defter',
  'http://localhost:3001/company/e-saklama',
  'http://localhost:3001/company/e-imza',
  'http://localhost:3001/company/kep'
];

const extractAllContent = async () => {
  const results = await Promise.all(urls.map(url => extractContent(url)));

  // Geçersiz (null) sonuçları filtrele
  const filteredResults = results.filter(result => result !== null);

  // JSON dosyasına yaz
  fs.writeFileSync('article.json', JSON.stringify(filteredResults, null, 2));
};

extractAllContent();
