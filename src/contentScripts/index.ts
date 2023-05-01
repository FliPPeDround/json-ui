import { createJSONWindow, getTextFromTextOnlyDocument } from './main'

const JSONData = getTextFromTextOnlyDocument()
if (JSONData)
  createJSONWindow(JSONData)
