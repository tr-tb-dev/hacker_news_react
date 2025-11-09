import { setTheme, setLanguage } from '@/store/reducers/settings/settings-actions'
import { Action } from '@/utils/actions/makeActionCreator'
import { ThemeMode, Language } from '@/types/settings'

export interface SettingsState {
  theme: ThemeMode
  language: Language
}

const initialState: SettingsState = {
  theme: ThemeMode.Light,
  language: Language.English,
}

type SettingsAction = Action<ThemeMode | Language>

const _setTheme = (state: SettingsState, action: SettingsAction): SettingsState => ({
  ...state,
  theme: action.payload as ThemeMode,
})

const _setLanguage = (state: SettingsState, action: SettingsAction): SettingsState => ({
  ...state,
  language: action.payload as Language,
})

type ReducerMap = {
  [key: string]: (state: SettingsState, action: SettingsAction) => SettingsState
}

const reducers: ReducerMap = {
  [setTheme.type]: _setTheme,
  [setLanguage.type]: _setLanguage,
}

const settingsReducer = (state = initialState, action: SettingsAction): SettingsState =>
  reducers[action.type] ? reducers[action.type](state, action) : state

export default settingsReducer
