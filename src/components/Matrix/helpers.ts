export const validateValue = (value: string): boolean => {
  const validCharacters = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '.',
    '-'
  ];

  if (value.split('').some((character) => !validCharacters.includes(character)))
    return false;

  if ((value.match(/-/g) || []).length > 1) return false;

  if ((value.match(/\./g) || []).length > 1 || value.startsWith('.'))
    return false;

  const withPoint = value.includes('.');
  const withMinus = value.includes('-');

  if (withPoint && (value.startsWith('.') || value.includes('-.')))
    return false;

  if (
    withMinus &&
    !value.startsWith('-') &&
    !(value.startsWith('0') && value[1] === '-')
  )
    return false;

  if (!withPoint && !withMinus && value.length > 2) return false;

  if (withPoint && withMinus && value.length > 4) return false;

  if (+withPoint + +withMinus === 1 && value.length > 3) return false;

  return true;
};
