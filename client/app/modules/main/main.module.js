
import angular from 'angular';
import 'angular-ui-router';

import 'style.css!';
import '/app/modules/html_templates/html_templates.module';

import Home from '/app/modules/home/home.module';
import MainConfig from './main.config';
import MainCtrl from './main.controller';

const main = angular
  .module('Main', [
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
