import { Multiply } from '..';

describe('Multiply operation', () => {
  const multiply = new Multiply();

  test('should return product of two numbers', () => {
    expect(multiply.calculate(2, 3)).toBe(6);
    expect(multiply.calculate(-2, 5)).toBe(-10);
  });
});
