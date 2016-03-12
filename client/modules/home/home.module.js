
import angular from 'angular';
import 'angular-ui-router';

import 'modules/html_templates/html_templates.module';

import HomeConfig from './home.config';
import HomeCtrl from './home.controller';

export default angular
  .module('Home', [
    'HTMLTemplates',
    'ui.router'
  ])

  .config(HomeConfig)

  .controller('HomeCtrl', HomeCtrl);

