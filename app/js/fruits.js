angular.module('home', ['ngAria', 'ngAnimate', 'ngMaterial']);

angular.module('home').config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('grey');
});

angular.module('home').controller('MainCtrl', function ($scope) {
    $scope.fruits = [
        'apple',
        'banana',
        'orange',
        'mango',
        'kiwi',
        'pineapple',
        'lemon',
        'blueberry',
        'strawberry'];

    $scope.checked = [];

    $scope.toggleChecked = function (item) {
        var index = $scope.checked.indexOf(item);
        if (index == -1) {
            $scope.checked.push(item);
        } else {
            $scope.checked.splice(index, 1);
        }
    };

    $scope.removeChecked = function () {
        $scope.checked.map(function (item) {
            var index = $scope.fruits.indexOf(item);
            $scope.fruits.splice(index, 1);
        });
        $scope.checked = [];
    };

});
