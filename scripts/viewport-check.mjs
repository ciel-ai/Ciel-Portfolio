import { chromium } from 'playwright';

const baseUrl = process.argv[2] ?? process.env.CIEL_BASE_URL ?? 'http://localhost:5173';
const routes = ['/', '/digital-marketing', '/tech'];
const viewports = [
  { width: 320, height: 760 },
  { width: 768, height: 900 },
  { width: 1280, height: 900 },
  { width: 1920, height: 1080 }
];

const browser = await chromium.launch({ headless: true });
const failures = [];

for (const viewport of viewports) {
  for (const route of routes) {
    const page = await browser.newPage({ viewport });
    const consoleErrors = [];

    page.on('console', (message) => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });

    page.on('pageerror', (error) => {
      consoleErrors.push(error.message);
    });

    const url = new URL(route, baseUrl).toString();
    await page.goto(url, { waitUntil: 'networkidle' });

    const result = await page.evaluate(() => {
      const main = document.querySelector('main');
      const h1 = document.querySelector('h1');

      return {
        title: document.title,
        hasMain: Boolean(main),
        h1Text: h1?.textContent?.trim() ?? '',
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth
      };
    });

    const horizontalOverflow = result.scrollWidth > result.innerWidth + 1;

    if (!result.hasMain || !result.h1Text || consoleErrors.length > 0 || horizontalOverflow) {
      failures.push({
        route,
        viewport,
        result,
        consoleErrors,
        horizontalOverflow
      });
    }

    await page.close();
  }
}

await browser.close();

if (failures.length > 0) {
  console.error(JSON.stringify(failures, null, 2));
  process.exit(1);
}

console.log(`Viewport check passed for ${routes.length} routes across ${viewports.length} viewport sizes.`);
