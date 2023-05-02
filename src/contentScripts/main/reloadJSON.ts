import { jsonParseLinter } from '@codemirror/lang-json'
import type { EditorView } from '@codemirror/view'

export function reloadJSON(
  editorView: EditorView,
  jsonCrackEmbed: HTMLIFrameElement,
) {
  const btn = document.getElementById('reload-btn')!
  btn.addEventListener('click', () => {
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
  })
}
