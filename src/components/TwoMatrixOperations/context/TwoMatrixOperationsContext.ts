import { createContext, Dispatch, SetStateAction } from 'react';
import { Matrix } from '../models/Matrix';

export interface TwoMatrixOperationsContextProps {
  firstMatrix: Matrix;
  secondMatrix: Matrix;
  setSecondMatrix: Dispatch<SetStateAction<Matrix>>;
  setFirstMatrix: Dispatch<SetStateAction<Matrix>>;
  result?: Matrix;
  calculateDivision: () => void;
  calculateMultiplication: () => void;
  calculateAdd: () => void;
  calculateSubstract: () => void;
  clearResult: () => void;
  error?: string;
}

export const TwoMatrixOperationsContext =
  createContext<TwoMatrixOperationsContextProps>(
    {} as TwoMatrixOperationsContextProps
  );
