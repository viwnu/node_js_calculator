import { IOperation } from './interfaces';

export class Subtract implements IOperation {
  calculate(a: number, b: number): number {
    return a - b;
  }
}
