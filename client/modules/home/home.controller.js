export default class HomeCtrl {

  constructor() {
    this.title = 'Testing home.controller.js';

    this.operators = [
      '+',
      '-',
      '*',
      '/'
    ];

    this.operator = this.operators[0];
  }

  calculate() {
    this.result = this.doCalculation(this.input1, this.input2, this.operator);
  }

  doCalculation(val1, val2, operator) {
    let result = '';

    if (operator === '+') {
      result = this.add(val1, val2);
    } else if (operator === '-') {
      result = this.subtract(val1, val2);
    } else if (operator === '*') {
      result = this.multiply(val1, val2);
    } else if (operator === '/') {
      result = this.divide(val1, val2);
    }

    return result;
  }

  add(val1, val2) {
    return val1 + val2;
  }

  divide(val1, val2) {
    let result = '';

    if(val2 !== 0) {
      result = val1 / val2;
    } else {
      result = 'Can\'t divide by zero.';
    }

    return result;
  }

  multiply(val1, val2) {
    return val1 * val2;
  }

  subtract(val1, val2) {
    return val1 - val2;
  }
}
