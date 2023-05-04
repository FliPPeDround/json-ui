function loadingjsonCrackEmbed() {
  const loading = document.createElement('div')
  loading.id = 'loading'
  loading.style.width = '100%'
  loading.style.height = '100%'
  loading.style.display = 'flex'
  loading.style.justifyContent = 'center'
  loading.style.alignItems = 'center'
  loading.innerHTML = `
  <div class="lds-ripple"><div></div><div></div></div>
  <style>
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
  }
  .lds-ripple div:nth-child(2) {
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) -0.5s infinite;
  }
  .lds-ripple div:nth-child(1) {
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) 0s infinite;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
  </style>
  `
  document.getElementById('JSON-UI-Window')!.appendChild(loading)
  document.getElementById('reload-btn')!.style.display = 'none'
}

function removeLoading() {
  document.getElementById('loading')!.remove()
  document.getElementById('header')!.style.width = '50vw'
  document.getElementById('reload-btn')!.style.display = 'inline-block'
}

export function createJSONWindow(
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
  jsonCrackEmbed.style.border = 'none'
  jsonCrackEmbed.style.display = 'none'
  JSONUIWindow.appendChild(jsonCrackEmbed)
  jsonCrackEmbed.onload = () => {
    jsonCrackEmbed.style.display = 'block'
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
