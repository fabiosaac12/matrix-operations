/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';
import { Matrix } from '../models/Matrix';
import {
  TwoMatrixOperationsContext,
  TwoMatrixOperationsContextProps
} from './TwoMatrixOperationsContext';
import {
  addTwoMatrices,
  divideTwoMatrices,
  multiplyTwoMatrices,
  substractTwoMatrices
} from '../../../helpers/matrixOperations';
import {
  intMatrixToString,
  stringMatrixToInt
} from '../../../helpers/matrixConversions';

export const TwoMatrixOperationsProvider: FC = ({ children }) => {
  const [firstMatrix, setFirstMatrix] = useState<Matrix>([
    ['0', '0'],
    ['0', '0']
  ]);
  const [secondMatrix, setSecondMatrix] = useState<Matrix>([
    ['0', '0'],
    ['0', '0']
  ]);
  const [result, setResult] = useState<Matrix>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    error && setError(undefined);
  }, [firstMatrix, secondMatrix, result]);

  const calculateFunctionGenerator =
    (fn: (firstMatrix: number[][], secondMatrix: number[][]) => number[][]) =>
    () => {
      try {
        const result = fn(
          stringMatrixToInt(firstMatrix),
          stringMatrixToInt(secondMatrix)
        );

        setResult(intMatrixToString(result));
      } catch (error) {
        setError(error);
      }
    };

  const contextValue: TwoMatrixOperationsContextProps = {
    firstMatrix,
    secondMatrix,
    setFirstMatrix,
    setSecondMatrix,
    result,
    calculateDivision: calculateFunctionGenerator(divideTwoMatrices),
    calculateMultiplication: calculateFunctionGenerator(multiplyTwoMatrices),
    calculateAdd: calculateFunctionGenerator(addTwoMatrices),
    calculateSubstract: calculateFunctionGenerator(substractTwoMatrices),
    clearResult: () => setResult(undefined),
    error
  };

  return (
    <TwoMatrixOperationsContext.Provider value={contextValue}>
      {children}
    </TwoMatrixOperationsContext.Provider>
  );
};
