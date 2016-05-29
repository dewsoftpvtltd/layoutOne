var app = angular.module('gridApp', ['ngMaterial']);

app.controller('highLightCtrl', highlight);

function highlight($scope){
$scope.seartTerm = 'wow';

$scope.results = ['afia', 'sabiha', 'dew'];
}
