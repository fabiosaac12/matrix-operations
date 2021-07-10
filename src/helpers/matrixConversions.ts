export const intMatrixToString = (matrix: number[][]) =>
  matrix.map((row) =>
    row.map((element) => parseFloat(element.toFixed(1)).toString())
  );

export const stringMatrixToInt = (matrix: string[][]) =>
  matrix.map((row) => row.map((element) => parseFloat(element)));
