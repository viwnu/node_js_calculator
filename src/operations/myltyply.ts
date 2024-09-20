import { IOperation } from './interfaces';

export class Multiply implements IOperation {
  calculate(a: number, b: number): number {
    return a * b;
  }
}
