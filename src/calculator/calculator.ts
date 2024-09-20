import { Parser } from '../parser';
import { Add, Subtract, Multiply, Divide } from '../operations';

export class Calculator {
  private parser: Parser;

  constructor() {
    this.parser = new Parser();
  }

  public evaluate(expression: string): number {
    const tokens = this.parser.parse(expression);
    return this.calculate(tokens);
  }

  private calculate(tokens: string[]): number {
    const stack: any[] = [];

    let currentOp = null;
    for (const token of tokens) {
      if (!isNaN(Number(token))) {
        if (currentOp) {
          const b = Number(token);
          const a = stack.pop();
          stack.push(currentOp.calculate(a, b));
          currentOp = null;
        } else {
          stack.push(Number(token));
        }
      } else {
        switch (token) {
          case '+':
            currentOp = new Add();
            break;
          case '-':
            currentOp = new Subtract();
            break;
          case '*':
            currentOp = new Multiply();
            break;
          case '/':
            currentOp = new Divide();
            break;
        }
      }
    }

    return stack[0];
  }
}
