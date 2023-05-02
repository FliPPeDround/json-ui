import { defineConfig } from 'tsup'
import { writeManifest } from './scripts/manifest'
import { copyAssets } from './scripts/removeAssets'

export default defineConfig((options) => {
  return {
    entry: {
      content: 'src/contentScripts/index.ts',
      background: 'src/background/index.ts',
    },
    format: ['cjs'],
    outDir: 'extension',
    shims: false,
    dts: false,
    clean: true,
    minify: !options.watch ? 'terser' : false,
    async onSuccess() {
      await writeManifest()
      await copyAssets()
    },
    outExtension() {
      return {
        js: '.js',
      }
    },
    noExternal: ['monaco-editor'],
  }
})
