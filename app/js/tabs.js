var app = angular.module('tabApp', ['ngMaterial']);

app.controller('TabCtrl',function($scope){
  $scope.tabs = [
  {title: "Hello1", content:"World"},{title: "Hello2", content:"World"},{title: "Hello3", content:"World"},{title: "Hello4", content:"World"}
  ];
  $scope.items = ["Saab", "Volvo", "BMW"];;
  $scope.removeTab = function(tab){
    var index = $scope.tabs.indexOf(tab);
    $scope.tabs.splice(index,1);
    return $scope.tabs;
  };
});
