import { createTheme, Theme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    navigation: {
      background: string
      text: string
      hover: string
      active: string
    }
  }
  interface PaletteOptions {
    navigation?: {
      background?: string
      text?: string
      hover?: string
      active?: string
    }
  }
}

const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00c853',
      light: '#5efc82',
      dark: '#009624',
      contrastText: '#000000',
    },
    secondary: {
      main: '#1e88e5',
      light: '#6ab7ff',
      dark: '#005cb2',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
      paper: 'red',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    navigation: {
      background: '#263238',
      text: '#ffffff',
      hover: '#37474f',
      active: '#00c853',
    },
  },
  typography: {
    fontFamily: '"Roboto Mono", "Courier New", monospace',
    fontSize: 14,
  },
})

const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00e676',
      light: '#66ffa6',
      dark: '#00b248',
      contrastText: '#000000',
    },
    secondary: {
      main: '#00bcd4',
      light: '#62efff',
      dark: '#008ba3',
      contrastText: '#000000',
    },
    background: {
      default: '#0d1117',
      paper: '#161b22',
    },
    text: {
      primary: '#c9d1d9',
      secondary: '#8b949e',
    },
    navigation: {
      background: '#010409',
      text: '#00e676',
      hover: '#161b22',
      active: '#00e676',
    },
  },
  typography: {
    fontFamily: '"Roboto Mono", "Courier New", monospace',
    fontSize: 14,
  },
})

export { lightTheme, darkTheme }
