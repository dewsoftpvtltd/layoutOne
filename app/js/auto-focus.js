var app = angular.module('AutoFocusApp', ['ngMaterial']);
app.controller('myCtrl', myCtrl);

function myCtrl($scope, $mdDialog){
  $scope.showDialog = showDialog;
    //$scope.showGreeting = showGreeting;
    $scope.items = [1, 2, 3];
    function showDialog($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         template:
           '<md-dialog aria-label="List dialog">' +
           '<md-input-container>'+
            '<label for="testInput">Label</label>'+
           '<input id="testInput" type="text" md-autofocus>'+
           '</md-input-container>'+
            '<md-dialog-actions>' +
           '    <md-button ng-click="closeDialog()" class="md-primary">' +
           '      Close Dialog' +
           '    </md-button>' +
           '  </md-dialog-actions>' +
           '</md-dialog>',
         locals: {
           items: $scope.items
         },
         controller: DialogController
      });
      function DialogController($scope, $mdDialog, items) {
        $scope.items = items;
        $scope.closeDialog = function() {
          $mdDialog.hide();
        }
      }
    }
}
