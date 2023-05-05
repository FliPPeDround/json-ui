import { loadingjsonCrackEmbed, removeLoading } from './createLoading'

export function createJSONView(
  json: string,
  options: JSONCrackOptions = {
    theme: 'dark',
    direction: 'RIGHT',
  },
) {
  loadingjsonCrackEmbed()
  const JSONUIWindow = document.getElementById('JSON-UI-Window')!
  const jsonCrackEmbed = document.createElement('iframe')
  jsonCrackEmbed.id = 'jsoncrackEmbed'
  jsonCrackEmbed.src = 'https://jsoncrack.com/widget'
  jsonCrackEmbed.width = '100%'
  jsonCrackEmbed.height = '100%'
  // jsonCrackEmbed.sandbox = 'allow-scripts allow-same-origin allow-popups'
  jsonCrackEmbed.style.border = 'none'
  jsonCrackEmbed.style.display = 'none'
  JSONUIWindow.appendChild(jsonCrackEmbed)
  jsonCrackEmbed.onload = () => {
    jsonCrackEmbed.style.display = 'block'
    const aTag = document.createElement('a')
    console.log(aTag)
    removeLoading()
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
