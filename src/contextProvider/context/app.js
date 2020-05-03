import React, { createContext, useContext, useMemo } from 'react'

const AppContext = createContext()

const AppContextProvider = (props) => {
  const { children, appState } = props

  const aState = { app: 'loading' }

  const contextValue = useMemo(() => aState, [aState])

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  useContext(AppContext)
}

export default AppContextProvider
