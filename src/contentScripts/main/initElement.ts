import { i_JSON } from '../icons/index'

export function initElement() {
  const initElement = `
<div id="JSON-UI">
  <div id="JSON-UI-HEADER">
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
  <div id="JSON-UI-FOOTER">
    <span>powered by ${' .'}
      <a href="https://jsoncrack.com/" target="_blank">
        <span style="color: #F87C03"> JSON</span>
        CRACK
      </a>
    </span>
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
#JSON-UI-FOOTER {
  background: #2F3136;
  height: 32px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

#JSON-UI-FOOTER span {
  display: flex;
  align-items: center;
}
#JSON-UI-HEADER {
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

#JSON-UI a{
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
