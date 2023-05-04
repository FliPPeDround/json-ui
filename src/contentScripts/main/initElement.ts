export function initElement() {
  const initElement = `
<div id="JSON-UI">
  <div id="header">
    <p>JSON UI</p>
    <button id="reload-btn">Run</button>
  </div>
  <div id="JSON-UI-Editor"></div>
  <div id="JSON-UI-Window"></div>
  <div id="footer">
    powered by jsoncrack
  </div>
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
  height: 32px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 999999;
}
#header {
  background: rgb(47, 49, 54);
  height: 36px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  padding-left: 1rem;
}
#reload-btn {
  margin-left: calc(30vw - 120px);
}
`
  document.head.insertAdjacentHTML('beforeend', `<style>${initCSS}</style>`)
  document.body.insertAdjacentHTML('beforeend', initElement)
}
