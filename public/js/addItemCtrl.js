var dApp = angular.module('dApp');

dApp.controller('addItemCtrl', ['$scope', function($scope) {
    $scope.items = [];
    $scope.test = "test";

    $scope.additem = function() {
        $scope.items.push({'title': $scope.newItem, 'done':false})
        $scope.newItem = '';
    }

    $scope.deleteitem = function(index) {	
        $scope.items.splice(index, 1);
    }
}])