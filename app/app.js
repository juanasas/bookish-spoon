(function() {
  'use strict';

  angular
    .module('bookish-spoon', [
      'ngRoute'
    ])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'partials/main.html'
      })
      .when('/login', {
        controller: 'LoginCtrl',
        templateUrl: 'partials/login.html'
      })
      .otherwise({
        redirectTo: '/'
      });
    }]);
})();
