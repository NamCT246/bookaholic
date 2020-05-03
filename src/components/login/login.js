import React, { useRef, useEffect } from 'react'
import { FormControl, TextField, Button } from '@material-ui/core'

const Login = ({ setForm }) => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleLoginClick = (event) => {
    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (!email || !password) {
      return
    }

    // send the request
    console.log(email, password)
  }

  const handleSetForm = (form) => {
    console.log(form)
    setForm({ type: form })
  }

  return (
    <FormControl component="form">
      <TextField required id="outlined-basic" label="Email" variant="outlined" inputRef={emailRef} />
      <TextField
        id="standard-password-input"
        required
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        inputRef={passwordRef}
      />
      <Button className="login" variant="contained" color="primary" onClick={handleLoginClick}>
        Login
      </Button>
      <Button className="signup" variant="contained" color="secondary" onClick={() => handleSetForm('signup')}>
        Signup
      </Button>
      <Button
        className="forgotPassword"
        variant="contained"
        color="default"
        onClick={() => handleSetForm('forgotPassword')}
      >
        ForgotPassword
      </Button>
    </FormControl>
  )
}

export default Login
