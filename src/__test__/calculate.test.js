import calculate from '../logic/calculate';

describe('Tests calculate function', () => {
  test('Test key AC', () => {
    const result = calculate({ total: '1', next: '0', operation: '' }, 'AC');
    expect(result).toStrictEqual({ total: null, next: null, operation: null });
  });

  test('Test key +/-', () => {
    const result = calculate({ total: '-1', next: null, operation: null }, '+/-');
    expect(result).toStrictEqual({ total: '1', next: null, operation: null });
  });

  test('Test key %', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '%');
    expect(result).toStrictEqual({ total: '5', next: null, operation: '%' });
  });

  test('Test key /', () => {
    const result = calculate({ total: '4', next: '2', operation: '/' }, '=');
    expect(result).toStrictEqual({ total: '2', next: null, operation: null });
  });

  test('Test key x', () => {
    const result = calculate({ total: '10', next: '2', operation: 'x' }, '=');
    expect(result).toStrictEqual({ total: '20', next: null, operation: null });
  });

  test('Test key -', () => {
    const result = calculate({ total: '2', next: '1', operation: '-' }, '=');
    expect(result).toStrictEqual({ total: '1', next: null, operation: null });
  });

  test('Test key +', () => {
    const result = calculate({ total: '3', next: '2', operation: '-' }, 'x');
    expect(result).toStrictEqual({ total: '1', next: null, operation: 'x' });
  });

  test('Test key .', () => {
    let result = calculate({ total: null, next: null, operation: null }, '3');
    result = calculate(result, '.');
    result = calculate(result, '02');
    expect(result).toStrictEqual({ total: null, next: '3.02' });
  });
});
