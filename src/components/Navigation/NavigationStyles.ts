import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(2)
  },
  button: {
    margin: '4px 5px',
    padding: '10px 15px',
    fontSize: '20px',
    textTransform: 'uppercase',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    border: '2px solid #00000085',
    borderRadius: '3px',
    textDecoration: 'none',
    '&.active': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.disabled,
      cursor: 'default',
      border: `2px solid ${theme.palette.text.disabled}`
    },
    [theme.breakpoints.down('sm')]: {
      padding: '7px 10px',
      fontSize: '16px'
    }
  }
}));
