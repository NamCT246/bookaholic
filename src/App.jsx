import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { ApolloProvider } from '@apollo/client'

import Routes from './Routes'
import theme from './theme'
import CombinedContext from './contextProvider'
import client from './drivers'

import './App.css'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CombinedContext>
            <Routes />
          </CombinedContext>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
