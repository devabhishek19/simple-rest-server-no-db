app.controller('product', function($scope, $http){
	$http.get('/products').success(function(data, status, header, config){
		$scope.productData = data;
	})

})