import { editor } from 'monaco-editor'

export function createEditor(code: string, language = 'json') {
  const rootElement = document.getElementById('JSON-UI-Editor')!
  const value = JSON.stringify(JSON.parse(code), null, 2)
  editor.create(rootElement, {
    value,
    language,
    // automaticLayout: true, // 自动布局
    theme: 'vs-dark',
  })
}
