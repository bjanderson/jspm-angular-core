export default function CalculatorConfig($stateProvider) {
  $stateProvider
    .state('calculator', {
      url: '/calculator',
      views: {
        '': {
          controller: 'CalculatorCtrl',
          controllerAs: 'calculator',
          templateProvider: function ($templateCache) {
            return $templateCache.get('app/modules/calculator/calculator.tpl.html');
          }
        }
      },

      data: {
        pageTitle: 'Calculator'
      }
    });
}
