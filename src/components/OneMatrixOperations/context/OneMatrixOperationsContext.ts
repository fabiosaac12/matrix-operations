import { createContext, Dispatch, SetStateAction } from 'react';
import { Matrix } from '../models/Matrix';

export interface OneMatrixOperationsContextProps {
  matrix: Matrix;
  setMatrix: Dispatch<SetStateAction<Matrix>>;
  result?: Matrix | number;
  clearResult: () => void;
  calculateDeterminant: () => void;
  calculateAttachmentMatrix: () => void;
  calculateTransposedMatrix: () => void;
  calculateInverseMatrix: () => void;
  error?: string;
}

export const OneMatrixOperationsContext =
  createContext<OneMatrixOperationsContextProps>(
    {} as OneMatrixOperationsContextProps
  );
