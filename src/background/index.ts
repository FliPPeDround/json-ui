chrome.runtime.onInstalled.addListener(async (tab) => {
  chrome.action.setBadgeText({ text: 'OFF' })
})

chrome.action.onClicked.addListener(async (tab) => {
  const prevState = await chrome.action.getBadgeText({ tabId: tab.id })
  const newState = prevState === 'OFF' ? 'ON' : 'OFF'

  await chrome.action.setBadgeText({ text: newState, tabId: tab.id })

  if (newState === 'ON') {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      files: ['content.js'],
    })
  }
})
