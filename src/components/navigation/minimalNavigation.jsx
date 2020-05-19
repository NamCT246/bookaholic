import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'

import { fade, makeStyles } from '@material-ui/core'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import SearchIcon from '@material-ui/icons/Search'
import ExploreIcon from '@material-ui/icons/Explore'
import HelpIcon from '@material-ui/icons/Help'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  auth: {
    display: 'flex',
    padding: theme.spacing(0, 4),
    '& a': {
      margin: theme.spacing(0, 4),
    },
  },
}))

const MinimalNavigation = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
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
            <Typography className={classes.auth}>
              <Link component={RouterLink} color="inherit" to="./login">
                Login
              </Link>
              <Link component={RouterLink} color="inherit" to="/sign-up">
                Sign up
              </Link>
            </Typography>
            <IconButton edge="start" className={classes.exploreButton} color="inherit" aria-label="open drawer">
              <ExploreIcon />
            </IconButton>
            <IconButton edge="start" className={classes.helpButton} color="inherit" aria-label="open drawer">
              <HelpIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

MinimalNavigation.propTypes = {}

export default MinimalNavigation
