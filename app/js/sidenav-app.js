var app = angular.module('sideNavApp', ['ngMaterial']);
app.controller('MyController', function($scope, $mdSidenav,$mdToast) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
  $scope.openRightMenu = function() {
    $mdSidenav('right').toggle();

  };
   //
 $scope.openToast = function($event) {
    //$mdToast.show($mdToast.simple().textContent('Hello You Are Great!'));
    $mdToast.showSimple('Hello');
  };
  $scope = {};
});
