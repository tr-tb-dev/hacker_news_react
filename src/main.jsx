import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/store'
import { initApp } from '@/store/actions/appActions'
import IntlProviderWrapper from '@/components/IntlProviderWrapper/IntlProviderWrapper'
import MuiThemeProvider from '@/components/MuiThemeProvider/MuiThemeProvider'
import AppRoot from '@/components/AppRoot/AppRoot'
import './main.css'

store.dispatch(initApp())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider>
        <IntlProviderWrapper>
          <AppRoot />
        </IntlProviderWrapper>
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>
)
