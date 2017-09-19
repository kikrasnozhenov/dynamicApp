dApp.controller('addItemCtrl', ['$scope', function($scope) {

        $scope.items = [];
        $scope.Comments = [];

        $scope.addItem = function() {
            $scope.items.push({'title': $scope.newItem})
            $scope.newItem = ''
        }

        $scope.deleteItem = function(index) {	
            $scope.items.splice(index, 1);
        }
        $scope.addComment = function(){
            $scope.Comments.push({'Comment': $scope.newComment})
            $scope.newComment = ''
        }
    }])





// $scope.ctrlEnter function(){
//     if(event.keyCode==10||(event.ctrlKey && event.keyCode==13))
//         $scope.Comments.click('aaaa');
// }