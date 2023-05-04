export function isPreElement(element: HTMLPreElement) {
  return element.tagName === 'PRE'
}

export function isPlainTextElement(element: HTMLPreElement) {
  return element.nodeType === Node.TEXT_NODE
}
export function getBrowserThem() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export function isMac() {
  return navigator.userAgent.includes('Mac OS X')
}
