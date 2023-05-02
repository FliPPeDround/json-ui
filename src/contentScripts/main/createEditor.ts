import { EditorView, basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { json } from '@codemirror/lang-json'
import { oneDarkTheme } from '@codemirror/theme-one-dark'

function startState(code: string) {
  const doc = JSON.stringify(JSON.parse(code), null, 2)
  return EditorState.create({
    doc,
    extensions: [basicSetup, oneDarkTheme, json()],
  })
}

export function createEditor(code: string) {
  const parent = document.getElementById('JSON-UI-Editor')!
  const state = startState(code)
  const view = new EditorView({
    state,
    parent,
  })
}
