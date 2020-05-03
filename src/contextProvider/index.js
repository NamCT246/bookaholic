import React from 'react'

import AppContext from './context/app'
import UserContext from './context/user'

const contextProviders = [AppContext, UserContext]

const CombinedContext = ({ children }) => {
  return contextProviders.reduceRight(
    // Last child refers to the last component trees that wrapped by context providers
    (lastChild, ContextProvider) => <ContextProvider>{lastChild}</ContextProvider>,
    children
  )
}

export default CombinedContext
