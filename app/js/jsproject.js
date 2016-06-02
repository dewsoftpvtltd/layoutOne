angular.module('jsApp', ['ngMaterial', 'ngMessages','ngRoute','restangular'])

  .config(function($routeProvider, RestangularProvider) {
    $routeProvider.
      when('/', {
        controller:ListCtrl,
        templateUrl:'partials/list.html'
      }).
      when('/edit/:projectId', {
        controller:EditCtrl,
        templateUrl:'partials/detail.html',
        resolve: {
          project: function(Restangular, $route){
            return Restangular.one('drink', $route.current.params.projectId).get();
          }
        }
      }).
      when('/new', {
        controller:CreateCtrl,
        templateUrl:'partials/detail.html'
      }).
      otherwise({
        redirectTo:'/'
      });

      RestangularProvider.setBaseUrl('http://testing.app:8000/api/v1');
     // RestangularProvider.setDefaultHttpFields({cache: true});

      //RestangularProvider.setDefaultRequestParams({ apiKey: '4f847ad3e4b08a2eed5f3b54' })
     // RestangularProvider.setRestangularFields({
     //   id: '_id.$oid'
    //  });

      RestangularProvider.setRequestInterceptor(function(elem, operation, what) {

        if (operation === 'put') {
          elem._id = undefined;
          return elem;
        }
        return elem;
      })
  });


function ListCtrl($scope, Restangular) {
   $scope.projects = Restangular.all("drink").getList().$object;
}


function CreateCtrl($scope, $location, Restangular) {
  $scope.save = function() {
    Restangular.all('drink').post($scope.project).then(function(project) {
      $location.path('/list');
    });
  }
   $scope.cancel = function() {
      $location.path('/');
  }
}

function EditCtrl($scope, $location, Restangular, project) {
  var original = project;
  $scope.project = Restangular.copy(original);


  $scope.isClean = function() {
    return angular.equals(original, $scope.project);
  }

  $scope.destroy = function() {
    original.remove().then(function() {
      $location.path('/list');
    });
  };

  $scope.save = function() {
    $scope.project.put().then(function() {
      $location.path('/');
    });
  };
  $scope.cancel = function() {
      $location.path('/');
  };
}

