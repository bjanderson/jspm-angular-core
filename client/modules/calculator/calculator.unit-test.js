import CalculatorCtrl from './calculator.controller';

describe('Calculator Controller Test', function() {
  let ctrl;

  beforeEach(function () {
    ctrl = new CalculatorCtrl();
  });

  it('2 + 2 = 4', function () {
    expect(ctrl.add(2,2)).toEqual(4);
  });

  it('3 + 3 = 6', function () {
    expect(ctrl.add(2,2)).toEqual(4);
  });

});
