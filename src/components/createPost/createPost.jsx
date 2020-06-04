import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import ImageIcon from '@material-ui/icons/Image'

import PrivacyDropdown from '../privacyDropdown'
import { getStrFirstLetter } from '../../utils/getStrFirstLetter'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  postWrapper: {
    display: 'flex',
    paddingTop: theme.spacing(5),
  },
  header: {
    padding: theme.spacing(2),
  },
  postUtils: {
    display: 'flex',
    height: '36px',
    marginTop: theme.spacing(4),
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
  name: 'Nam',
  avatar: '/images/cool.jpg',
}

const CreatePost = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation={2}>
      <Typography className={classes.header}>Create a post</Typography>
      <Divider />
      <Paper className={classes.postWrapper} elevation={0}>
        <Avatar alt={user.name} src={user.avatar} className={classes.orange}>
          {getStrFirstLetter(user.name)}
        </Avatar>
        <InputBase
          placeholder={`Hey ${user.name}, share a good book can change the world`}
          inputProps={{ 'aria-label': 'post-description' }}
          className={classes.postTip}
        />
      </Paper>
      <Paper className={classes.postUtils} elevation={0}>
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
