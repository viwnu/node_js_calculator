export class Parser {
  parse(input: string): string[] {
    // Убираем пробелы из строки
    const sanitizedInput = input.replace(/\s+/g, '');

    // Разделяем по операторам и скобкам
    const tokens = sanitizedInput.match(/(\d+(\.\d+)?|\+|\-|\*|\/|\(|\))/g);

    if (!tokens) {
      throw new Error('Invalid expression');
    }

    return tokens;
  }
}
