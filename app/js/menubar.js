var app = angular.module('menuBarApp', ['ngMaterial','ngMessages']);

app.controller('MenuCtrl', function($scope){

$scope.colorOptions = [{label:'red', value: 'red'},
{label:'blue', value: 'blue'},
{label:'orange', value: 'orange'}]
});
