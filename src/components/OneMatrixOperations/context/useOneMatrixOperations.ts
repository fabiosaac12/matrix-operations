import { useContext } from 'react';
import { OneMatrixOperationsContext } from './OneMatrixOperationsContext';

export const useOneMatrixOperations = () =>
  useContext(OneMatrixOperationsContext);
