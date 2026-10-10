import { defineConfig } from 'vite';
import { execSync, execFileSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const packageJson = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf8')
);

function getBuildRef() {
  const explicitRef = process.env.VITE_APP_BUILD_REF || process.env.GITHUB_SHA;
  if (explicitRef) return explicitRef.slice(0, 7);

  try {
    const shortSha = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
    try {
      execSync('git diff --quiet --ignore-submodules HEAD --', { stdio: 'ignore' });
      return shortSha;
    } catch (err) {
      return `${shortSha}-dirty`;
    }
  } catch (err) {
    return 'local';
  }
}

function getBuildNumber() {
  const explicitBuildNumber = process.env.VITE_APP_BUILD_NUMBER || process.env.GITHUB_RUN_NUMBER;
  if (explicitBuildNumber) return explicitBuildNumber;

  try {
    return execSync('git rev-list --count HEAD', { encoding: 'utf8' }).trim();
  } catch (err) {
    return 'local';
  }
}

export default defineConfig({
  plugins: [{
    name: 'practice-runtime-content',
    buildStart() {
      execFileSync(process.execPath, [fileURLToPath(new URL('./scripts/build-practice-runtime.mjs', import.meta.url))]);
      for (const file of readdirSync(new URL('./src/data/', import.meta.url))) {
        if (file.endsWith('.js')) this.addWatchFile(fileURLToPath(new URL(`./src/data/${file}`, import.meta.url)));
      }
    },
    handleHotUpdate({file, server}) {
      const sourceDir = fileURLToPath(new URL('./src/data/', import.meta.url));
      if (!file.startsWith(sourceDir) || !file.endsWith('.js')) return;
      execFileSync(process.execPath, [fileURLToPath(new URL('./scripts/build-practice-runtime.mjs', import.meta.url))]);
      server.ws.send({type: 'full-reload'});
      return [];
    }
  }],
  base: '/deliberatepractice/',
  publicDir: 'public',
  // Native file events can miss editor/agent writes on macOS, leaving the
  // preview on an older build even after a browser refresh.
  server: { fs:{deny:['.env','.env.*','**/*.{crt,pem}','**/.git/**','**/*.local']},watch: { usePolling: true }, proxy: {
    '/api/account-services': {target:'http://127.0.0.1:5556',changeOrigin:false,
      configure(proxy){proxy.on('proxyReq',(proxyReq,req)=>{if(!req.headers.origin&&/^(localhost|127\.0\.0\.1):\d+$/.test(req.headers.host??''))proxyReq.setHeader('origin',`http://${req.headers.host}`);});}},
    '/api/ai-practice': {target: 'http://127.0.0.1:5555', changeOrigin: false,
      // Same-origin browser GETs omit Origin. Supply the observed frontend origin
      // for the loopback-only pilot server, never a remote user-controlled URL.
      configure(proxy) { proxy.on('proxyReq', (proxyReq, req) => {
        if (!req.headers.origin && /^(localhost|127\.0\.0\.1):\d+$/.test(req.headers.host ?? ''))
          proxyReq.setHeader('origin', `http://${req.headers.host}`);
      }); }}
  } },
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
    __BUILD_NUMBER__: JSON.stringify(getBuildNumber()),
    __BUILD_REF__: JSON.stringify(getBuildRef())
  },
  build: {
    sourcemap: true
  }
});
