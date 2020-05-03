import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'

import Routes from './routes'
import theme from './theme'
import CombinedContext from './contextProvider'

import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CombinedContext>
          <Routes />
        </CombinedContext>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
