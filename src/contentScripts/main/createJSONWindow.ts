import { getBrowserThem } from '../utils'

export function createJSONWindow(
  json: string,
  options: JSONCrackOptions = {
    theme: getBrowserThem(),
    direction: 'RIGHT',
  },
) {
  const JSONUIWindow = document.getElementById('JSON-UI-Window')!

  // const loading = document.createElement('div')
  // loading.style.position = 'absolute'
  // loading.style.top = '50%'
  // loading.style.left = '50%'
  // loading.style.transform = 'translate(-50%, -50%)'
  // loading.style.fontSize = '30px'
  // loading.innerText = 'Loading...'
  // document.getElementById('JSON-UI')!.appendChild(loading)

  const jsonCrackEmbed = document.createElement('iframe')
  jsonCrackEmbed.id = 'jsoncrackEmbed'
  jsonCrackEmbed.src = 'https://jsoncrack.com/widget'
  jsonCrackEmbed.width = '100%'
  jsonCrackEmbed.height = '100%'
  jsonCrackEmbed.style.border = 'none'
  // 将iframe添加到页面中
  JSONUIWindow.appendChild(jsonCrackEmbed)

  // 加载loading效果

  jsonCrackEmbed.onload = () => {
    // loading.style.display = 'none'
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
