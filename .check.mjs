import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:6000/tech';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
page.on('requestfailed', (r) => errors.push(`FAILED ${r.url()}`));

try {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
} catch (e) {
  console.log('NAVIGATION ERROR:', e.message.split('\n')[0]);
  await browser.close();
  process.exit(1);
}

const titles = await page.$$eval('h3', (els) => els.map((e) => e.textContent.trim()));
console.log('Cards rendered:', titles.length);
console.log(titles.join(' | '));

for (const name of ['Star Turmerics', 'Kora Exports', 'Coloured Interiors']) {
  console.log(`${titles.includes(name) ? 'OK  ' : 'MISS'} ${name}`);
}

const broken = await page.$$eval('img', (imgs) =>
  imgs.filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.getAttribute('src'))
);
console.log('Broken images:', broken.length ? broken.join(', ') : 'none');
if (errors.length) console.log('Console/network errors:', errors.slice(0, 5).join(' ;; '));

await page.screenshot({ path: process.argv[3] || 'tech.png', fullPage: false });
await browser.close();
