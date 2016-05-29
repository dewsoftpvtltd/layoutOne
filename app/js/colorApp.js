var app = angular.module('colorApp', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    //.dark()
    .primaryPalette('pink')
    .accentPalette('purple')
    .warnPalette('deep-purple')
    .backgroundPalette('pink')
    .dark();
    $mdThemingProvider.alwaysWatchTheme(true);

    $mdThemingProvider.theme('altTheme')
    .primaryPalette('green') // specify primary color, all
    .accentPalette('red')
    .warnPalette('orange')
    .backgroundPalette('green')
                       // other color intentions will be inherited
});

app.controller('genderCtrl',['$scope',function($scope){
  $scope.theme = 'default';
  $scope.setTheme = function(){
    if($scope.theme == 'altTheme'){
      return $scope.theme = 'default';
    }
    return $scope.theme = 'altTheme';
  }


}]);

