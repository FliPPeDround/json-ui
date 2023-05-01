import { defineConfig } from 'tsup'
import { writeManifest } from './scripts/manifest'

export default defineConfig({
  entry: [
    'src/contentScripts/index.ts',
  ],
  format: ['cjs'],
  outDir: 'extension',
  shims: false,
  dts: false,
  clean: true,
  async onSuccess() {
    writeManifest()
  },
})
