import { createApp } from 'vue'
import App from './views/App.vue'
import { setupApp } from '~/logic/common-setup'
import { getTextFromTextOnlyDocument } from '~/logic'

(async () => {
  const JSONData = await getTextFromTextOnlyDocument()

  if (!JSONData)
    return

  // mount component to context window
  const container = document.createElement('div')
  container.id = __NAME__
  const root = document.createElement('div')
  const styleEl = document.createElement('link')
  const scriptEditorEl = document.createElement('script')
  const scriptJSONEl = document.createElement('script')
  const shadowDOM = container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) || container
  styleEl.setAttribute('rel', 'stylesheet')
  styleEl.setAttribute('href', browser.runtime.getURL('dist/contentScripts/style.css'))
  scriptEditorEl.setAttribute('src', browser.runtime.getURL('dist/contentScripts/assets/editor.worker-cc8927cd.js'))
  scriptJSONEl.setAttribute('src', browser.runtime.getURL('dist/contentScripts/assets/json.worker-e09ec1a1.js'))
  shadowDOM.appendChild(styleEl)
  shadowDOM.appendChild(root)
  document.body.appendChild(container)
  const app = createApp(App, { msg: JSONData })
  setupApp(app)
  app.mount(root)
})()
