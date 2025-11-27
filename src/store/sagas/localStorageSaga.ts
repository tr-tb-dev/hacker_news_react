import { takeLatest, put, select } from 'redux-saga/effects';
import { initApp } from '@/store/actions/appActions';
import {
  setTheme,
  setLanguage,
  setViewMode,
  setFontSize,
  setDataSource,
} from '@/store/reducers/settings/settings-actions';
import {
  selectTheme,
  selectLanguage,
  selectFontSize,
  selectViewMode,
  selectDataSource,
} from '@/store/reducers/settings/settings-selectors';
import { dataLoaded } from '@/store/actions/appActions';
import { ThemeMode, Language, FontSize, ViewMode, DataSource } from '@/enums/settings';

const STORAGE_KEY = 'hacker_news_v3';

function isValidTheme(theme: unknown): theme is ThemeMode {
  return Object.values(ThemeMode).includes(theme as ThemeMode);
}

function isValidLanguage(language: unknown): language is Language {
  return Object.values(Language).includes(language as Language);
}

function isValidFontSize(fontSize: unknown): fontSize is FontSize {
  return Object.values(FontSize).includes(fontSize as FontSize);
}

function isValidViewMode(viewMode: unknown): viewMode is ViewMode {
  return Object.values(ViewMode).includes(viewMode as ViewMode);
}

function isValidDataSource(dataSource: unknown): dataSource is DataSource {
  return Object.values(DataSource).includes(dataSource as DataSource);
}

function* loadFromLocalStorage(): Generator {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const { theme, language, fontSize, viewMode, dataSource } = JSON.parse(stored);
      if (theme && isValidTheme(theme)) {
        yield put(setTheme(theme));
      }
      if (language && isValidLanguage(language)) {
        yield put(setLanguage(language));
      }
      if (fontSize && isValidFontSize(fontSize)) {
        yield put(setFontSize(fontSize));
      }
      if (viewMode && isValidViewMode(viewMode)) {
        yield put(setViewMode(viewMode));
      }
      if (dataSource && isValidDataSource(dataSource)) {
        yield put(setDataSource(dataSource));
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
    const fontSize: FontSize = yield select(selectFontSize);
    const viewMode: ViewMode = yield select(selectViewMode);
    const dataSource: DataSource = yield select(selectDataSource);
    const data = { theme, language, fontSize, viewMode, dataSource };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

export default function* localStorageSaga(): Generator {
  yield takeLatest(initApp.type, loadFromLocalStorage);
  yield takeLatest(
    [setTheme.type, setLanguage.type, setViewMode.type, setFontSize.type, setDataSource.type],
    saveToLocalStorage
  );
}
