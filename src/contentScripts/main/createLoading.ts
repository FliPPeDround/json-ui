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
