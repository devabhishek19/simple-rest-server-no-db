angular.module('todoApp.controller', [])
.controller('todocontroller', ['$scope', function($scope){
	$scope.todos = [
		{
			title:'this is my first task',
			done: false
		}
	];
	$scope.addtodo = function(){
		$scope.todos.push({'title': $scope.newtodo, 'done': false});
		$scope.newtodo = '';
	};
	$scope.clearremovetodo = function(){
		$scope.todos = $scope.todos.filter(function(item){
			return !item.done;
		})
	};
}])