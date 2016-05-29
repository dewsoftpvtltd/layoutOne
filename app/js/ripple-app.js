var app = angular.module('rippleApp',['ngMaterial']);
app.factory('$myElementInkRipple', function($mdInkRipple) {
  return {
    attach: function (scope, element, options) {
      return $mdInkRipple.attach(scope, element, angular.extend({
        center: false,
        dimBackground: false
      }, options));
    }
  };
});
app.controller('myController', function ($scope, $element, $myElementInkRipple,$mdMedia) {
  $scope.onClick = function (ev) {
    $myElementInkRipple.attach($scope, angular.element(ev.target), { center: true });
  };

   $scope.$watch(function() { return $mdMedia('lg'); }, function(big) {
    $scope.bigScreen = big;
  });

  $scope.screenIsSmall = $mdMedia('sm');
  $scope.gtsm = $mdMedia('gt-sm');
  $scope.xs = $mdMedia('xs');
});
