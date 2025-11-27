import {
  setTheme,
  setLanguage,
  setViewMode,
  setFontSize,
  setDataSource,
} from '@/store/reducers/settings/settings-actions';
import { Action } from '@/helpers/actionHelper';
import { ThemeMode, Language, ViewMode, FontSize, DataSource } from '@/enums/settings';

export interface SettingsState {
  theme: ThemeMode;
  language: Language;
  viewMode: ViewMode;
  fontSize: FontSize;
  dataSource: DataSource;
}

const initialState: SettingsState = {
  theme: ThemeMode.Dark,
  language: Language.English,
  viewMode: ViewMode.List,
  fontSize: FontSize.Large,
  dataSource: DataSource.ReduxSaga,
};

type SettingsAction = Action<ThemeMode | Language | ViewMode | FontSize | DataSource>;

const _setTheme = (state: SettingsState, action: SettingsAction): SettingsState => ({
  ...state,
  theme: action.payload as ThemeMode,
});

const _setLanguage = (state: SettingsState, action: SettingsAction): SettingsState => ({
  ...state,
  language: action.payload as Language,
});

const _setViewMode = (state: SettingsState, action: SettingsAction): SettingsState => ({
  ...state,
  viewMode: action.payload as ViewMode,
});

const _setFontSize = (state: SettingsState, action: SettingsAction): SettingsState => ({
  ...state,
  fontSize: action.payload as FontSize,
});

const _setDataSource = (state: SettingsState, action: SettingsAction): SettingsState => ({
  ...state,
  dataSource: action.payload as DataSource,
});

type ReducerMap = {
  [key: string]: (state: SettingsState, action: SettingsAction) => SettingsState;
};

const reducers: ReducerMap = {
  [setTheme.type]: _setTheme,
  [setLanguage.type]: _setLanguage,
  [setViewMode.type]: _setViewMode,
  [setFontSize.type]: _setFontSize,
  [setDataSource.type]: _setDataSource,
};

const settingsReducer = (state = initialState, action: SettingsAction): SettingsState =>
  reducers[action.type] ? reducers[action.type](state, action) : state;

export default settingsReducer;
