const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 2 });
  await page.goto('file:///home/user/edicao-videos/_CLAUDE/branding-comunicacao-digital/quadros-gancho.html', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  for (const id of ['A','B','C']) {
    await page.locator('#' + id).screenshot({ path: `/home/user/edicao-videos/_CLAUDE/branding-comunicacao-digital/quadros/gancho-${id}.png` });
  }
  await browser.close();
  console.log('ok');
})().catch(e => { console.error(e); process.exit(1); });
