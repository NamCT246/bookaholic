import React from 'react'
import { makeStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import HelpIcon from '@material-ui/icons/Help'

import Dropdown from '../common/Dropdown'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    background: 'red',
  },
  dropdownDisplay: {
    boxShadow: 'none',
    borderRadius: 0,
  },
  listRoot: {
    top: '56px',
  },
}))

const optionList = [
  {
    type: 'Settings',
    icon: <SettingsOutlinedIcon />,
  },
  {
    type: 'Support',
    icon: <HelpIcon />,
  },
]

const dropdownDisplay = (
  <IconButton color="inherit" aria-label="button">
    <AccountCircleSharpIcon />
  </IconButton>
)

const UserProfileDropdown = () => {
  const classes = useStyles()

  return (
    <Dropdown
      classes={classes}
      after={null}
      optionList={optionList}
      initialOption={null}
      dropdownDisplay={dropdownDisplay}
    />
  )
}

export default UserProfileDropdown
