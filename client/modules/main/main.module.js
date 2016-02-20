
import angular from 'angular';
import 'angular-ui-router';

import 'style.css!';
import '/modules/html_templates/html_templates.module';

import Calculator from '/modules/calculator/calculator.module';
import Home from '/modules/home/home.module';
import MainConfig from './main.config';
import MainCtrl from './main.controller';

const main = angular
  .module('Main', [
    Calculator.name,
    Home.name,
    'HTMLTemplates',
    'ui.router'
  ])

  .config(MainConfig)

  .controller('MainCtrl', MainCtrl);

export default main;

angular.element(document).ready(function () {
  return angular.bootstrap(document, [main.name]);
});
