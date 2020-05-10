import { InMemoryCache, HttpLink, ApolloClient } from '@apollo/client'
import { setContext } from '@apollo/link-context'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('authorization_token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  cache,
  link: authLink.concat(link),
})

export default client
