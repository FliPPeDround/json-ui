import { jsonParseLinter } from '@codemirror/lang-json'
import type { EditorView } from '@codemirror/view'
import { isMac } from '../utils/index'

function sendJSONDate(
  editorView: EditorView,
  jsonCrackEmbed: HTMLIFrameElement,
) {
  const diagnostics = jsonParseLinter()(editorView)
  if (diagnostics.length > 0) {
    for (const diagnostic of diagnostics) {
      // TODO: show error message in the editor
    }
    return
  }

  const json = editorView.state.doc.toString()
  jsonCrackEmbed.contentWindow!.postMessage({
    json,
  }, '*')
}

export function reloadJSON(
  editorView: EditorView,
  jsonCrackEmbed: HTMLIFrameElement,
) {
  const btn = document.getElementById('reload-btn')!
  btn.addEventListener('click', () => {
    sendJSONDate(editorView, jsonCrackEmbed)
  })

  document.addEventListener('keydown', (event) => {
    const isSaveShortcut = isMac() ? (event.metaKey && event.key === 's') : (event.ctrlKey && event.key === 's')
    if (isSaveShortcut) {
      event.preventDefault()
      sendJSONDate(editorView, jsonCrackEmbed)
    }
  })
}
