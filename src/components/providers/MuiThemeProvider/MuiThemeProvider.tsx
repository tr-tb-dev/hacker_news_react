import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import { selectTheme, selectFontSize } from '@/store/reducers/settings/settings-selectors';
import { createLightTheme, createDarkTheme } from '@/theme/theme';
import { ThemeMode } from '@/enums/settings';
import { ReactNode, useMemo } from 'react';

interface MuiThemeProviderProps {
  children: ReactNode;
}

function MuiThemeProvider({ children }: MuiThemeProviderProps) {
  const themeMode = useSelector(selectTheme);
  const fontSize = useSelector(selectFontSize);

  const theme = useMemo(() => {
    return themeMode === ThemeMode.Dark ? createDarkTheme(fontSize) : createLightTheme(fontSize);
  }, [themeMode, fontSize]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MuiThemeProvider;
