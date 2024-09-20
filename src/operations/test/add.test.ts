import { Add } from '..';

describe('Add operation', () => {
  const add = new Add();

  test('should return sum of two numbers', () => {
    expect(add.calculate(1, 2)).toBe(3);
    expect(add.calculate(-1, 5)).toBe(4);
  });
});
