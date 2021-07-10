import { FC } from 'react';
import { useTwoMatrixOperations } from '../TwoMatrixOperations';
import { useStyles } from './MenuStyles';

export const Menu: FC = () => {
  const classes = useStyles();
  const {} = useTwoMatrixOperations();

  return (
    <div className={classes.container}>
      {/* <Control /> */}
      {/* <Control /> */}
    </div>
  );
};
