export function initElement() {
  const initElement = `
<div id="JSON-UI">
  <div id="JSON-UI-Editor"></div>
  <div id="JSON-UI-Window"></div>
</div>
<div id="header">
  JSON UI
</div>
<div id="footer">
  powered by jsoncrack
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
  width: 100vw;
  overflow: hidden;
  background: #282C34
}
#JSON-UI-Editor {
  width: 30vw;
  height: 100vh;
  top: 36px;
  position: relative;
}
#JSON-UI-Window {
  width: 70vw;
  height: 100vh;
}
#footer {
  background: #2F3136;
  height: 28px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 999999;
}
#header {
  background: rgb(47, 49, 54);
  height: 36px;
  width: 60vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  padding-left: 1rem;
}
`
  document.head.insertAdjacentHTML('beforeend', `<style>${initCSS}</style>`)
  document.body.insertAdjacentHTML('beforeend', initElement)
}
