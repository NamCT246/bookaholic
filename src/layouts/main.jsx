import React from 'react'
import { makeStyles } from '@material-ui/styles'

import { Navigation as TopNavigation } from '../components/navigation'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  main: {
    height: '100%',
  },
}))

const MainLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TopNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  )
}

export default MainLayout
