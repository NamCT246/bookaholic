import { useCallback, useMemo } from 'react'

import useRestResponse from './useRestResponse'

// Docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const defaultFetchOptions = {
  method: 'GET', // GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, cors, same-origin
  cache: 'default',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  referrerPolicy: 'no-referrer',
}

const useRestAPI = (endpoint) => {
  const [responseState, responseApi] = useRestResponse()
  const { receiveError, receiveResponse, setLoading } = responseApi

  const sendRequest = useCallback(
    async (options) => {
      // setLoading to true before making the call.
      // There is no need to setLoading to false after because
      // both receiveResponse and receiveError handle that.
      setLoading(true)

      try {
        const response = await window.fetch(endpoint, { ...defaultFetchOptions, options })
        receiveResponse(response)
      } catch (error) {
        receiveError(error)
      }
    },
    [endpoint, receiveError, receiveResponse, setLoading]
  )

  const api = useMemo(
    () => ({
      ...responseApi,
      sendRequest,
    }),
    [responseApi, sendRequest]
  )

  return [responseState, api]
}

export default useRestAPI
