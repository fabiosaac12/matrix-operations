import { IconButton, Input } from '@material-ui/core';
import { FC, SetStateAction, Dispatch } from 'react';
import { Matrix as MatrixType } from '../TwoMatrixOperations/models/Matrix';
import { useStyles } from './MatrixStyles';
import {
  NavigateBefore,
  NavigateNext,
  ExpandLess,
  ExpandMore
} from '@material-ui/icons';

interface Props {
  matrix: MatrixType;
  setMatrix: Dispatch<SetStateAction<MatrixType>>;
  error?: string;
}

export const Matrix: FC<Props> = ({ matrix, setMatrix, error }) => {
  const classes = useStyles();

  const handleAddColumn = () => {
    setMatrix((matrix) => matrix.map((row) => [...row, '0']));
  };

  const handleRemoveColumn = () => {
    setMatrix((matrix) =>
      matrix.map((row) =>
        row.filter((_, index, { length }) => length - 1 !== index)
      )
    );
  };

  const handleAddRow = () => {
    setMatrix((matrix) => [...matrix, matrix[0].map(() => '0')]);
  };

  const handleRemoveRow = () => {
    setMatrix((matrix) =>
      matrix.filter((_, index, { length }) => length - 1 !== index)
    );
  };

  const handleChangeElementValue = (x: number, y: number, value: string) => {
    setMatrix((matrix) =>
      matrix.map((row, rowIndex) =>
        row.map((element, elementIndex) =>
          rowIndex === x && elementIndex === y ? value : element
        )
      )
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.topButtonsContainer}>
        <IconButton
          disabled={matrix[0].length < 3}
          onClick={handleRemoveColumn}
          className={classes.arrowButton}
        >
          <NavigateBefore />
        </IconButton>
        <IconButton
          disabled={matrix[0].length > 9}
          onClick={handleAddColumn}
          className={classes.arrowButton}
        >
          <NavigateNext />
        </IconButton>
      </div>
      <div style={{ display: 'flex' }}>
        <div className={classes.leftButtonsContainer}>
          <IconButton
            disabled={matrix.length < 3}
            onClick={handleRemoveRow}
            className={classes.arrowButton}
          >
            <ExpandLess />
          </IconButton>
          <IconButton
            disabled={matrix.length > 9}
            onClick={handleAddRow}
            className={classes.arrowButton}
          >
            <ExpandMore />
          </IconButton>
        </div>
        <div className={classes.matrix}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((rowIndex) => (
            <div key={`${rowIndex}Row`} className={classes.row}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((columnIndex) =>
                matrix[rowIndex] !== undefined &&
                matrix[rowIndex][columnIndex] !== undefined ? (
                  <div
                    key={`${rowIndex}${columnIndex}Element`}
                    className={classes.element}
                  >
                    <Input
                      className={classes.input}
                      disableUnderline={true}
                      inputProps={{ value: matrix[rowIndex][columnIndex] }}
                      onChange={({ target: { value } }) => {
                        if ((value.match(/-/g) || []).length > 1) return;
                        if (
                          (value.match(/\./g) || []).length > 1 ||
                          value.startsWith('.')
                        )
                          return;

                        const withPoint = value.includes('.');
                        const withMinus = value.includes('-');

                        if (withPoint && value.startsWith('.')) return;
                        if (
                          withMinus &&
                          !value.startsWith('-') &&
                          !(value.startsWith('0') && value[1] === '-')
                        )
                          return;

                        if (!withPoint && !withMinus && value.length > 2)
                          return;
                        if (withPoint && withMinus && value.length > 4) return;
                        if (+withPoint + +withMinus === 1 && value.length > 3)
                          return;

                        handleChangeElementValue(
                          rowIndex,
                          columnIndex,
                          value.startsWith('0') &&
                            !(value[1] === '.') &&
                            value.length > 1
                            ? value.substring(1)
                            : value || '0'
                        );
                      }}
                    />
                  </div>
                ) : (
                  <div
                    key={`${rowIndex}${columnIndex}Element`}
                    className={classes.noElement}
                  />
                )
              )}
            </div>
          ))}
        </div>
      </div>
      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
};
