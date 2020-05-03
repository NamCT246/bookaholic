import React, { useReducer, Suspense } from 'react'
import { TextField, Button, FormControl } from '@material-ui/core'

import Login from '../components/login'

const Signup = React.lazy(() => import('../components/signup'))
const ForgotPassword = React.lazy(() => import('../components/forgotPassword'))

const initialState = { component: Login, title: 'Login' }

const reducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return { component: Signup, title: 'Signup' }
    case 'forgotPassword':
      return { component: ForgotPassword, title: 'Forgot Password' }
    default:
      return { component: Login, title: 'Login' }
  }
}

const AuthForm = (props) => {
  const [form, setFormDispatcher] = useReducer(reducer, initialState)
  const Form = form.component

  return (
    <div>
      <p>{form.title}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Form setForm={setFormDispatcher} />
      </Suspense>
    </div>
  )
}

export default AuthForm
