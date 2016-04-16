
import angular from 'angular';
import 'angular-ui-router';

import 'style.css!';
import 'modules/html_templates/html_templates.module';

import MainConfig from './main.config';
import MainCtrl from './main.controller';
import Home from 'modules/home/home.module';

const main = angular
  .module('Main', [
    'HTMLTemplates',
    Home.name,
    'ui.router'
  ])

  .config(MainConfig)

  .controller('MainCtrl', MainCtrl);

export default main;

angular.element(document).ready(function () {
  return angular.bootstrap(document, [main.name]);
});
