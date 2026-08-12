import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1500, height: 1100 } });
await page.goto('http://localhost:3000/tech', { waitUntil: 'networkidle' });

const card = page.locator('article', { hasText: 'Star Turmerics' }).first();
await card.scrollIntoViewIfNeeded();
await page.waitForTimeout(1200);
await page.screenshot({ path: process.argv[2], fullPage: false });
await browser.close();
