import { i_dark, i_light } from '../icons'
import { getBrowserThem } from '../utils'

export function changeTheme() {
  const themBtn = document.getElementById('theme-btn')!
  themBtn.addEventListener('click', () => {
    localStorage.setItem(
      'JSON-UI-THEME',
      getBrowserThem() === 'dark' ? 'light' : 'dark',
    )
    themBtn.innerHTML = getBrowserThem() === 'dark' ? i_dark : i_light
    document.documentElement.style.setProperty('--JSON-bg-color', getBrowserThem() === 'dark' ? '#2F3136' : '#f2f3f5')
  })
}
