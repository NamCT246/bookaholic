import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import ImageIcon from '@material-ui/icons/Image'

import PrivacyDropdown from '../privacyDropdown'
import { getUsernameFirstLetter } from '../../utils/getUsernameFirstLetter'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
  },
  postWrapper: {
    display: 'flex',
    padding: theme.spacing(6),
  },
  postTip: {
    marginLeft: theme.spacing(3),
    padding: theme.spacing(2),
    color: theme.palette.text.info,
    flex: 1,
  },
}))

// TODO: Replace with fetch
const user = {
  name: 'nam',
  avatar: '/images/cool.jpg',
}

const CreatePost = (props) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Typography>Create a post</Typography>
      <Divider />
      <Paper className={classes.postWrapper}>
        <Avatar alt={user.name} src={user.avatar} className={classes.orange}>
          {getUsernameFirstLetter(user.name)}
        </Avatar>
        <InputBase
          placeholder={`Hey ${user.name}, share a good book can change the world`}
          inputProps={{ 'aria-label': 'post-description' }}
          className={classes.postTip}
        />
      </Paper>
      <Paper className={classes.postUtils}>
        <Button variant="contained" color="default" className={classes.button} startIcon={<ImageIcon />}>
          Upload
        </Button>
        <PrivacyDropdown />
      </Paper>
    </Paper>
  )
}

CreatePost.propTypes = {}

export default CreatePost
