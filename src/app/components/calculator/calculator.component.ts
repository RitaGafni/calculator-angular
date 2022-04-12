import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  constructor(private calculatorService: CalculatorService) {}
  ngOnInit(): void {}

  currentOperandText: string = '';
  previousOperandText: string = '';
  operation: string = '';
  number = 12;
  afterEqual = false;

  handleEqual() {
    if (this.previousOperandText == '') return;
    this.currentOperandText = this.calculatorService.compute(
      this.currentOperandText,
      this.previousOperandText
    );
    this.previousOperandText = '';
    this.operation = '';
    this.afterEqual = true;
  }
  handleDelete() {
    this.currentOperandText = this.currentOperandText.slice(0, -1);
  }

  handleAllClear() {
    this.allClear();
  }

  handleOperationClick(operation: string) {
    if (this.currentOperandText == '' && this.operation == '') return;
    this.afterEqual = false;
    this.operation = operation;
    if (this.previousOperandText !== '') {
      this.previousOperandText =
        this.previousOperandText.split(' ')[0] + ' ' + operation;
      return;
    }
    this.previousOperandText = this.currentOperandText + ' ' + operation;
    this.currentOperandText = '';
  }

  handleKeyClick(key: any) {
    if (key == '0' && this.currentOperandText == '0') return;
    if (this.currentOperandText == '0') this.currentOperandText = '';
    if (this.afterEqual) {
      this.allClear();
    }
    if (this.currentOperandText.includes('.') && key == '.') return;
    if (key == '.' && this.currentOperandText == '')
      this.currentOperandText = '0';
    this.currentOperandText = this.currentOperandText + key;
  }

  allClear() {
    this.currentOperandText = '';
    this.previousOperandText = '';
    this.operation = '';
    this.afterEqual = false;
  }
}
