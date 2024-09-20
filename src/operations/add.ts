import { IOperation } from './interfaces';

export class Add implements IOperation {
  calculate(a: number, b: number): number {
    return a + b;
  }
}
