import { getBrowserThem } from '../utils'

export function createJSONWindow(
  json: string,
  options: JSONCrackOptions = {
    theme: getBrowserThem(),
    direction: 'RIGHT',
  },
) {
  const JSONUIWindow = document.getElementById('JSON-UI-Window')!
  const { width, height } = JSONUIWindow.getBoundingClientRect()
  const jsonCrackEmbed = document.createElement('iframe')
  jsonCrackEmbed.id = 'jsoncrackEmbed'
  jsonCrackEmbed.src = 'https://jsoncrack.com/widget'
  jsonCrackEmbed.width = `${width}px`
  jsonCrackEmbed.height = `${height}px`
  jsonCrackEmbed.style.border = 'none'
  // 将iframe添加到页面中
  JSONUIWindow.appendChild(jsonCrackEmbed)
  jsonCrackEmbed.onload = () => {
    jsonCrackEmbed.contentWindow!.postMessage({
      json,
      options,
    }, '*')
  }
  return jsonCrackEmbed
}

interface JSONCrackOptions {
  theme: 'light' | 'dark'
  direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'
}
