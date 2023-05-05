import { EditorView } from '@codemirror/view'
import { i_dark, i_light } from '../icons'
import { getBrowserThem } from '../utils'

export function changeTheme(
  editorView: EditorView,
  jsonCrackEmbed: HTMLIFrameElement,
) {
  const themBtn = document.getElementById('theme-btn')!
  themBtn.addEventListener('click', () => {
    localStorage.setItem(
      'JSON-UI-THEME',
      getBrowserThem() === 'dark' ? 'light' : 'dark',
    )
    const _theme = getBrowserThem()
    themBtn.innerHTML = _theme === 'dark' ? i_dark : i_light
    document.documentElement.style.setProperty('--JSON-bg-color', _theme === 'dark' ? '#2F3136' : '#f2f3f5')

    jsonCrackEmbed.contentWindow!.postMessage({
      json: editorView.state.doc.toString(),
      options: {
        theme: _theme,
      },
    }, '*')
  })
}
