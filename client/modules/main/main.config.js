export default function MainConfig($urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/home');
}
