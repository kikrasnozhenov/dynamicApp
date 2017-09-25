dApp.controller('addItemCtrl', ['$scope', function($scope) {

        $scope.items = [];
        $scope.comments = [];

        $scope.addItem = function() {
            $scope.items.push({'title': $scope.newItem})
            $scope.newItem = '';
            console.log('added item');
        }

        $scope.deleteItem = function(index) {	
            $scope.items.splice(index, 1);
        }
        $scope.addComment = function(e){
            $scope.comments.push({'comment': $scope.newComment})
            $scope.newComment = '';
            console.log('krasava');
        }
}]);





// $scope.ctrlEnter function(){
//     if(event.keyCode==10||(event.ctrlKey && event.keyCode==13))
//         $scope.Comments.click('aaaa');
// }