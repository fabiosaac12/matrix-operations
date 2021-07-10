import { Link } from 'react-router-dom';
import { useStyles } from './HomeStyles';

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link className={classes.button} to="/oneMatrix">
        One Matrix Operations
      </Link>
      <Link className={classes.button} to="/twoMatrix">
        Two Matrix Operations
      </Link>
    </div>
  );
};
