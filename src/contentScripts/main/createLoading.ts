function loadingjsonCrackEmbed() {
  const loading = document.createElement('div')
  loading.id = 'loading'
  loading.style.width = '100%'
  loading.style.height = '100%'
  loading.style.display = 'flex'
  loading.style.flexDirection = 'column'
  loading.style.justifyContent = 'center'
  loading.style.alignItems = 'center'
  loading.style.background = '#1C1C1C'
  loading.style.backgroundImage = 'linear-gradient(#2A2A2A 1.5px,transparent 1.5px), linear-gradient(90deg,#2A2A2A 1.5px,transparent 1.5px), linear-gradient(#252525 1px,transparent 1px), linear-gradient(90deg,#252525 1px,transparent 1px)'
  loading.style.backgroundSize = '100px 100px, 100px 100px, 20px 20px, 20px 20px'
  loading.style.backgroundPosition = '-1.5px -1.5px, -1.5px -1.5px, -1px -1px, -1px -1px'
  loading.innerHTML = `
  <div class="lds-ripple"><div></div><div></div></div>
  <div>Loading...</div>
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
  document.getElementById('JSON-UI-HEADER')!.style.width = '50vw'
  document.getElementById('reload-btn')!.style.display = 'inline-block'
}

export {
  loadingjsonCrackEmbed,
  removeLoading,
}
