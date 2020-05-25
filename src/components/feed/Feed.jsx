import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
    marginTop: theme.spacing(6),
  },
}))
const Feed = (props) => {
  const classes = useStyles()

  return <Paper className={classes.root}>asd</Paper>
}

Feed.propTypes = {}

export default Feed
