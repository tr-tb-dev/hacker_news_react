import { makeActionCreator } from '@/helpers/actionHelper';
import { ThemeMode, Language, ViewMode, FontSize, DataSource } from '@/enums/settings';

export const setTheme = makeActionCreator<ThemeMode>('SETTINGS_SET_THEME');
export const setLanguage = makeActionCreator<Language>('SETTINGS_SET_LANGUAGE');
export const setViewMode = makeActionCreator<ViewMode>('SETTINGS_SET_VIEW_MODE');
export const setFontSize = makeActionCreator<FontSize>('SETTINGS_SET_FONT_SIZE');
export const setDataSource = makeActionCreator<DataSource>('SETTINGS_SET_DATA_SOURCE');
