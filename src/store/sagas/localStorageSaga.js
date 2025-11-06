import { takeLatest, put, select } from 'redux-saga/effects'
import { initApp } from '@/store/actions/appActions'
import { setTheme, setLanguage } from '@/store/reducers/settings/settings-actions'
import { selectTheme, selectLanguage } from '@/store/reducers/settings/settings-selectors'
import { dataLoaded } from '@/store/actions/appActions'

const STORAGE_KEY = 'hacker_news_v3'

function* loadFromLocalStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const { theme, language } = JSON.parse(stored)
      if (theme) {
        yield put(setTheme(theme))
      }
      if (language) {
        yield put(setLanguage(language))
      }
    }
    yield put(dataLoaded())
  } catch (error) {
    console.error('Error loading from localStorage:', error)
    yield put(dataLoaded())
  }
}

function* saveToLocalStorage() {
  try {
    const theme = yield select(selectTheme)
    const language = yield select(selectLanguage)
    const data = { theme, language }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('Error saving to localStorage:', error)
  }
}

export default function* localStorageSaga() {
  yield takeLatest(initApp.type, loadFromLocalStorage)
  yield takeLatest([setTheme.type, setLanguage.type], saveToLocalStorage)
}
