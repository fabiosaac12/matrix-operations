/* eslint-disable no-throw-literal */
type Matrix = number[][];

export const getCofactorOfOrder2Matrix = (
  matrix: Matrix,
  row: number,
  column: number
) => {
  for (let i = 0; i < matrix.length; i++) {
    if (i !== row) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (j !== column) {
          return matrix[i][j];
        }
      }
    }
  }
};

export const getCofactor = (matrix: Matrix, row: number, column: number) => {
  const cofactor: Matrix = [];

  let x = -1;

  for (let i = 0; i < matrix.length; i++) {
    if (i !== row) {
      x++;
      cofactor.push([]);

      for (let j = 0; j < matrix[i].length; j++) {
        if (j !== column) {
          cofactor[x].push(matrix[i][j]);
        }
      }
    }
  }

  return cofactor;
};

export const calculateDeterminant = (matrix: Matrix, multiplier = 1) => {
  if (matrix.length !== matrix[0].length) throw 'It must be square';

  let determinant = 0;

  if (matrix.length > 2) {
    for (let j = 0; j < matrix[0].length; j++) {
      const cofactor = getCofactor(matrix, 0, j);

      determinant += calculateDeterminant(
        cofactor,
        j % 2 === 0 ? +matrix[0][j] : -matrix[0][j]
      );
    }
  } else {
    determinant += matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  return +(multiplier * determinant).toFixed(2);
};

export const getAttachmentMatrix = (matrix: Matrix) => {
  if (matrix.length !== matrix[0].length) throw 'It must be square';

  const attachmentMatrix: Matrix = [];

  for (let i = 0; i < matrix.length; i++) {
    attachmentMatrix.push([]);

    for (let j = 0; j < matrix[i].length; j++) {
      attachmentMatrix[i].push(
        matrix.length === 2
          ? getCofactorOfOrder2Matrix(matrix, i, j)! *
              ((i + j) % 2 === 0 ? 1 : -1)
          : calculateDeterminant(
              getCofactor(matrix, i, j),
              (i + j) % 2 === 0 ? 1 : -1
            )
      );
    }
  }

  return attachmentMatrix;
};

export const getTransposedMatrix = (matrix: Matrix) => {
  const transposedMatrix: Matrix = [];

  matrix[0].forEach(() => transposedMatrix.push([]));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      transposedMatrix[j].push(matrix[i][j]);
    }
  }

  return transposedMatrix;
};

export const getInverseMatrix = (matrix: Matrix) => {
  if (matrix.length !== matrix[0].length) throw 'It must be square';
  if (calculateDeterminant(matrix) === 0) throw 'The determinant must not be 0';

  const transposedMatrix = getTransposedMatrix(matrix);
  const attachmentMatrix = getAttachmentMatrix(transposedMatrix);
  const determinant = calculateDeterminant(matrix);

  const inverseMatrix: Matrix = [];

  for (let i = 0; i < attachmentMatrix.length; i++) {
    inverseMatrix.push([]);

    for (let j = 0; j < attachmentMatrix[i].length; j++) {
      inverseMatrix[i].push(attachmentMatrix[i][j] / determinant);
    }
  }

  return inverseMatrix;
};

export const multiplyTwoMatrices = (
  firstMatrix: Matrix,
  secondMatrix: Matrix
) => {
  if (firstMatrix[0].length !== secondMatrix.length)
    throw 'It must have the same number of rows as the first matrix has of columns.';

  const transposedSecondMatrix = getTransposedMatrix(secondMatrix);

  const productMatrix: Matrix = [];

  for (let i = 0; i < firstMatrix.length; i++) {
    productMatrix.push([]);
    for (let j = 0; j < transposedSecondMatrix.length; j++) {
      let result = 0;

      for (let k = 0; k < transposedSecondMatrix[0].length; k++) {
        result += firstMatrix[i][k] * transposedSecondMatrix[j][k];
      }

      productMatrix[i].push(result);
    }
  }

  return productMatrix;
};

export const divideTwoMatrices = (
  firstMatrix: Matrix,
  secondMatrix: Matrix
) => {
  const inverseSecondMatrix = getInverseMatrix(secondMatrix);
  const result = multiplyTwoMatrices(firstMatrix, inverseSecondMatrix);

  return result;
};

export const addTwoMatrices = (firstMatrix: Matrix, secondMatrix: Matrix) => {
  if (
    firstMatrix.length !== secondMatrix.length ||
    firstMatrix[0].length !== secondMatrix[0].length
  )
    throw 'It must be of the same order as the first matrix';

  const result: Matrix = [];

  for (let i = 0; i < firstMatrix.length; i++) {
    result.push([]);

    for (let j = 0; j < firstMatrix.length; j++) {
      result[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
    }
  }

  return result;
};

export const substractTwoMatrices = (
  firstMatrix: Matrix,
  secondMatrix: Matrix
) => {
  if (
    firstMatrix.length !== secondMatrix.length ||
    firstMatrix[0].length !== secondMatrix[0].length
  )
    throw 'It must be of the same order as the first matrix';

  const result: Matrix = [];

  for (let i = 0; i < firstMatrix.length; i++) {
    result.push([]);

    for (let j = 0; j < firstMatrix.length; j++) {
      result[i][j] = firstMatrix[i][j] - secondMatrix[i][j];
    }
  }

  return result;
};
