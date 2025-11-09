import { makeActionCreator } from '@/utils/actions/makeActionCreator'
import { ThemeMode, Language } from '@/types/settings'

export const setTheme = makeActionCreator<ThemeMode>('SETTINGS_SET_THEME')
export const setLanguage = makeActionCreator<Language>('SETTINGS_SET_LANGUAGE')
