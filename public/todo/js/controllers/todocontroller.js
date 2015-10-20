angular.module('todoApp.controller', [])
.controller('todocontroller', ['$scope','$http', function($scope, $http){
	$scope.todos = [
		{
			title:'this is my first task',
			done: false
		}
	];
	$scope.submitdata = function(){
		var data = {
			title: $scope.newtodo,
			done: false
		};
		var url = '/todoItems';
		$http.post(url, data).success(function(data){
			console.log(data);
			$scope.todos.push(data);
			$scope.newtodo = '';

		})
	}
	// $scope.addtodo = function(){
	// 	$scope.todos.push({'title': $scope.newtodo, 'done': false});
	// 	$scope.newtodo = '';
	// };
	$scope.clearremovetodo = function(id){
		// $scope.todos = $scope.todos.filter(function(item){
		// 	return !item.done;
		// })
		$scope.todos.id = id;
		console.log(id);
	};
}])