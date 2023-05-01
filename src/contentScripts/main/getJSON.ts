import { isPlainTextElement, isPreElement } from '../utils'

export function getTextFromTextOnlyDocument() {
  const bodyChildren = document.body.childNodes
  const firstChild = bodyChildren[0] as HTMLPreElement

  const bodyHasOnlyOneElement = document.body.childNodes.length === 1
  const isPre = isPreElement(firstChild)
  const isPlainText = isPlainTextElement(firstChild)

  if (bodyHasOnlyOneElement && (isPre || isPlainText)) {
    document.body.removeChild(firstChild)
    return firstChild.innerText || firstChild.nodeValue
  }
}
