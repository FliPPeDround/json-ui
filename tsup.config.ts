import { defineConfig } from 'tsup'
import { writeManifest } from './scripts/manifest'
import { copyAssets } from './scripts/removeAssets'

export default defineConfig((options) => {
  return {
    entry: {
      content: 'src/contentScripts/index.ts',
      // background: 'src/background/index.ts',
      // cs: 'src/styles/index.css',
    },
    format: ['iife'],
    outDir: 'extension',
    shims: false,
    dts: false,
    clean: true,
    minify: !options.watch,
    async onSuccess() {
      await writeManifest()
      await copyAssets()
    },
    outExtension() {
      return {
        js: '.js',
      }
    },
    noExternal: [
      'codemirror',
      '@codemirror',
      'simplebar',
    ],
  }
})
