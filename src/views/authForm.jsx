import React, { useReducer, Suspense } from 'react'
import { makeStyles } from '@material-ui/styles'

import Login from '../components/login'

const Signup = React.lazy(() => import('../components/signup'))
const ForgotPassword = React.lazy(() => import('../components/forgotPassword'))

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    textAlign: 'center',
  },
}))

const initialState = { component: Login, title: 'Login' }

const reducer = (state, form) => {
  switch (form) {
    case 'signup':
      return { component: Signup, title: 'Signup' }
    case 'forgotPassword':
      return { component: ForgotPassword, title: 'Forgot Password' }
    default:
      return { component: Login, title: 'Login' }
  }
}

// TODO: so this component should be moved to modal widget instead of view, as dispatching form name event doesn't trigger router change
const AuthForm = (props) => {
  const [{ component: Form, title }, setFormDispatcher] = useReducer(reducer, initialState)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <p className={classes.title}>{title}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Form setForm={setFormDispatcher} currentForm={title} />
      </Suspense>
    </div>
  )
}

export default AuthForm
