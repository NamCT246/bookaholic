import React from 'react'
import { makeStyles } from '@material-ui/styles'

import Feed from '../components/feed'
import CreatePost from '../components/createPost'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
  },
}))

const Dashboard = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CreatePost />
      <Feed />
    </div>
  )
}

export default Dashboard
