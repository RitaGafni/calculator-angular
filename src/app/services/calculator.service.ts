import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  compute(currentOperandText: string, previousOperandText: string): string {
    console.log(currentOperandText, ' ', previousOperandText);

    let computation;
    const prev = parseFloat(previousOperandText.split(' ')[0]);
    const operation = previousOperandText.split(' ')[1];
    const current = parseFloat(currentOperandText);
    if (isNaN(prev) || isNaN(current)) return '';
    switch (operation) {
      case '/':
        computation = prev / current;
        break;
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;

      default:
        return '';
    }

    return parseFloat(computation.toPrecision(6)).toString();
  }
}
