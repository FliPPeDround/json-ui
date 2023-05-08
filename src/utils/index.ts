export function isPreElement(element: HTMLPreElement) {
  return element.tagName === 'PRE'
}

export function isPlainTextElement(element: HTMLPreElement) {
  return element.nodeType === Node.TEXT_NODE
}
export function getBrowserThem() {
  // let theme = localStorage.getItem('JSON-UI-THEME')
  // if (!theme) {
  //   const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  //   theme = prefersDark ? 'dark' : 'light'
  // }

  // return theme as 'dark' | 'light'
  return 'dark'
}

export function isMac() {
  return navigator.userAgent.includes('Mac OS X')
}
