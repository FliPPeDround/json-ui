import fs from 'fs-extra'
import { log, r } from './utils'

export async function copyAssets() {
  await fs.copy(r('src/assets'), r('extension/assets'))
  log('PRE', 'copy assets')
}
