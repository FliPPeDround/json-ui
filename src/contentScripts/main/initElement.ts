export function initElement() {
  const initElement = `
<div id="JSON-UI">
  <div id="JSON-UI-Editor"></div>
  <div id="JSON-UI-Window"></div>
</div>
`
  const initCSS = `
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#JSON-UI {
  display: flex;
  height: 100vh;
  width:100vw;
  overflow: hidden;
}
#JSON-UI-Editor {
  width: 30vw;
  height: 100vh;
}
#JSON-UI-Window {
  width: 70vw;
  height: 100vh;
}
`
  document.head.insertAdjacentHTML('beforeend', `<style>${initCSS}</style>`)
  document.body.insertAdjacentHTML('beforeend', initElement)
}
