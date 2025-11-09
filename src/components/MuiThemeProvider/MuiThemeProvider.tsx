import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useSelector } from 'react-redux'
import { selectTheme } from '@/store/reducers/settings/settings-selectors'
import { lightTheme, darkTheme } from '@/theme/theme'
import { ThemeMode } from '@/types/settings'
import { ReactNode } from 'react'

interface MuiThemeProviderProps {
  children: ReactNode
}

function MuiThemeProvider({ children }: MuiThemeProviderProps) {
  const themeMode = useSelector(selectTheme)
  const theme = themeMode === ThemeMode.Dark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MuiThemeProvider
