import { defineConfig } from 'vite';
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

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

export default defineConfig({
  base: '/deliberatepractice/',
  publicDir: 'public',
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
    __BUILD_REF__: JSON.stringify(getBuildRef())
  },
  build: {
    sourcemap: true
  }
});
