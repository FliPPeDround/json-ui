import { createEditor, createJSONWindow, getTextFromTextOnlyDocument, initElement } from './main'

const JSONData = getTextFromTextOnlyDocument()
if (JSONData) {
  initElement()
  createEditor(JSONData)
  createJSONWindow(JSONData)
}
