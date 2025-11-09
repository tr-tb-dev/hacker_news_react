import { takeLatest, put, select } from 'redux-saga/effects';
import { initApp } from '@/store/actions/appActions';
import { setTheme, setLanguage } from '@/store/reducers/settings/settings-actions';
import { selectTheme, selectLanguage } from '@/store/reducers/settings/settings-selectors';
import { dataLoaded } from '@/store/actions/appActions';
import { ThemeMode, Language } from '@/enums/settings';

const STORAGE_KEY = 'hacker_news_v3';

function isValidTheme(theme: unknown): theme is ThemeMode {
  return Object.values(ThemeMode).includes(theme as ThemeMode);
}

function isValidLanguage(language: unknown): language is Language {
  return Object.values(Language).includes(language as Language);
}

function* loadFromLocalStorage(): Generator {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const { theme, language } = JSON.parse(stored);
      if (theme && isValidTheme(theme)) {
        yield put(setTheme(theme));
      }
      if (language && isValidLanguage(language)) {
        yield put(setLanguage(language));
      }
    }
    yield put(dataLoaded());
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    yield put(dataLoaded());
  }
}

function* saveToLocalStorage(): Generator {
  try {
    const theme: ThemeMode = yield select(selectTheme);
    const language: Language = yield select(selectLanguage);
    const data = { theme, language };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

export default function* localStorageSaga(): Generator {
  yield takeLatest(initApp.type, loadFromLocalStorage);
  yield takeLatest([setTheme.type, setLanguage.type], saveToLocalStorage);
}
