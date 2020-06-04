import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'

import Post from './Post'

const posts = [
  {
    id: 1,
    createdAt: '4 days ago',
    userId: 1,
    userName: 'Namct',
    userAvatar: { alt: 'alt', source: '/images/cool.jpg' },
    description: 'Test post description',
    picture: 'https://sachvui.com/cover/2015/Ma-thoi-den-1---Thanh-co-Tinh-Tuyet.jpg',
    likesCount: 2,
    commentsCount: 1,
    // the most relevant or liked comments
    relevantComments: [
      {
        id: 1,
        userId: 5,
        content: 'test comment from user 5',
        likes: 6,
        replies: [],
      },
    ],
    history: [],
  },
  {
    id: 2,
    createdAt: 'Yesterday',
    userId: 1,
    userName: 'namct',
    userAvatar: { alt: 'alt', source: '/images/cool.jpg' },
    description: 'test post',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgbuNjGQstEDE3RbXIo1sVqr7fydZ8ktH312Ql6qZ7ZIQ7Sb9W&usqp=CAU',
    likesCount: 3,
    commentsCount: 1,
    // the most relevant or liked comments
    relevantComments: [
      {
        id: 1,
        userId: 5,
        content: 'test comment from user 5',
        likes: 6,
        replies: [],
      },
    ],
    history: [],
  },
]

const useStyles = makeStyles((theme) => ({
  root: {},
}))

const Posts = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {posts.map((post) => (
        <Post postData={post} key={post.id} />
      ))}
    </div>
  )
}

Posts.propTypes = {}

export default Posts
