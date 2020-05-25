import palette from '../palette'

export default {
  contained: {
    boxShadow: '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
    backgroundColor: palette.primary.main,
    '&:hover': {
      backgroundColor: palette.hover.primary,
      color: palette.primary.contrastText,
    },
    color: palette.primary.contrastText,
  },
}
