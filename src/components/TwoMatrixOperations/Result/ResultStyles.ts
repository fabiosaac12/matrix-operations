import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '328px'
  },
  button: {
    margin: '4px 0',
    padding: '10px 15px',
    fontSize: '20px',
    textTransform: 'uppercase',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    border: '2px solid #00000085',
    borderRadius: '3px'
  },
  backButton: {
    marginTop: theme.spacing(2),
    padding: '1px',
    color: theme.palette.primary.dark,
    '& svg': {
      fontSize: '2rem'
    }
  },
  matrix: {
    border: '2px solid #00000090',
    borderRadius: '3px'
  },
  row: {
    height: '39px',
    display: 'flex'
  },
  element: {
    width: '39px',
    border: '1px solid #00000020',
    padding: '10px',
    boxSizing: 'border-box',
    backgroundColor: '#f7f5ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));
