dApp.controller('addItemCtrl', ['$scope', function($scope) {

		$scope.items = [];

		$scope.addItem = function() {
			$scope.items.push({'title': $scope.newItem})
			$scope.newItem = ''
		}

		$scope.deleteItem = function(index) {	
			$scope.items.splice(index, 1);
		}
	}])