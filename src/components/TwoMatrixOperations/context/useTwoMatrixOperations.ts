import { useContext } from 'react';
import { TwoMatrixOperationsContext } from './TwoMatrixOperationsContext';

export const useTwoMatrixOperations = () =>
  useContext(TwoMatrixOperationsContext);
