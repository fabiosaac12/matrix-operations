import { NavLink } from 'react-router-dom';
import { useStyles } from './NavigationStyles';

export const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <NavLink className={classes.button} to="/oneMatrix">
        One Matrix Operations
      </NavLink>
      <NavLink className={classes.button} to="/twoMatrix">
        Two Matrix Operations
      </NavLink>
    </div>
  );
};
