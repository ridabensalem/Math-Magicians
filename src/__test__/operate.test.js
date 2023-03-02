import operate from '../logic/operate';

describe('Tests operations ', () => {
  test('Test modulus 5 % 2 to get 1', () => {
    const product = operate(5, 2, '%');
    expect(product).toBe('1');
  });

  test('Test divide 6 / 3 to get 2', () => {
    const product = operate(6, 3, '/');
    expect(product).toBe('2');
  });

  test('Test multiply 2 * 5 to get 10', () => {
    const product = operate(2, 5, 'x');
    expect(product).toBe('10');
  });

  test('Test add 1 + 4 to get 5', () => {
    const product = operate(1, 4, '+');
    expect(product).toBe('5');
  });

  test('Test subtract 5 - 4 to get 1', () => {
    const product = operate(5, 4, '-');
    expect(product).toBe('1');
  });
});