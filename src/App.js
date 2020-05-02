import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { createBrowserHistory } from 'history'

import Routes from './Routes'
import theme from './theme'

import './App.css'

const browserHistory = createBrowserHistory()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter history={browserHistory}>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
