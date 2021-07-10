import { ButtonBase, IconButton } from '@material-ui/core';
import { useOneMatrixOperations } from '../context/useOneMatrixOperations';
import { useStyles } from './ResultStyles';
import ReplayIcon from '@material-ui/icons/Replay';

export const Result = () => {
  const classes = useStyles();
  const {
    result,
    clearResult,
    calculateAttachmentMatrix,
    calculateInverseMatrix,
    calculateDeterminant,
    calculateTransposedMatrix
  } = useOneMatrixOperations();

  return (
    <div className={classes.container}>
      {result !== undefined ? (
        <>
          {typeof result === 'number' ? (
            <div className={classes.numberResult}>{result}</div>
          ) : (
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
          )}
          <IconButton onClick={clearResult} className={classes.backButton}>
            <ReplayIcon />
          </IconButton>
        </>
      ) : (
        <>
          <ButtonBase onClick={calculateDeterminant} className={classes.button}>
            Calculate Determinant
          </ButtonBase>
          <ButtonBase
            onClick={calculateAttachmentMatrix}
            className={classes.button}
          >
            Get Attachment Matrix
          </ButtonBase>
          <ButtonBase
            onClick={calculateInverseMatrix}
            className={classes.button}
          >
            Get Inverse Matrix
          </ButtonBase>
          <ButtonBase
            onClick={calculateTransposedMatrix}
            className={classes.button}
          >
            Get Transposed Matrix
          </ButtonBase>
        </>
      )}
    </div>
  );
};
