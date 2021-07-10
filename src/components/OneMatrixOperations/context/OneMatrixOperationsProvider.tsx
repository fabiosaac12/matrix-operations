/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';
import { Matrix } from '../models/Matrix';
import {
  OneMatrixOperationsContext,
  OneMatrixOperationsContextProps
} from './OneMatrixOperationsContext';
import {
  calculateDeterminant,
  getAttachmentMatrix,
  getInverseMatrix,
  getTransposedMatrix
} from '../../../helpers/matrixOperations';
import {
  intMatrixToString,
  stringMatrixToInt
} from '../../../helpers/matrixConversions';

export const OneMatrixOperationsProvider: FC = ({ children }) => {
  const [matrix, setMatrix] = useState<Matrix>([
    ['0', '0'],
    ['0', '0']
  ]);
  const [result, setResult] = useState<Matrix | number>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    error && setError(undefined);
  }, [matrix, result]);

  const calculateFunctionGenerator =
    (fn: (matrix: number[][]) => number[][] | number) => () => {
      try {
        const result = fn(stringMatrixToInt(matrix));

        setResult(
          typeof result === 'number' ? result : intMatrixToString(result)
        );
      } catch (error) {
        setError(error);
      }
    };

  const contextValue: OneMatrixOperationsContextProps = {
    matrix,
    setMatrix,
    result,
    calculateDeterminant: calculateFunctionGenerator(calculateDeterminant),
    calculateAttachmentMatrix: calculateFunctionGenerator(getAttachmentMatrix),
    calculateTransposedMatrix: calculateFunctionGenerator(getTransposedMatrix),
    calculateInverseMatrix: calculateFunctionGenerator(getInverseMatrix),
    clearResult: () => setResult(undefined),
    error
  };

  return (
    <OneMatrixOperationsContext.Provider value={contextValue}>
      {children}
    </OneMatrixOperationsContext.Provider>
  );
};
