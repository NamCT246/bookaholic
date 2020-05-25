import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

import PublicIcon from '@material-ui/icons/Public'
import GroupIcon from '@material-ui/icons/Group'
import LockIcon from '@material-ui/icons/Lock'

import Dropdown from '../common/Dropdown'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 'auto',
    background: 'red',
  },
  dropdownDisplay: {
    marginLeft: 'auto',
  },
  listRoot: {
    width: '240px',
    right: 0,
  },
}))

// TODO: To be fetched
const privacyList = [
  {
    type: 'Public',
    icon: <PublicIcon />,
  },
  {
    type: 'Friends only',
    icon: <GroupIcon />,
  },
  {
    type: 'Myself',
    icon: <LockIcon />,
  },
]

const PrivacyDropdown = () => {
  const classes = useStyles()

  return (
    <Dropdown
      classes={classes}
      optionList={privacyList}
      initialOption={{
        type: 'Public',
        icon: <PublicIcon />,
        listHeader: <Typography>Who is able to view this?</Typography>,
      }}
    />
  )
}

export default PrivacyDropdown
