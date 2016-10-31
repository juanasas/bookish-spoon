(function() {
  'use strict';

  angular
    .module('bookish-spoon')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = [
    '$scope'
  ];

  function LoginCtrl($scope) {

    activate();

    function activate() {
      console.log('LoginCtrl');
    }
  }
})();
