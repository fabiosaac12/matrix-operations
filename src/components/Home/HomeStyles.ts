import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    margin: '4px 0',
    padding: '10px 15px',
    fontSize: '20px',
    textTransform: 'uppercase',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    border: '2px solid #00000085',
    borderRadius: '3px',
    textDecoration: 'none'
  }
}));
