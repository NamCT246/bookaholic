import React from 'react'
import { Route } from 'react-router-dom'

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...restProps } = props

  return (
    <Route {...restProps}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  )
}

export default RouteWithLayout
