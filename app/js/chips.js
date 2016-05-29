var app =  angular.module('chipsApp',['ngMaterial']);
app.controller('chipCtrl', chipCtrl);

function chipCtrl($scope){
var myItems = ['Potatoes', 'Apples', 'Bananas'];
$scope.$chip = "aloo";
}
