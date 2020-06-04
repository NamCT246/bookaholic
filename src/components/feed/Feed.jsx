import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'

import Posts from './Posts'

const useStyles = makeStyles((theme) => ({
  root: {},
}))
const Feed = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Posts />
    </div>
  )
}

export default Feed
