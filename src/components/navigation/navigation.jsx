import React from 'react'
import { fade, makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'

import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import SearchIcon from '@material-ui/icons/Search'
import ExploreIcon from '@material-ui/icons/Explore'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'
import HowToRegOutlinedIcon from '@material-ui/icons/HowToRegOutlined'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined'

import UserProfileDropdown from './UserProfileDropdown'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '75px',
  },
  left: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
  },
  right: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    flexGrow: 1,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  useListItem: {
    position: 'relative',
  },
  userIcon: {
    position: 'relative',
  },
  userDropdown: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '55px',
    right: 0,
    width: '150px',
    background: fade(theme.palette.background.default, 0.15),
    '& svg': {
      width: '1rem',
      height: '1rem',
      marginRight: '0.5rem',
    },
  },
  auth: {
    display: 'flex',
    padding: theme.spacing(0, 4),
    '& a': {
      margin: theme.spacing(0, 4),
    },
  },
}))

const Navigation = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <div className={classes.left}>
            <IconButton className={classes.title} color="inherit">
              <LibraryBooksIcon />
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </div>
          <div className={classes.right}>
            <IconButton color="inherit" aria-label="button">
              <HomeOutlinedIcon />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton color="inherit" aria-label="button">
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="button">
              <ModeCommentOutlinedIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="button">
              <HowToRegOutlinedIcon />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <UserProfileDropdown className={classes.UserProfileDropdown}></UserProfileDropdown>
            <IconButton color="inherit" aria-label="button">
              <BorderColorOutlinedIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="button">
              <ExploreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation
