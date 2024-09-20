import { Subtract } from '..';

describe('Subtract operation', () => {
  const subtract = new Subtract();

  test('should return difference of two numbers', () => {
    expect(subtract.calculate(5, 3)).toBe(2);
    expect(subtract.calculate(1, 4)).toBe(-3);
  });
});
