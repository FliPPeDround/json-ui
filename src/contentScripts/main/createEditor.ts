import { EditorView, basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { json } from '@codemirror/lang-json'
import { oneDark, oneDarkTheme } from '@codemirror/theme-one-dark'
import 'simplebar/dist/simplebar.min.css'
import SimpleBar from 'simplebar'

function startState(code: string) {
  return EditorState.create({
    doc: code,
    extensions: [
      basicSetup,
      oneDarkTheme,
      oneDark,
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
  // eslint-disable-next-line no-new
  new SimpleBar(
    parent,
    {
      autoHide: true,
      scrollbarMinSize: 20,
    },
  )
  return view
}
