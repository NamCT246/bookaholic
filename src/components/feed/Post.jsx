import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import { getStrFirstLetter } from '../../utils/getStrFirstLetter'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
    marginBottom: theme.spacing(4),
  },
  userInfo: {
    display: 'flex',
    marginBottom: theme.spacing(4),
  },
  infoWrapper: {
    marginLeft: theme.spacing(6),
  },
  descriptionWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  description: {
    marginBottom: theme.spacing(4),
  },
  postReaction: {
    alignItems: 'center',
    borderBottom: '1px solid #dadde1',
    color: '#606770',
    display: 'flex',
    lineHeight: '20px',
    margin: '10px 12px 0 12px',
    padding: '0 0 10px 0',
  },
}))

const pictureDefault = {
  width: 600,
  height: 750,
}

const Post = ({ postData }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation={6}>
      <div className={classes.userInfo}>
        <Avatar alt={postData.userAvatar.alt} src={postData.userAvatar.source} className={classes.userAvatar}>
          {getStrFirstLetter(postData.userName)}
        </Avatar>
        <div className={classes.infoWrapper}>
          <Typography>{postData.userName}</Typography>
          <Typography>{postData.createdAt}</Typography>
        </div>
      </div>
      <Paper className={classes.postInfo} elevation={0}>
        <div className={classes.descriptionWrapper}>
          <Typography className={classes.description}>{postData.description}</Typography>
          <img src={postData.picture} width={pictureDefault.width} height={pictureDefault.height} />
        </div>
        <div className={classes.postReaction}>
          <Typography className={classes.likesCount}>{postData.likesCount} likes</Typography>
          <Typography className={classes.commentsCount}>{postData.commentsCount} comments</Typography>
        </div>
      </Paper>
    </Paper>
  )
}

Post.propTypes = {}

export default Post
