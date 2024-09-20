import { Divide } from '..';

describe('Divide operation', () => {
  const divide = new Divide();

  test('should return quotient of two numbers', () => {
    expect(divide.calculate(6, 3)).toBe(2);
    expect(divide.calculate(10, 2)).toBe(5);
  });

  test('should throw error on division by zero', () => {
    expect(() => divide.calculate(5, 0)).toThrow('Division by zero');
  });
});
