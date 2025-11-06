import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import store from './store'
import { initApp } from './store/actions/appActions'
import { router } from './routes'
import IntlProviderWrapper from './components/IntlProviderWrapper'
import './main.css'

store.dispatch(initApp())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProviderWrapper>
        <RouterProvider router={router} />
      </IntlProviderWrapper>
    </Provider>
  </React.StrictMode>,
)
