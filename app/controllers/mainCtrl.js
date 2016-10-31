(function() {
  'use strict';

  angular
    .module('bookish-spoon')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = [
    '$scope'
  ];

  function MainCtrl($scope) {

    activate();

    function activate() {
      console.log('MainCtrl');
    }
  }
})();
