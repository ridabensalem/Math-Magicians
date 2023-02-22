import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);

  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '%') {
    return one.mod(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }

  if (operation === 'x') {
    return one.times(two).toString();
  }

  if (operation === '/') {
    if (two === '0') {
      return '0';
    }
    return one.div(two).toString();
  }

  throw Error(`Unknown operation '${operation}'`);
}
