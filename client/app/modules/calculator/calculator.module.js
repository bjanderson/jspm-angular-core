
import angular from 'angular';
import 'angular-ui-router';

import '/app/modules/html_templates/html_templates.module';

import CalculatorConfig from './calculator.config';
import CalculatorCtrl from './calculator.controller';

export default angular
  .module('Calculator', [
    'HTMLTemplates',
    'ui.router'
  ])

  .config(CalculatorConfig)

  .controller('CalculatorCtrl', CalculatorCtrl);

