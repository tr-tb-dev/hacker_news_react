import { RootState } from '@/store';

export const selectTheme = (state: RootState) => state.settings.theme;
export const selectLanguage = (state: RootState) => state.settings.language;
export const selectViewMode = (state: RootState) => state.settings.viewMode;
export const selectFontSize = (state: RootState) => state.settings.fontSize;
export const selectDataSource = (state: RootState) => state.settings.dataSource;
