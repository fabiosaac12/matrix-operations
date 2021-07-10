import { useTwoMatrixOperations } from '.';
import { Matrix } from '../Matrix';
import { Result } from './Result';
import { useStyles } from './TwoMatrixOperationsStyles';

export const TwoMatrixOperations = () => {
  const classes = useStyles();
  const { firstMatrix, setFirstMatrix, secondMatrix, setSecondMatrix, error } =
    useTwoMatrixOperations();

  return (
    <div className={classes.container}>
      <Matrix matrix={firstMatrix} setMatrix={setFirstMatrix} />
      <Matrix matrix={secondMatrix} setMatrix={setSecondMatrix} error={error} />
      <Result />
    </div>
  );
};
