export default class CalculatorCtrl {

  constructor() {
    this.title = 'Calculator';

    this.operators = [
      '+',
      '-',
      '*',
      '/'
    ];

    this.operator = this.operators[0];
  }

  calculate() {
    if (this.operator === '+') {
      this.result = this.add(this.input1, this.input2);
    } else if (this.operator === '-') {
      this.result = this.subtract(this.input1, this.input2);
    } else if (this.operator === '*') {
      this.result = this.multiply(this.input1, this.input2);
    } else if (this.operator === '/') {
      this.result = this.divide(this.input1, this.input2);
    }
  }

  add(x, y) {
    return x + y;
  }

  divide(x, y) {
    let result = '';

    if (y === 0) {
      result = 'Can\'t divide by 0';
    } else {
      result = x / y;
    }

    return result;
  }

  multiply(x, y) {
    return x * y;
  }

  subtract(x, y) {
    return x - y;
  }
}
