import { i_JSON, i_github } from '../icons/index'

export function initElement() {
  const initElement = `
<div id="JSON-UI">
  <div id="header">
    <a
      href="https://github.com/FliPPeDround/json-ui"
      target="_blank"
    >
      ${i_JSON} <p>JSON UI </p>
    </a>
    <button id="reload-btn">Run</button>
  </div>
  <div id="JSON-UI-Editor"></div>
  <div id="JSON-UI-Window"></div>
  <div id="footer">
    <a>${i_github}powered by jsoncrack</a>
  </div>
</div>
`
  const initCSS = `
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
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
  height: calc(100vh - 70px);
  top: 36px;
  position: relative;
  overflow: auto;
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
  display: flex;
  align-items: center;
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

a {
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
}
`
  document.head.insertAdjacentHTML('beforeend', `<style>${initCSS}</style>`)
  document.body.insertAdjacentHTML('beforeend', initElement)
}
