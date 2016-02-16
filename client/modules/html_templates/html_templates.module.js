;(function(){

'use strict';

angular.module('HTMLTemplates', []).run(['$templateCache', function($templateCache) {

  $templateCache.put('modules/home/home.tpl.html', '<h1>Home</h1> {{ home.title }}');

}]);

})();