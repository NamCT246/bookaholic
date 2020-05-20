import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import RouteWithLayout from './routes/routeWithLayout'
import { MainLayout, MinimalLayout } from './layouts'
import { Dashboard, Login, Signup, ForgotPassword, NotFound } from './views'

// TODO: Redirect should be done from BE
const Routes = (props) => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout path="/login" layout={MinimalLayout} component={Login} exact />
      <RouteWithLayout path="/sign-up" layout={MinimalLayout} component={Signup} exact />
      <RouteWithLayout path="/forgot-password" layout={MinimalLayout} component={ForgotPassword} exact />
      <RouteWithLayout path="/home" layout={MainLayout} component={Dashboard} exact />
      <RouteWithLayout path="/not-found" layout={MinimalLayout} component={NotFound} exact />
      <Redirect to="/not-found" />
    </Switch>
  )
}

export default Routes
