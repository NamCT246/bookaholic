import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'

import { useDropdown } from '../../hooks'

const styles = (theme) => ({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
  },
  dropdownDisplay: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  textContent: {
    flex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    margin: '0 16px',
    '& svg': {
      padding: '0 16px 0 8px',
    },
  },
  listRoot: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '37px',
    right: 0,
    borderRadius: theme.spacing(1),
    background: theme.palette.primary.light,
  },
  listItemText: {
    paddingLeft: theme.spacing(4),
  },
})

const Dropdown = ({
  classes,
  text: Text = Typography,
  textContent,
  before,
  after,
  optionList,
  initialOption,
  dropdownDisplay,
  listDisplay,
  listHeader,
  eventType = 'click',
}) => {
  const [selectedItem, setSelectedItem] = React.useState(initialOption)
  const { elementRef, isDropdownOpen, setDropdownOpen } = useDropdown(false, eventType)

  const handleItemClick = (item) => {
    setSelectedItem(item)
    setDropdownOpen(false)
  }

  const arrow = isDropdownOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />

  /**
   * TODO: Currently there's no such way to change behavior to other event rather than just click?
   */
  return (
    <Paper className={classes.root} elevation={0} square>
      <Paper className={classes.dropdownDisplay} ref={elementRef} onClick={() => setDropdownOpen(!isDropdownOpen)}>
        {dropdownDisplay ? (
          dropdownDisplay
        ) : (
          <>
            {before}
            <Text className={classes.textContent}>
              {textContent ||
                (selectedItem && (
                  <Fragment>
                    {selectedItem.icon}
                    {selectedItem.type}
                  </Fragment>
                ))}
            </Text>
            {after || arrow}
          </>
        )}
      </Paper>
      {isDropdownOpen ? (
        listDisplay ? (
          { listDisplay }
        ) : (
          <Fragment>
            {listHeader}
            <List className={classes.listRoot} disablePadding>
              {optionList.map((item) => (
                <ListItem component="li" key={item.type} button onClick={() => handleItemClick(item)}>
                  {item.icon}
                  <ListItemText
                    id={`checkbox-list-label-${item.type}`}
                    primary={item.type}
                    className={classes.listItemText}
                  />
                </ListItem>
              ))}
            </List>
          </Fragment>
        )
      ) : null}
    </Paper>
  )
}

export default withStyles(styles)(Dropdown)
