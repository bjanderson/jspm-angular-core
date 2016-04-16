export default function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        '': {
          controller: 'HomeCtrl',
          controllerAs: 'home',
          templateProvider: function ($templateCache) {
            return $templateCache.get('modules/home/home.tpl.html');
          }
        }
      },

      data: {
        pageTitle: 'Home'
      }
    });
}
