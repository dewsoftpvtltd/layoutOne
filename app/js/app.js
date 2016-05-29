var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog){
  var alert;
  $scope.showDialog = showDialog;
  $scope.items = ['Strong','is','better'];

  function showDialog($event) {
    var parentEl = angular.element(document.querySelector('md-content'));
    alert = $mdDialog.alert({
      parent: parentEl,
      targetEvent: $event,
      template:
        '<md-dialog aria-label="Sample Dialog">' +
        '  <md-content>'+
        '    <md-list>'+
        '      <md-item ng-repeat="item in ctrl.items">'+
        '       <p>{{item}}</p>' +
        '      </md-item>'+
        '    </md-list>'+
        '  </md-content>' +
        '  <div class="md-actions">' +
        '    <md-button ng-click="ctrl.closeDialog()">' +
        '      Close Greeting' +
        '    </md-button>' +
        '  </div>' +
        '</md-dialog>',
        locals: {
          items: $scope.items,
          closeDialog: $scope.closeDialog
        },
        bindToController: true,
        controllerAs: 'ctrl',
        controller: 'DialogController'
    });

    $mdDialog
      .show( alert )
      .finally(function() {
        alert = undefined;
      });
  }
  $scope.closeDialog = function() {
    $mdDialog.hide();
  };
}])
.controller('DialogController', function($scope, $mdDialog) {
  //alert( this.closeDialog );
  //this.closeDialog = $scope.closeDialog;

    /*$scope.closeDialog = function() {
      $mdDialog.hide();
    };*/
});

app.controller('AppCtrl1', ['$scope', '$mdDialog', function($scope, $mdDialog){
  var alert;
  $scope.showDialog = function($event) {
    alert = $mdDialog.alert({
      title: 'Attention',
      content: 'This is an example of how easy dialogs can be!',
      ok: 'Close'
    });

    $mdDialog
      .show( alert )
      .finally(function() {
        alert = undefined;
      });
  }
}]);
