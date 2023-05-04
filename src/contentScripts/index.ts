import { createEditor, createJSONView, getTextFromTextOnlyDocument, initElement, reloadJSON } from './main'
import './styles/index.css'

const JSONData = getTextFromTextOnlyDocument()
if (JSONData) {
  initElement()
  const editorView = createEditor(JSONData)
  const jsonCrackEmbed = createJSONView(JSONData)
  reloadJSON(editorView, jsonCrackEmbed)
}
