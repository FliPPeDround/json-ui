import { defineConfig } from 'tsup'
import { writeManifest } from './scripts/manifest'
import { copyAssets } from './scripts/removeAssets'

export default defineConfig({
  entry: {
    content: 'src/contentScripts/index.ts',
    background: 'src/background/index.ts',
  },
  format: ['cjs'],
  outDir: 'extension',
  shims: false,
  dts: false,
  clean: true,
  minify: 'terser',
  async onSuccess() {
    await writeManifest()
    await copyAssets()
  },
  outExtension() {
    return {
      js: '.js',
    }
  },
})
