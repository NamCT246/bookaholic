import React, { useMemo, Fragment } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import PublicIcon from '@material-ui/icons/Public'
import GroupIcon from '@material-ui/icons/Group'
import LockIcon from '@material-ui/icons/Lock'
import CheckIcon from '@material-ui/icons/Check'

import { useDropdown } from '../../hooks'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
  },
  listRoot: {
    display: 'flex',
  },
}))

const privacyList = [
  {
    type: 'public',
    icon: <PublicIcon />,
  },
  {
    type: 'friends',
    icon: <GroupIcon />,
  },
  {
    type: 'myself',
    icon: <LockIcon />,
  },
]

const PrivacyDropdown = (props) => {
  const { elementRef, isDropdownOpen, setDropdownOpen } = useDropdown(false, 'click')
  const [selectedPrivacy, setSelectedPrivacy] = React.useState({
    type: 'public',
    icon: <PublicIcon />,
  })
  const classes = useStyles()

  const handleItemClick = (item) => {
    setSelectedPrivacy(item)
    // setDropdownOpen(false)
  }

  const renderOptions = useMemo(() => {
    return (
      <Fragment>
        <Typography>Who is able to view this?</Typography>
        {privacyList.map((item) => (
          <List className={classes.listRoot} key={item.type}>
            <ListItem key={item.type} button onClick={() => handleItemClick(item)}>
              <ListItemIcon>{item.type === selectedPrivacy.type ? <CheckIcon /> : null}</ListItemIcon>
              <IconButton edge="end" aria-label={item.type}>
                {item.icon}
              </IconButton>
              <ListItemText id={`checkbox-list-label-${item.type}`} primary={item.type} />
            </ListItem>
          </List>
        ))}
      </Fragment>
    )
  }, [privacyList, selectedPrivacy])

  return (
    <Paper ref={elementRef} className={classes.root}>
      <IconButton
        className={clsx(classes.iconButton, classes.userIcon)}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        ref={elementRef}
        color="inherit"
        aria-label="button"
      >
        {selectedPrivacy.icon}
      </IconButton>
      {isDropdownOpen ? renderOptions : null}
    </Paper>
  )
}

PrivacyDropdown.propTypes = {}

export default PrivacyDropdown
