import { getBrowserThem } from '../utils'

export function createJSONWindow(
  json: string,
  options: JSONCrackOptions = {
    theme: getBrowserThem(),
    direction: 'RIGHT',
  },
) {
  const JSONUIWindow = document.getElementById('JSON-UI-Window')!
  const jsonCrackEmbed = document.createElement('iframe')
  jsonCrackEmbed.id = 'jsoncrackEmbed'
  jsonCrackEmbed.src = 'https://jsoncrack.com/widget'
  jsonCrackEmbed.width = '100%'
  jsonCrackEmbed.height = '100%'
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
