import { createEditor, createJSONWindow, getTextFromTextOnlyDocument, initElement, reloadJSON } from './main'

const JSONData = getTextFromTextOnlyDocument()
if (JSONData) {
  initElement()
  const editorView = createEditor(JSONData)
  const jsonCrackEmbed = createJSONWindow(JSONData)
  reloadJSON(editorView, jsonCrackEmbed)
}
