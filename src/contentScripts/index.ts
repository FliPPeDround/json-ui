import { createJSONWindow, getTextFromTextOnlyDocument } from './main'

(() => {
  const JSONData = getTextFromTextOnlyDocument()
  if (!JSONData) {
    console.warn('[vitesse-webext] No JSON data found')
    return
  }
  createJSONWindow(JSONData)
})()
