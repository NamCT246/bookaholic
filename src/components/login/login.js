import React, { useRef, useEffect } from 'react'
import { FormControl, TextField, Button } from '@material-ui/core'

import { useRestAPI } from '../../hooks'

const Login = ({ setForm }) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [{ loading }, sendRequest] = useRestAPI('https://jsonplaceholder.typicode.com/todos/1')

  const handleLoginClick = async (event) => {
    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (!email || !password) {
      return
    }

    sendRequest()
  }

  return (
    <FormControl component="form">
      <TextField required id="outlined-basic" label="Email" type="email" variant="outlined" inputRef={emailRef} />
      <TextField
        id="standard-password-input"
        required
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        inputRef={passwordRef}
      />
      <Button className="login" variant="contained" color="primary" onClick={handleLoginClick} disabled={loading}>
        Login
      </Button>
      <Button className="signup" variant="contained" color="secondary" onClick={() => setForm('signup')}>
        Signup
      </Button>
      <Button className="forgotPassword" variant="contained" color="default" onClick={() => setForm('forgotPassword')}>
        ForgotPassword
      </Button>
    </FormControl>
  )
}

export default Login
