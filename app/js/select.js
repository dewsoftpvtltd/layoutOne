var app = angular.module('selectApp', ['ngMaterial']);
app.controller('AreaCtrl', function($scope,$mdSidenav){
  $scope.opts = [
  'New York', 'California','Toronto'];
  $scope.areas = 'Lahore';
  $scope.users = [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Steve' }
  ];
$scope.onSwipDown = function(){
  console.log("hello");
}

  $scope.myDiscreteValue = '';
  $scope.selectedUser = { id: 1, name: 'Bob' };
   $scope.openLeftMenu = function() {
    $mdSidenav('right').toggle();
  };
});
