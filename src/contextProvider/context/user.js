import React, { createContext, useContext, useMemo } from 'react'

const UserContext = createContext()

const UserContextProvider = (props) => {
  const { children, userState } = props

  const uState = { user: 'namct' }

  const contextValue = useMemo(() => uState, [uState])

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}

export const useUserContext = () => {
  useContext(UserContext)
}

export default UserContextProvider
