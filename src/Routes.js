import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import RouteWithLayout from './routes/routeWithLayout'
import { MainLayout, MinimalLayout } from './layouts'
import { Dashboard, AuthForm, NotFound } from './views'

// TODO: Redirect should be done from BE
const Routes = (props) => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <RouteWithLayout path="/login" layout={MinimalLayout} component={AuthForm} exact />
      <RouteWithLayout path="/dashboard" layout={MainLayout} component={Dashboard} exact />
      <RouteWithLayout path="/not-found" layout={MinimalLayout} component={NotFound} exact />
      <Redirect to="/not-found" />
    </Switch>
  )
}

export default Routes
