import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
}))

const MinimalLayout = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

export default MinimalLayout
