import { i_JSON, i_dark, i_light } from '../icons/index'
import { getBrowserThem } from './../utils/index'

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
   <div>
    <div id="theme-btn">
      ${getBrowserThem() === 'dark' ? i_light : i_dark}
    </div>
   </div>
    <span>powered by ${' .'}
      <a href="https://jsoncrack.com/" target="_blank">
        <span style="color: #F87C03"> JSON</span>
        CRACK
      </a>
    </span>
  </div>
</div>
<style>
:root {
  --JSON-bg-color: ${getBrowserThem() === 'dark' ? '#2F3136' : '#f2f3f5'};
}
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
  background: var(--JSON-bg-color);
}
#JSON-UI-Editor {
  width: 30vw;
  height: calc(100vh - 70px);
  background: #282c34;
  top: 36px;
  position: relative;
  overflow: auto;
}
#JSON-UI-Window {
  width: 70vw;
  height: 100vh;
}
#JSON-UI-FOOTER {
  background: var(--JSON-bg-color);
  height: 32px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

#JSON-UI-FOOTER span {
  display: flex;
  align-items: center;
}
#JSON-UI-HEADER {
  background: var(--JSON-bg-color);
  height: 36px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  padding: 1rem;
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

.cm-panel {
  position: fixed !important;
  top: calc(36px + .8rem);
  left: calc(30vw + .8rem);
  z-index: 100;
  background: #282C34;
  padding: .8rem !important;
  border-radius: 6px;
}
.cm-panels.cm-panels-bottom {
  border: none !important;
}

.cm-scroller {
  overflow-y: hidden !important;
}

#theme-btn svg{
  width: 1.4rem;
  height: 1.4rem;
  cursor: pointer;
  color: ${getBrowserThem() === 'dark' ? '#8b8d8f' : '#878d97'};
  transition: color .5s;
}
#theme-btn svg:hover{
  color: ${getBrowserThem() === 'dark' ? '#e5e7eb' : '#374151'};
}
a[href="https://editor.herowand.com"] { 
  background-color: yellow;
}
</style>`
  document.body.insertAdjacentHTML('beforeend', initElement)
}
