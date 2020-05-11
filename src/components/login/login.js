import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/styles'
import { FormControl, TextField, Button, Typography, Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

import { useRestAPI } from '../../hooks'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
  },
  linkContainer: {
    marginTop: theme.spacing(4),
  },
  linkWrapper: {
    display: 'flex',
    marginTop: theme.spacing(4),
  },
  forgotPWTypo: {
    marginLeft: 'auto',
  },
}))

const Login = () => {
  const classes = useStyles()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [{ loading, data, error }, { sendRequest }] = useRestAPI('https://jsonplaceholder.typicode.com/todos/1')

  const handleLoginClick = async (event) => {
    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (!email || !password) {
      return
    }

    sendRequest()
  }

  return (
    <FormControl component="form" className={classes.root}>
      <TextField
        margin="dense"
        required
        id="outlined-basic"
        label="Email"
        type="email"
        variant="outlined"
        inputRef={emailRef}
      />
      <TextField
        margin="dense"
        id="standard-password-input"
        required
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        inputRef={passwordRef}
      />
      <div className={classes.linkContainer}>
        <Button fullWidth={true} variant="contained" onClick={handleLoginClick} disabled={loading || data}>
          Login
        </Button>
        <div className={classes.linkWrapper}>
          <Typography>
            <Link component={RouterLink} to="/sign-up">
              Sign up
            </Link>
          </Typography>
          <Typography className={classes.forgotPWTypo}>
            <Link component={RouterLink} to="/forgot-password">
              Forgotten account?
            </Link>
          </Typography>
        </div>
      </div>
    </FormControl>
  )
}

export default Login
