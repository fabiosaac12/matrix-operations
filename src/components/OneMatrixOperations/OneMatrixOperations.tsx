import { useOneMatrixOperations } from '.';
import { Matrix } from '../Matrix';
import { useStyles } from './OneMatrixOperationsStyles';
import { Result } from './Result';

export const OneMatrixOperations = () => {
  const classes = useStyles();
  const { matrix, setMatrix, error } = useOneMatrixOperations();

  return (
    <div className={classes.container}>
      <Matrix matrix={matrix} setMatrix={setMatrix} error={error} />
      <Result />
    </div>
  );
};
