import { Calculator } from '../';

describe('Calculator', () => {
  const calculator = new Calculator();

  test('should add two numbers', () => {
    expect(calculator.evaluate('1+2')).toBe(3);
  });

  test('should subtract numbers', () => {
    expect(calculator.evaluate('5-2')).toBe(3);
  });

  test('should multiply numbers', () => {
    expect(calculator.evaluate('3*4')).toBe(12);
  });

  test('should divide numbers', () => {
    expect(calculator.evaluate('6/2')).toBe(3);
  });

  test('should handle complex expressions with multiple operations', () => {
    expect(calculator.evaluate('1+2*3')).toBe(7); // operator precedence
  });

  test('should handle parentheses', () => {
    expect(calculator.evaluate('(1+2)*3')).toBe(9);
  });

  test('should handle decimal numbers', () => {
    expect(calculator.evaluate('3.5 + 2.1')).toBeCloseTo(5.6);
  });

  test('should throw error on invalid input', () => {
    expect(() => calculator.evaluate('5 / 0')).toThrow('Division by zero');
  });
});
