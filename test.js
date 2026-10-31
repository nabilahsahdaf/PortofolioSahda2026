/**
 * Comprehensive Automated Testing Suite
 * Portofolio Website Nabilah Sahda Firjatullah
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const TEST_PORT = 5178;

// Jalankan temporary server khusus testing
const serverProc = spawn('node', ['server.js'], {
  cwd: __dirname,
  env: { ...process.env, PORT: String(TEST_PORT) },
  stdio: 'pipe'
});

serverProc.stdout.on('data', (d) => {
  // console.log(`[Server]: ${d.toString().trim()}`);
});

function fetchUrl(urlPath) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:${TEST_PORT}${urlPath}`, (res) => {
      let data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: Buffer.concat(data)
        });
      });
    }).on('error', reject);
  });
}

async function runTests() {
  console.log('===========================================================');
  console.log('🧪 Memulai Automated Testing Website Portofolio...');
  console.log('===========================================================');

  // Berikan waktu server untuk listening
  await new Promise(r => setTimeout(r, 800));

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ [PASS] ${message}`);
      passed++;
    } else {
      console.error(`  ❌ [FAIL] ${message}`);
      failed++;
    }
  }

  try {
    // 1. Test Endpoint Root (/)
    const resRoot = await fetchUrl('/');
    assert(resRoot.statusCode === 200, 'GET / mengembalikan status 200 OK');
    assert(resRoot.headers['content-type'].includes('text/html'), 'Content-Type / adalah text/html');
    const htmlStr = resRoot.body.toString('utf-8');
    assert(htmlStr.includes('Nabilah Sahda Firjatullah'), 'HTML memuat nama Nabilah Sahda Firjatullah');
    assert(htmlStr.includes('id="typewriter-text"'), 'HTML memuat elemen typewriter-text');
    assert(htmlStr.includes('id="projects"'), 'HTML memuat section #projects');
    assert(htmlStr.includes('id="certification"'), 'HTML memuat section #certification');

    // 2. Test Stylesheet (/styles.css)
    const resCss = await fetchUrl('/styles.css');
    assert(resCss.statusCode === 200, 'GET /styles.css mengembalikan status 200 OK');
    assert(resCss.headers['content-type'].includes('text/css'), 'Content-Type styles.css adalah text/css');

    // 3. Test JavaScript Data (/data.js)
    const resData = await fetchUrl('/data.js');
    assert(resData.statusCode === 200, 'GET /data.js mengembalikan status 200 OK');
    assert(resData.headers['content-type'].includes('javascript'), 'Content-Type data.js adalah javascript');

    // 4. Test JavaScript Application Logic (/main.js)
    const resApp = await fetchUrl('/main.js');
    assert(resApp.statusCode === 200, 'GET /main.js mengembalikan status 200 OK');
    assert(resApp.headers['content-type'].includes('javascript'), 'Content-Type main.js adalah javascript');

    // 5. Test Asset Images, Favicon & Certificates
    const assetsToTest = [
      '/assets/favicon.svg',
      '/assets/avatar-nabilah.jpg',
      '/assets/Thumbnail.jpg',
      '/assets/project-agrofriend.jpg',
      '/assets/project-paddlepals.jpg',
      '/assets/cert-ept.jpg',
      '/assets/cert-myskill-ux-writing.jpg',
      '/assets/cert-myskill-figma.jpg',
      '/assets/cert-myskill-data-visualization.jpg',
      '/assets/cert-myskill-frontend.jpg'
    ];

    for (const assetPath of assetsToTest) {
      const resAsset = await fetchUrl(assetPath);
      assert(resAsset.statusCode === 200 && resAsset.body.length > 0, `GET ${assetPath} tersedia (${resAsset.body.length} bytes)`);
    }

    // 6. Test Non-Existent File (404)
    const res404 = await fetchUrl('/not-existing-file.html');
    assert(res404.statusCode === 404, 'GET file yang tidak ada mengembalikan 404 Not Found');

    // 7. Test Headless Edge Browser DOM & Script Execution
    console.log('\n🌐 Melakukan Browser Runtime Testing (Headless Edge)...');
    const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

    if (fs.existsSync(edgePath)) {
      const browserOutput = await new Promise((resolve) => {
        const proc = spawn(edgePath, [
          '--headless=new',
          '--dump-dom',
          `http://localhost:${TEST_PORT}/`
        ]);
        let out = '';
        proc.stdout.on('data', d => out += d.toString());
        proc.on('close', () => resolve(out));
      });

      assert(browserOutput.includes('Agrofriend - Smart Farming Companion'), 'Browser berhasil me-render project Agrofriend dari data.js');
      assert(browserOutput.includes('Peduli Gula - Diabetes Monitoring App'), 'Browser berhasil me-render project Peduli Gula dari data.js');
      assert(browserOutput.includes('assets/Thumbnail.jpg'), 'Browser berhasil memuat thumbnail Peduli Gula');
      assert(browserOutput.includes('Infinite Learning'), 'Browser berhasil me-render timeline pengalaman kerja');
    } else {
      console.log('  ⚠️ Edge path tidak ditemukan, melewatkan uji headless Edge.');
    }

    console.log('\n===========================================================');
    console.log(`📊 Hasil Testing: ${passed} Passed, ${failed} Failed`);
    console.log('===========================================================');

  } catch (err) {
    console.error('Error saat testing:', err);
    failed++;
  } finally {
    serverProc.kill();
    process.exit(failed > 0 ? 1 : 0);
  }
}

runTests();
