import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function capture() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. Desktop Viewport (1440 x 900)
  console.log('Capturing Desktop 1440px...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await sleep(1000);

  // Full page desktop
  await page.screenshot({ path: path.join(outDir, '01_desktop_fullpage.png'), fullPage: true });

  // Hero section viewport
  await page.screenshot({ path: path.join(outDir, '02_desktop_hero.png') });

  // Scroll to About section and screenshot
  await page.evaluate(() => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'instant' });
  });
  await sleep(600);
  await page.screenshot({ path: path.join(outDir, '03_desktop_founder.png') });

  // Scroll to Services
  await page.evaluate(() => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'instant' });
  });
  await sleep(600);
  await page.screenshot({ path: path.join(outDir, '04_desktop_services.png') });

  // Scroll to How it Works
  await page.evaluate(() => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'instant' });
  });
  await sleep(600);
  await page.screenshot({ path: path.join(outDir, '05_desktop_howitworks.png') });

  // Scroll to Testimonials
  await page.evaluate(() => {
    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'instant' });
  });
  await sleep(600);
  await page.screenshot({ path: path.join(outDir, '06_desktop_testimonials.png') });

  // Scroll to Destinations
  await page.evaluate(() => {
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'instant' });
  });
  await sleep(600);
  await page.screenshot({ path: path.join(outDir, '07_desktop_destinations.png') });

  // Scroll to Footer & Final CTA
  await page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
  });
  await sleep(600);
  await page.screenshot({ path: path.join(outDir, '08_desktop_footer.png') });

  // 2. Tablet Viewport (768 x 1024)
  console.log('Capturing Tablet 768px...');
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 1.5 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await sleep(600);
  await page.screenshot({ path: path.join(outDir, '09_tablet_fullpage.png'), fullPage: true });

  // 3. Mobile Viewport (390 x 844 - iPhone 14/15 size)
  console.log('Capturing Mobile 390px...');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await sleep(600);
  await page.screenshot({ path: path.join(outDir, '10_mobile_hero.png') });
  await page.screenshot({ path: path.join(outDir, '11_mobile_fullpage.png'), fullPage: true });

  // Test mobile menu open
  const menuBtn = await page.$('button[aria-label="Toggle navigation menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await sleep(400);
    await page.screenshot({ path: path.join(outDir, '12_mobile_menu_open.png') });
  }

  await browser.close();
  console.log('All screenshots captured successfully!');
}

capture().catch((err) => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
