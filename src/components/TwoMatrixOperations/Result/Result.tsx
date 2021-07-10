import { ButtonBase, IconButton } from '@material-ui/core';
import { useTwoMatrixOperations } from '../context/useTwoMatrixOperations';
import { useStyles } from './ResultStyles';
import ReplayIcon from '@material-ui/icons/Replay';

export const Result = () => {
  const classes = useStyles();
  const {
    calculateAdd,
    calculateSubstract,
    calculateDivision,
    calculateMultiplication,
    result,
    clearResult
  } = useTwoMatrixOperations();

  return (
    <div className={classes.container}>
      {result ? (
        <>
          <div className={classes.matrix}>
            {result.map((row, rowIndex) => (
              <div key={`${rowIndex}Row`} className={classes.row}>
                {row.map((element, columnIndex) => (
                  <div
                    key={`${rowIndex}${columnIndex}Element`}
                    className={classes.element}
                  >
                    <span>{element}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <IconButton onClick={clearResult} className={classes.backButton}>
            <ReplayIcon />
          </IconButton>
        </>
      ) : (
        <>
          <ButtonBase onClick={calculateAdd} className={classes.button}>
            Add
          </ButtonBase>
          <ButtonBase onClick={calculateSubstract} className={classes.button}>
            Substract
          </ButtonBase>
          <ButtonBase
            onClick={calculateMultiplication}
            className={classes.button}
          >
            Multiply
          </ButtonBase>
          <ButtonBase onClick={calculateDivision} className={classes.button}>
            Divide
          </ButtonBase>
        </>
      )}
    </div>
  );
};
