angular.module('dApp', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "main.html"
    })
    .when("/items", {
      templateUrl : "items.html",
      controller : "addItemCtrl"
    })
    .otherwise({ 
          redirectTo: '/'
      });
}]);