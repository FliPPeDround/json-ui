import { EditorView, basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { json } from '@codemirror/lang-json'
import { oneDarkTheme } from '@codemirror/theme-one-dark'

function startState(code: string) {
  return EditorState.create({
    doc: code,
    extensions: [
      basicSetup,
      oneDarkTheme,
      json(),
    ],
  })
}

export function createEditor(code: string) {
  const parent = document.getElementById('JSON-UI-Editor')!
  const state = startState(code)
  const view = new EditorView({
    state,
    parent,
  })
  return view
}
