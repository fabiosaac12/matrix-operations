import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2)
  },
  arrowButton: {
    padding: '1px',
    color: theme.palette.primary.dark,
    '& svg': {
      fontSize: '1.75rem'
    }
  },
  topButtonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 'auto'
  },
  leftButtonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto'
  },
  matrix: {
    height: '410px',
    width: '410px',
    border: '2px solid #00000090',
    borderRadius: '3px',
    [theme.breakpoints.down('md')]: {
      height: '310px',
      width: '310px'
    },
    [theme.breakpoints.down('xs')]: {
      height: '250px',
      width: '250px'
    }
  },
  row: {
    height: '10%',
    display: 'flex'
  },
  element: {
    width: '10%',
    border: '1px solid #00000020',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.primary.main
  },
  noElement: {
    width: '10%',
    border: '1px solid #00000009',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.primary.light
  },
  input: {
    width: '100%',
    height: '100%',
    color: theme.palette.primary.contrastText,
    '-moz-appearance': 'textfield',
    '& input': {
      textAlign: 'center',
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
      }
    }
  },
  error: {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center',
    marginTop: theme.spacing(2),
    width: '410px',
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '310px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '250px'
    }
  }
}));
