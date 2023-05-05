import {
  changeTheme,
  createEditor,
  createJSONView,
  getTextFromTextOnlyDocument,
  initElement,
  reloadJSON,
} from './main'

const JSONData = getTextFromTextOnlyDocument()
if (JSONData) {
  initElement()
  const editorView = createEditor(JSONData)
  const jsonCrackEmbed = createJSONView(JSONData)
  reloadJSON(editorView, jsonCrackEmbed)
  changeTheme()
}
