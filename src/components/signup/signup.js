import React, { useRef } from 'react'
import { FormControl, TextField, Button } from '@material-ui/core'

const Signup = (props) => {
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
      <Button className="login" variant="contained" onClick={handleLoginClick}>
        Signup
      </Button>
    </FormControl>
  )
}

export default Signup
