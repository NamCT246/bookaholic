import React from 'react'
import { makeStyles } from '@material-ui/styles'

import { Navigation } from '../components/navigation'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
}))

const MainLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Navigation />
      <main className={classes.main}>{children}</main>
    </div>
  )
}

export default MainLayout
