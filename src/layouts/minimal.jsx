import React from 'react'
import { makeStyles } from '@material-ui/styles'

// Can consider to move this to layout scope instead of src/components
import { MinimalNavigation } from '../components/navigation'

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

const MinimalLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MinimalNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  )
}

export default MinimalLayout
