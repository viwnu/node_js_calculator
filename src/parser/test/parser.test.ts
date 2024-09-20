import { Parser } from '../';

describe('Parser', () => {
  const parser = new Parser();

  test('should parse numbers and operators', () => {
    const result = parser.parse('1+2-3');
    expect(result).toEqual(['1', '+', '2', '-', '3']);
  });

  test('should handle spaces in input', () => {
    const result = parser.parse('  4 *  5 / 2 ');
    console.log(result);
    expect(result).toEqual(['4', '*', '5', '/', '2']);
  });

  test('should handle decimal numbers', () => {
    const result = parser.parse('3.5 + 2.1');
    expect(result).toEqual(['3.5', '+', '2.1']);
  });

  test('should handle parentheses', () => {
    const result = parser.parse('(1+2)*3');
    expect(result).toEqual(['(', '1', '+', '2', ')', '*', '3']);
  });
});
