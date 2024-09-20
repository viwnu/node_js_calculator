import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { Calculator } from './calculator';

const calculator = new Calculator();

async function queryRun() {
  const rl = readline.createInterface({ input, output });
  const expersion = await rl.question('Введите выражение("exit" для завершения): ');
  if (expersion === 'exit') {
    rl.close();
    return;
  }
  try {
    const result = calculator.evaluate(expersion);
    console.log(`Результат: ${result}`);
    rl.close();
    queryRun();
  } catch (error) {
    console.error('Ошибка вычисления:', error.message);
  }
}

queryRun();
